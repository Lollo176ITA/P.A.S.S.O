'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight, UserRound, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import teamData from '@/data/team.json';

export default function TeamPage() {
  // Separa i ruoli principali dai soci normali
  const ruoliPrincipali = ['Presidente', 'Vicepresidente', 'Tesoriere', 'Segretario'];
  const direttivo = teamData.soci.filter(s => ruoliPrincipali.includes(s.ruolo));
  const altriSoci = teamData.soci.filter(s => !ruoliPrincipali.includes(s.ruolo));
  const volontari = teamData.volontari;
  const partner = teamData.partner;

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero con foto di gruppo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 tracking-tight">
            Il Nostro <span className="text-primary-500">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Persone diverse, un unico obiettivo: accompagnare ogni ragazzo verso una vita autonoma e piena.
          </p>
        </motion.div>

        {/* Foto di gruppo hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-20 bg-primary-100"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-primary-400 text-lg">Foto di gruppo del team</p>
          </div>
        </motion.div>

        {/* Direttivo */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary-900 text-center mb-12"
          >
            Il Direttivo
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {direttivo.map((membro, idx) => (
              <motion.div
                key={membro.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all"
              >
                <div className="relative h-64 bg-primary-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserRound className="w-20 h-20 text-primary-200" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                    {membro.ruolo}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {membro.nome} {membro.cognome}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {membro.descrizione}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Altri Soci */}
        {altriSoci.length > 0 && (
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-900 text-center mb-12"
            >
              I Soci Fondatori
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {altriSoci.map((membro, idx) => (
                <motion.div
                  key={membro.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all text-center"
                >
                  <div className="relative h-40 bg-primary-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserRound className="w-12 h-12 text-primary-200" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900">
                      {membro.nome} {membro.cognome}
                    </h3>
                    <p className="text-primary-600 text-xs font-medium mt-1">
                      Socio Fondatore
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Volontari */}
        {volontari.length > 0 && volontari[0].nome !== 'Nome' && (
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-900 text-center mb-4"
            >
              I Nostri Volontari
            </motion.h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Il cuore pulsante di P.A.S.S.O.: persone che dedicano il loro tempo per fare la differenza.
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {volontari.map((volontario, idx) => (
                <motion.div
                  key={volontario.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:border-primary-200 transition-all text-center p-3"
                >
                  <div className="relative w-16 h-16 mx-auto rounded-full bg-primary-50 overflow-hidden mb-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserRound className="w-8 h-8 text-primary-200" />
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {volontario.nome}
                  </h4>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Partner */}
        {partner.length > 0 && partner[0].nome !== 'Nome Partner' && (
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-900 text-center mb-4"
            >
              I Nostri Partner
            </motion.h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Collaboriamo con realtà che condividono la nostra visione.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partner.map((p, idx) => (
                <motion.a
                  key={p.id}
                  href={p.sito}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="relative w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Logo</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors flex items-center gap-1">
                    {p.nome}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </motion.a>
              ))}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 text-primary-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Vuoi unirti al team?</h3>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-gray-700">
            Siamo sempre alla ricerca di volontari che vogliano mettere a disposizione tempo,
            competenze e cuore per accompagnare i ragazzi nel loro percorso.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-primary-200 transition-all"
          >
            Contattaci <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
}
