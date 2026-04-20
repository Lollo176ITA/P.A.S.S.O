import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Scrivici per informazioni, volontariato, partnership o richieste di supporto. Siamo a Milano ma operiamo su tutto il territorio italiano.',
  alternates: { canonical: '/contatti' },
  openGraph: {
    title: 'Contatti · P.A.S.S.O.',
    description:
      'Email, telefono, WhatsApp e un form per scriverci direttamente: siamo qui per te.',
    url: '/contatti',
  },
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
