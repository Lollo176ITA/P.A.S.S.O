'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Target, Sparkles, ArrowRight, Home, FileText, HandHeart, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ScopoPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-6 tracking-tight">
            Il Nostro <span className="text-primary-500">Scopo</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aiutiamo i ragazzi che escono da comunità e case famiglia ad affrontare 
            la vita adulta con competenze concrete e informazioni chiare.
          </p>
        </motion.div>

        {/* Main Mission Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden bg-linear-to-br from-primary-600 to-primary-800 rounded-3xl shadow-2xl p-8 md:p-16 text-white mb-20"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary-400 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>La Nostra Missione</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Dalla comunità alla <br/>
                <span className="text-primary-200">piena autonomia</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-50 leading-relaxed mb-6">
                Quando un ragazzo esce dalla comunità o dalla casa famiglia, si trova spesso 
                solo di fronte a sfide quotidiane che nessuno gli ha insegnato ad affrontare. 
                <strong className="text-white"> P.A.S.S.O. esiste per colmare questo vuoto</strong>: 
                offriamo supporto pratico, informazioni sui diritti e un accompagnamento umano 
                verso l&apos;indipendenza.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Target className="w-32 h-32 text-white" strokeWidth={1.5} />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Young Association Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl p-6 md:p-8 mb-20 border border-primary-200 dark:border-primary-700/60"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full shrink-0">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-2">
                Un&apos;Associazione Giovane, per i Giovani
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary-700">5 soci su 9 sono under 35</strong>. Crediamo che chi ha 
                vissuto esperienze simili possa capire meglio le sfide che i ragazzi affrontano. 
                La nostra energia e la nostra freschezza sono al servizio di chi sta costruendo il proprio futuro.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars - Main Focus */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-100 text-center mb-4">
            I Tre Pilastri di P.A.S.S.O.
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Tre aree di intervento concrete per accompagnare ogni ragazzo verso una vita autonoma e consapevole.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Home className="w-8 h-8" />,
              title: "Aiuto Pratico Quotidiano",
              desc: "Come si paga una bolletta? Come si cerca casa? Come si affronta un colloquio di lavoro? Rispondiamo alle domande che nessuno ti ha mai spiegato, con supporto concreto e senza giudizio.",
              examples: ["Gestione bollette e utenze", "Ricerca alloggio", "Orientamento al lavoro", "Gestione del budget"]
            },
            {
              icon: <FileText className="w-8 h-8" />,
              title: "Diritti e Agevolazioni",
              desc: "Esistono bonus, agevolazioni e diritti pensati proprio per i care leavers. Il problema? Quasi nessuno li conosce. Noi ti aiutiamo a scoprirli e ad accedervi.",
              examples: ["Bonus e contributi economici", "Agevolazioni fiscali", "Accesso ai servizi", "Supporto burocratico"]
            },
            {
              icon: <HandHeart className="w-8 h-8" />,
              title: "Accompagnamento Umano",
              desc: "Non sei solo. Ti affianchiamo nel percorso verso l'autonomia con persone che capiscono le tue sfide, rispettando i tuoi tempi e valorizzando i tuoi obiettivi.",
              examples: ["Supporto personalizzato", "Rete di riferimento stabile", "Ascolto senza giudizio", "Crescita insieme"]
            }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="group bg-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/40"
            >
              <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-300 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {card.desc}
              </p>
              <ul className="space-y-2">
                {card.examples.map((example, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 dark:bg-primary-900/30 rounded-3xl p-8 md:p-12 text-center border border-primary-100 dark:border-primary-800/60"
        >
          <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-100 mb-4">Hai bisogno di supporto?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Che tu stia per uscire dalla comunità o l&apos;abbia già fatto, siamo qui per te. 
            Nessuna domanda è banale, nessun problema è troppo piccolo.
          </p>
          <Link href="/contatti">
            <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:gap-4 shadow-lg hover:shadow-primary-200 cursor-pointer">
              Contattaci <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>

      </div>
    </PageLayout>
  );
}
