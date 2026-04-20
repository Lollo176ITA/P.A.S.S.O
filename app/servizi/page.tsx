'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Users, Wrench, FileText, Briefcase, Handshake, MonitorPlay, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiziPage() {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Accompagnamento Personalizzato',
      description:
        "Un team misto di volontari e professionisti affianca ogni ragazzo nel percorso verso l'autonomia.",
      points: [
        'Incontri settimanali o bisettimanali',
        'Piano personalizzato di obiettivi',
        'Supporto psicologico ed educativo',
        'Affiancamento nelle pratiche quotidiane',
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      label: 'Workshop Pratici',
      description:
        'Laboratori interattivi per allenare le competenze fondamentali per vivere da soli.',
      points: [
        'Gestione del budget e risparmio',
        'Casa: bollette, contratti, manutenzione',
        'Cucina base e alimentazione sana',
        'Orientamento al lavoro e CV',
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: 'Supporto Legale e Amministrativo',
      description:
        'Ti aiutiamo a non perderti tra documenti, burocrazia e scadenze.',
      points: [
        'Dichiarazione dei redditi e tasse',
        'Contratti di lavoro e affitto',
        'Accesso a servizi e contributi',
        'Consulenza su diritti e doveri',
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: 'Orientamento Professionale',
      description:
        'Troviamo insieme la strada giusta tra studio, formazione e lavoro.',
      points: [
        'Creazione CV e lettera di presentazione',
        'Simulazione colloqui di lavoro',
        'Orientamento a ITS e corsi professionali',
        'Connessione con aziende partner',
      ],
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      label: 'Rete Sociale e Comunitaria',
      description:
        'Relazioni vere, momenti condivisi e una comunità che resta anche fuori dalla comunità.',
      points: [
        'Attività di gruppo e socializzazione',
        'Connessione con associazioni locali',
        'Opportunità di volontariato',
        'Eventi culturali e ricreativi',
      ],
    },
    {
      icon: <MonitorPlay className="w-6 h-6" />,
      label: 'Piattaforma Digitale',
      description:
        'Uno spazio online sempre accessibile con materiali, promemoria e supporto.',
      points: [
        'Guide pratiche e video tutorial',
        'Calendario eventi e scadenze',
        'Chat di supporto e Q&A',
        'Materiali scaricabili e checklist',
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-6 tracking-tight">
            I Nostri <span className="text-primary-500">Servizi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un percorso completo, pensato per accompagnarti passo dopo passo verso la tua autonomia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-surface rounded-3xl p-8 shadow-lg border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-3">
                {service.label}
              </h2>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 text-muted-foreground mt-auto">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 dark:bg-primary-900/30 rounded-3xl p-8 md:p-12 text-center border border-primary-100 dark:border-primary-800/60"
        >
          <h3 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">
            Tutti i servizi sono gratuiti
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Crediamo che il supporto non debba essere un privilegio. Se stai uscendo da una comunità
            o da una casa famiglia e senti il bisogno di una mano, i nostri servizi sono pensati
            proprio per te.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contatti">
              <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-primary-200 transition-all cursor-pointer">
                Scopri come accedere <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Nessun costo, solo impegno reciproco e voglia di costruire il tuo futuro.
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
