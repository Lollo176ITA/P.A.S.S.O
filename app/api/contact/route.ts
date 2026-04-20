import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TOPICS = new Set([
  'generale',
  'supporto',
  'volontariato',
  'partnership',
  'stampa',
]);

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  privacy?: unknown;
}

function bad(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return bad('Corpo della richiesta non valido.');
  }

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const topic = typeof payload.topic === 'string' ? payload.topic : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const privacy = payload.privacy === true;

  if (name.length < 2 || name.length > 120) {
    return bad('Il nome deve contenere tra 2 e 120 caratteri.');
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return bad('Inserisci un indirizzo email valido.');
  }
  if (!ALLOWED_TOPICS.has(topic)) {
    return bad('Seleziona un argomento valido.');
  }
  if (message.length < 10 || message.length > 2000) {
    return bad('Il messaggio deve contenere tra 10 e 2000 caratteri.');
  }
  if (!privacy) {
    return bad('È necessario accettare l\'informativa sulla privacy.');
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return NextResponse.json(
      {
        error:
          'Il modulo non è ancora collegato: scrivici direttamente a info@progettopasso.it',
      },
      { status: 503 },
    );
  }

  try {
    const supabase = await createClient();
    const userAgent = request.headers.get('user-agent') ?? null;
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : null;

    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      topic,
      message,
      privacy_accepted: true,
      user_agent: userAgent,
      ip,
    });

    if (error) {
      console.error('[contact] supabase insert error', error);
      return NextResponse.json(
        { error: 'Non siamo riusciti a salvare il messaggio. Riprova più tardi.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] unexpected error', error);
    return NextResponse.json(
      { error: 'Errore inatteso, riprova più tardi.' },
      { status: 500 },
    );
  }
}
