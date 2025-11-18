'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, FileText } from 'lucide-react';

export default function ContattiPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero minimal + WIP */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 tracking-tight">
            Contattaci
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Questa sezione è in aggiornamento. Nel frattempo puoi usare i contatti qui sotto.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-xs font-medium text-primary-700">
            <FileText className="w-4 h-4" />
            <span>Work in progress · Testo facile da modificare in questa pagina</span>
          </div>
        </motion.div>

        {/* Box contatti semplice e modificabile */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 space-y-6">
          <p className="text-sm text-gray-600">
            Puoi modificare liberamente i dati qui sotto: email, telefono, indirizzo e link. Tutto il contenuto
            è in questo file: <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">app/contatti/page.tsx</span>.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <a
                  href="mailto:info@progettopasso.it"
                  className="text-sm text-primary-600 hover:underline"
                >
                  info@progettopasso.it
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Telefono</p>
                <a
                  href="tel:+393401234567"
                  className="text-sm text-primary-600 hover:underline"
                >
                  +39 340 123 4567
                </a>
                <p className="text-xs text-gray-500 mt-1">Lun–Ven: 9:00–18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-primary-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                <a
                  href="https://wa.me/393401234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:underline"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Sede</p>
                <p className="text-sm text-gray-700">
                  Via Giuseppe Mazzini, 42
                  <br />
                  20100 Milano (MI)
                  <br />
                  Italia
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              Quando la sezione sarà pronta, qui potremo inserire un form o un link a una piattaforma esterna.
            </p>
            <a
              href="mailto:info@progettopasso.it"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-primary-200 transition-all"
            >
              Scrivi ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
