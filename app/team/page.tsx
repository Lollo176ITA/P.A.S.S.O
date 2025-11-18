'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, Sparkles, Star, ArrowRight, UserRound, HandHeart } from 'lucide-react';

export default function TeamPage() {
  const coreTeam = [
    {
      initials: 'MC',
      name: 'Maria Consonni',
      role: 'Coordinatrice Generale',
      bio: 'Pedagogista con 15 anni di esperienza in comunità per minori. Coordina le attività e garantisce la qualità del supporto educativo.',
    },
    {
      initials: 'LR',
      name: 'Luca Rossi',
      role: 'Responsabile Progetti',
      bio: 'Psicologo e project manager, si occupa della pianificazione strategica e della gestione dei progetti di accompagnamento.',
    },
  ];

  const professionalTeam = [
    { name: 'Sofia Bianchi', role: 'Psicologa', icon: '🧠' },
    { name: 'Marco Verdi', role: 'Educatore Professionale', icon: '👨‍🏫' },
    { name: 'Anna Ferrari', role: 'Assistente Sociale', icon: '🤲' },
    { name: 'Giorgio Colombo', role: 'Consulente del Lavoro', icon: '💼' },
    { name: 'Elena Russo', role: 'Avvocato', icon: '⚖️' },
    { name: 'Paolo Ricci', role: 'Commercialista', icon: '📊' },
  ];

  const volunteerStats = [
    { label: 'Volontari attivi', value: '15+' },
    { label: 'Ore di volontariato/mese', value: '200+' },
    { label: 'Professioni diverse', value: '10+' },
    { label: 'Passione e dedizione', value: '100%' },
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
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-6">
            <Users className="w-6 h-6 text-primary-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-4 tracking-tight">
            Il Nostro <span className="text-primary-500">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Persone diverse, un unico obiettivo: accompagnare ogni ragazzo verso una vita autonoma e piena.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-16">
          {/* Coordinamento */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-primary-800 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary-500" />
              Coordinamento
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreTeam.map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center text-lg font-bold">
                      {member.initials}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Volontari highlight */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-3xl p-8 flex flex-col gap-4"
          >
            <div className="inline-flex items-center gap-2 text-primary-700 mb-2">
              <HeartHandshake className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide uppercase">Il cuore di P.A.S.S.O.</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-2">Volontari e professionisti</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Il nostro team unisce competenze tecniche e umane: ogni persona porta la propria storia
              e il proprio sguardo, per costruire insieme percorsi su misura.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {volunteerStats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm border border-primary-100">
                  <div className="text-2xl font-bold text-primary-900">{stat.value}</div>
                  <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Equipe Professionale */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary-800 flex items-center gap-3">
              <UserRound className="w-5 h-5 text-primary-500" />
              Equipe professionale
            </h2>
            <span className="hidden md:inline-flex items-center gap-1 text-xs text-gray-500">
              <Star className="w-4 h-4 text-primary-400" />
              Competenze diverse, stessa direzione
            </span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {professionalTeam.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg border border-gray-100 hover:border-primary-200 transition-all"
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {member.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 text-xs font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volontari sezione testo */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-800 mb-3 flex items-center gap-2">
                <HandHeart className="w-5 h-5 text-primary-500" />
                I nostri volontari
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Il cuore pulsante di P.A.S.S.O. è la nostra rete di volontari: persone di tutte le età e professioni
                che dedicano il loro tempo e le loro competenze per fare la differenza. Ognuno porta qualcosa di unico,
                ma tutti condividono la stessa idea: nessuno deve affrontare da solo il passaggio all&apos;autonomia.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {volunteerStats.map((stat) => (
                <div key={stat.label} className="text-center bg-primary-50 rounded-2xl px-4 py-3">
                  <div className="text-2xl font-bold text-primary-900 mb-1">{stat.value}</div>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 text-primary-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Vuoi unirti al team?</h3>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-gray-700">
            Siamo sempre alla ricerca di professionisti e volontari che vogliano mettere a disposizione tempo,
            competenze e cuore per accompagnare i nostri ragazzi.
          </p>
          <a
            href="/contatti"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-primary-200 transition-all"
          >
            Contattaci <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
}
