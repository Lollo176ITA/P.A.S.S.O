'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Calendar, Users, Heart, Sparkles, ArrowRight, BookOpen, Lightbulb, HandHeart } from 'lucide-react';
import Link from 'next/link';

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
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 tracking-tight">
            La Nostra <span className="text-primary-500">Storia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un progetto nato dall&apos;esperienza vissuta in prima persona e dalla volontà 
            di trasformare le difficoltà in opportunità per gli altri.
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
                P.A.S.S.O. nasce nel <strong>dicembre 2025</strong> da un&apos;idea di Lorenzo Censi, 
                che ha vissuto in prima persona l&apos;esperienza della casa famiglia: prima come ragazzo 
                accolto, poi come volontario. Questa doppia prospettiva gli ha permesso di osservare 
                da vicino una realtà che spesso rimane invisibile.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nel corso degli anni, Lorenzo ha potuto constatare cosa accade ai ragazzi quando 
                escono dalle strutture di accoglienza: si trovano ad affrontare la vita adulta 
                <strong> senza possedere tutte le competenze necessarie per vivere in autonomia</strong>. 
                Non sanno come gestire le bollette, come cercare casa, come muoversi nel mondo del lavoro. 
                E, cosa ancora più grave, <strong>non conoscono le agevolazioni e i diritti</strong> che 
                spettano loro per legge.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                P.A.S.S.O. nasce proprio per colmare questo vuoto: <strong>aiutare nella praticità 
                quotidiana</strong>, fornendo strumenti concreti, informazioni accessibili e un 
                accompagnamento umano per costruire, passo dopo passo, un futuro indipendente.
              </p>
            </motion.div>

            {/* Lorenzo's Story */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-linear-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-10 shadow-xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary-300" />
                L&apos;Esperienza che Ha Ispirato Tutto
              </h3>
              <p className="text-primary-100 leading-relaxed text-lg mb-6">
                Lorenzo ha trascorso <strong className="text-white">10 anni in casa famiglia</strong>, 
                un periodo lungo che gli ha permesso di crescere e formarsi, ma anche di comprendere 
                profondamente le sfide che i ragazzi affrontano.
              </p>
              <p className="text-primary-100 leading-relaxed text-lg mb-6">
                A 19 anni, Lorenzo è entrato nel <strong className="text-white">progetto 
                Care Leavers</strong>. È stato proprio durante questo 
                percorso che ha toccato con mano una realtà dolorosa: ragazzi provenienti da altre 
                comunità che erano stati <strong className="text-white">lasciati soli</strong>, 
                senza un adeguato supporto né le informazioni necessarie per conoscere i propri diritti.
              </p>
              <p className="text-white font-medium text-lg border-l-4 border-primary-400 pl-4 italic">
                &quot;Mi ritengo fortunato ad aver scoperto tutte le agevolazioni alle quali avevo diritto. 
                Ma allo stesso tempo ho pensato: quanti altri ragazzi là fuori non le conoscono? 
                Quanti si sentono abbandonati proprio nel momento in cui avrebbero più bisogno di aiuto?&quot;
              </p>
            </motion.div>

            {/* The Decision */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-primary-50 rounded-3xl p-8 md:p-10 border border-primary-100"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center gap-3">
                <HandHeart className="w-6 h-6 text-primary-500" />
                La Decisione di Agire
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Da questa consapevolezza è nata una scelta: non restare a guardare, ma <strong>fare 
                qualcosa di concreto</strong>. Lorenzo ha deciso di mettere la propria esperienza al 
                servizio degli altri, creando un&apos;associazione che potesse essere quel punto di 
                riferimento che tanti ragazzi non hanno mai avuto. Un luogo dove trovare risposte, 
                supporto pratico e, soprattutto, qualcuno che capisce davvero cosa significa 
                affrontare il mondo da soli.
              </p>
            </motion.div>

            {/* The Team */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary-500" />
                Il Primo Nucleo di Soci
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nessun grande progetto nasce da solo. Lorenzo ha trovato il sostegno delle persone 
                a lui più vicine: <strong>Giorgia</strong>, <strong>Alessio</strong> e <strong>Chiara</strong>, che hanno deciso di essere parte attiva 
                di questo percorso.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A loro si sono uniti <strong>Sonia</strong>, <strong>Marco</strong>, <strong>Claudia</strong>, 
                <strong> Eleonora</strong> e <strong>Lorenzo S.</strong>: insieme formano il primo nucleo 
                di soci fondatori di P.A.S.S.O. Un gruppo di persone diverse, unite dalla stessa 
                volontà di fare la differenza nella vita dei ragazzi più fragili.
              </p>
              
              <div className="bg-primary-50 rounded-2xl p-6 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-primary-900">La Nostra Missione</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Accompagnare i giovani che escono dalle comunità e dalle case famiglia verso 
                  l&apos;autonomia, fornendo competenze pratiche per la vita quotidiana e 
                  informazioni chiare sui diritti e le agevolazioni che spesso non conoscono.
                </p>
              </div>
            </motion.div>

            {/* Future */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center gap-3">
                <ArrowRight className="w-6 h-6 text-primary-500" />
                Guardando al Futuro
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A partire dall&apos;inizio del <strong>2026</strong>, P.A.S.S.O. avvierà ufficialmente 
                le sue attività. L&apos;obiettivo è ambizioso ma chiaro: diventare un punto di riferimento 
                per tutti i ragazzi che escono dal sistema di accoglienza, offrendo loro gli strumenti 
                e il supporto necessari per costruire il proprio futuro con fiducia.
              </p>
              <p className="text-lg text-primary-700 font-medium">
                Perché ogni passo conta. E noi siamo qui per farli insieme.
              </p>
            </motion.div>

          </div>

          {/* Stats Column */}
          <div className="lg:col-span-4 space-y-6 sticky top-8">
            {[
              { label: "Anno di Fondazione", value: "2025", icon: <Calendar className="w-6 h-6" /> },
              { label: "Soci Fondatori", value: "9", icon: <Users className="w-6 h-6" /> },
              { label: "Inizio Attività", value: "2026", icon: <Heart className="w-6 h-6" /> },
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
              <h4 className="font-bold text-primary-900 mb-2">Vuoi far parte del progetto?</h4>
              <p className="text-sm text-gray-600 mb-4">Scopri come puoi contribuire al nostro progetto e aiutare i ragazzi a costruire il loro futuro.</p>
              <Link href="/contatti">
                <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg cursor-pointer">
                  Contattaci
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
