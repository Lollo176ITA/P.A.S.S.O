'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const TOPICS = [
  { value: 'generale', label: 'Informazioni generali' },
  { value: 'supporto', label: 'Ho bisogno di supporto' },
  { value: 'volontariato', label: 'Vorrei fare volontariato' },
  { value: 'partnership', label: 'Partnership / collaborazione' },
  { value: 'stampa', label: 'Stampa e media' },
];

const INITIAL_VALUES = {
  name: '',
  email: '',
  topic: 'generale',
  message: '',
  privacy: false,
};

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isSubmitting = status === 'submitting';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Si è verificato un errore inatteso.');
      }

      setStatus('success');
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Errore sconosciuto.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-describedby="contact-form-status"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
            Nome e cognome
            <span className="text-primary-600" aria-hidden> *</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Mario Rossi"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
            Email
            <span className="text-primary-600" aria-hidden> *</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="tu@esempio.it"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-topic" className="block text-sm font-medium text-foreground mb-1.5">
          Argomento
        </label>
        <select
          id="contact-topic"
          name="topic"
          value={values.topic}
          onChange={(e) => setValues((v) => ({ ...v, topic: e.target.value }))}
          className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          disabled={isSubmitting}
        >
          {TOPICS.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
          Messaggio
          <span className="text-primary-600" aria-hidden> *</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Raccontaci come possiamo aiutarti o cosa ti piacerebbe fare con noi."
          disabled={isSubmitting}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          required
          checked={values.privacy}
          onChange={(e) => setValues((v) => ({ ...v, privacy: e.target.checked }))}
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/40"
          disabled={isSubmitting}
        />
        <span>
          Ho letto l&apos;informativa sulla{' '}
          <a href="/privacy" className="text-primary-700 dark:text-primary-300 underline underline-offset-2">
            Privacy
          </a>{' '}
          e acconsento al trattamento dei miei dati per rispondere al mio messaggio.
        </span>
      </label>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 hover:shadow-primary-200/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Invio in corso…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden />
              Invia messaggio
            </>
          )}
        </button>

        <p
          id="contact-form-status"
          role="status"
          aria-live="polite"
          className="text-sm min-h-[1.5rem]"
        >
          {status === 'success' && (
            <span className="inline-flex items-center gap-2 text-primary-700 dark:text-primary-300">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Messaggio inviato. Ti rispondiamo al più presto.
            </span>
          )}
          {status === 'error' && (
            <span className="inline-flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" aria-hidden />
              {errorMessage || 'Errore invio, riprova.'}
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
