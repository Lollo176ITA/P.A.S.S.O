'use client';

import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact';

export default function ContattiPage() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-900 dark:text-primary-100 mb-4 tracking-tight">
            Scrivici
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hai una domanda, vuoi fare volontariato o proporre una collaborazione? Siamo qui.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 bg-surface rounded-3xl p-6 md:p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-1">Compila il modulo</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Ti rispondiamo di solito entro due giorni lavorativi.
            </p>
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-surface rounded-3xl p-6 shadow-lg border border-border space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-300 mt-0.5 shrink-0" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-primary-600 dark:text-primary-300 hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 dark:text-primary-300 mt-0.5 shrink-0" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">Telefono</p>
                  <a
                    href={`tel:${CONTACT_INFO.phoneE164}`}
                    className="text-sm text-primary-600 dark:text-primary-300 hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">{CONTACT_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary-600 dark:text-primary-300 mt-0.5 shrink-0" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 dark:text-primary-300 hover:underline inline-flex items-center gap-1"
                  >
                    Scrivici su WhatsApp <ArrowRight className="w-3 h-3" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-300 mt-0.5 shrink-0" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-foreground">Sede</p>
                  <p className="text-sm text-muted-foreground">
                    {CONTACT_INFO.address.street}
                    <br />
                    {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city} ({CONTACT_INFO.address.province})
                    <br />
                    {CONTACT_INFO.address.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-primary-50 dark:bg-primary-900/30 p-6 border border-primary-100 dark:border-primary-700/50">
              <h3 className="text-base font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Preferisci la via breve?
              </h3>
              <p className="text-sm text-muted-foreground">
                Mandaci una mail diretta: spesso è il modo più veloce per fissare una chiamata.
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-100 transition"
              >
                Scrivi ora <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
