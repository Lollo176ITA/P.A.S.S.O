'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Calendar, Users, Heart, Quote, History, Sparkles, ArrowRight } from 'lucide-react';

export default function StoriaPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-6">
            <History className="w-6 h-6 text-primary-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 tracking-tight">
            La Nostra <span className="text-primary-500">Storia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un viaggio nato dall&apos;ascolto e cresciuto con la passione di chi crede nel futuro di ogni giovane.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Origin Story */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-primary-800 mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary-500" />
                Come Nasce P.A.S.S.O.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                P.A.S.S.O. nasce dall&apos;osservazione diretta di una realtà spesso invisibile: giovani che 
                escono da comunità e case famiglia si trovano improvvisamente catapultati nella vita adulta, 
                senza una rete di supporto, senza competenze pratiche fondamentali e, troppo spesso, senza 
                speranza.
              </p>
              
              <div className="bg-primary-50 rounded-2xl p-8 relative mt-8">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-primary-200 rotate-180" />
                <p className="text-xl text-primary-900 italic font-medium text-center relative z-10 pt-4">
                  &quot;Non sapevo come pagare una bolletta. Non sapevo a chi chiedere. Mi sentivo 
                  solo e incapace.&quot;
                </p>
                <p className="text-center text-primary-600 mt-4 text-sm font-bold uppercase tracking-wider">
                  - Un ragazzo di P.A.S.S.O.
                </p>
              </div>
            </motion.div>

            {/* The Turning Point */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary-300" />
                La Svolta del 2024
              </h3>
              <p className="text-primary-100 leading-relaxed text-lg mb-6">
                Un gruppo di educatori, psicologi, volontari e professionisti si è riunito con 
                un obiettivo chiaro: creare un ponte concreto tra la vita protetta della comunità e 
                l&apos;autonomia vera.
              </p>
              <p className="text-white font-medium text-lg border-l-4 border-primary-400 pl-4">
                Non volevamo creare un altro servizio assistenziale, ma una vera &quot;palestra di vita&quot;.
              </p>
            </motion.div>

            {/* Today */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center gap-3">
                <ArrowRight className="w-6 h-6 text-primary-500" />
                Oggi
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Oggi P.A.S.S.O. è cresciuto, ma mantiene la stessa filosofia: accompagnamento personalizzato, 
                competenze pratiche, e una rete di persone che credono nel potenziale di ogni giovane. 
                Ogni passo conta, e noi siamo qui per farli insieme.
              </p>
            </motion.div>

          </div>

          {/* Stats Column */}
          <div className="lg:col-span-4 space-y-6 sticky top-8">
            {[
              { label: "Anno di Fondazione", value: "2024", icon: <Calendar className="w-6 h-6" /> },
              { label: "Ragazzi Supportati", value: "50+", icon: <Users className="w-6 h-6" /> },
              { label: "Volontari", value: "20+", icon: <Heart className="w-6 h-6" /> },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-primary-200 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm font-medium">{stat.label}</span>
                  <div className="text-primary-400 group-hover:text-primary-600 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-primary-900">{stat.value}</div>
              </motion.div>
            ))}
            
            <div className="bg-primary-50 rounded-2xl p-6 mt-8">
              <h4 className="font-bold text-primary-900 mb-2">Vuoi saperne di più?</h4>
              <p className="text-sm text-gray-600 mb-4">Scopri come puoi contribuire alla nostra storia.</p>
              <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg cursor-pointer">
                Contattaci
              </button>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
