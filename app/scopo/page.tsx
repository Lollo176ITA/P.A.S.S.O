'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

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
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 tracking-tight">
            Il Nostro <span className="text-primary-500">Scopo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Costruiamo ponti verso il futuro, trasformando le sfide in opportunità per ogni giovane che esce dalla comunità.
          </p>
        </motion.div>

        {/* Main Mission Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl shadow-2xl p-8 md:p-16 text-white mb-20"
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
              <p className="text-lg md:text-xl text-primary-50 leading-relaxed mb-8">
                Vogliamo trasformare l&apos;uscita dalla comunità in un vero ingresso nella vita adulta, 
                fornendo competenze concrete, supporto continuativo e una rete di riferimento 
                stabile. Non lasciamo nessuno indietro.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Target className="w-32 h-32 text-white" strokeWidth={1.5} />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Comunità",
              desc: "Creiamo una rete solida di persone che si sostengono a vicenda, perché nessuno cresce da solo."
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Supporto",
              desc: "Offriamo un accompagnamento personalizzato che rispetta i tempi e i sogni di ogni ragazzo."
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "Futuro",
              desc: "Forniamo gli strumenti pratici e le competenze necessarie per costruire una vita indipendente e felice."
            }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Vuoi far parte del cambiamento?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Che tu sia un ragazzo in cerca di orientamento o un sostenitore che vuole aiutare, c&apos;è posto per te.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:gap-4 shadow-lg hover:shadow-primary-200 cursor-pointer">
            Unisciti a noi <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </PageLayout>
  );
}
