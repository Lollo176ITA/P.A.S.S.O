'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight, UserRound, ExternalLink, HandHeart } from 'lucide-react';
import Link from 'next/link';
import teamData from '@/data/team.json';

interface Volontario {
  id: string;
  nome: string;
  cognome?: string;
  foto?: string;
}

interface Partner {
  id: string;
  nome: string;
  logo?: string;
  sito: string;
}

export default function TeamPage() {
  const ruoliPrincipali = ['Presidente', 'Vicepresidente', 'Tesoriere', 'Segretario'];
  const direttivo = teamData.soci.filter((s) => ruoliPrincipali.includes(s.ruolo));
  const altriSoci = teamData.soci.filter((s) => !ruoliPrincipali.includes(s.ruolo));
  const volontari = teamData.volontari as Volontario[];
  const partner = teamData.partner as Partner[];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 dark:text-primary-100 mb-6 tracking-tight">
            Il Nostro <span className="text-primary-500">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Persone diverse, un unico obiettivo: accompagnare ogni ragazzo verso una vita autonoma e piena.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-20 bg-primary-100 dark:bg-primary-900/40"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-primary-500 dark:text-primary-300 text-lg">Foto di gruppo del team</p>
          </div>
        </motion.div>

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary-900 dark:text-primary-100 text-center mb-12"
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
                className="bg-surface rounded-3xl overflow-hidden shadow-lg border border-border hover:border-primary/40 hover:shadow-xl transition-all"
              >
                <div className="relative h-64 bg-primary-50 dark:bg-primary-900/40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserRound className="w-20 h-20 text-primary-200 dark:text-primary-400/60" aria-hidden />
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-200 text-xs font-semibold rounded-full mb-3">
                    {membro.ruolo}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {membro.nome} {membro.cognome}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {membro.descrizione}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {altriSoci.length > 0 && (
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-900 dark:text-primary-100 text-center mb-12"
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
                  className="bg-surface rounded-2xl overflow-hidden shadow-md border border-border hover:border-primary/40 hover:shadow-lg transition-all text-center"
                >
                  <div className="relative h-40 bg-primary-50 dark:bg-primary-900/40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <UserRound className="w-12 h-12 text-primary-200 dark:text-primary-400/60" aria-hidden />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-foreground">
                      {membro.nome} {membro.cognome}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-300 text-xs font-medium mt-1">
                      Socio Fondatore
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary-900 dark:text-primary-100 text-center mb-4"
          >
            I Nostri Volontari
          </motion.h2>

          {volontari.length > 0 ? (
            <>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
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
                    className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border hover:border-primary/40 transition-all text-center p-3"
                  >
                    <div className="relative w-16 h-16 mx-auto rounded-full bg-primary-50 dark:bg-primary-900/40 overflow-hidden mb-2">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <UserRound className="w-8 h-8 text-primary-200 dark:text-primary-400/60" aria-hidden />
                      </div>
                    </div>
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {volontario.nome}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto text-center bg-surface rounded-3xl p-8 border border-border shadow-sm">
              <HandHeart className="w-10 h-10 text-primary-500 mx-auto mb-3" aria-hidden />
              <p className="text-muted-foreground">
                Stiamo costruendo la squadra dei volontari. Se vuoi dedicare il tuo tempo,{' '}
                <Link href="/contatti" className="font-semibold text-primary-700 dark:text-primary-300 underline underline-offset-2">
                  scrivici
                </Link>
                : ogni competenza conta.
              </p>
            </div>
          )}
        </section>

        {partner.length > 0 && (
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary-900 dark:text-primary-100 text-center mb-4"
            >
              I Nostri Partner
            </motion.h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
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
                  className="bg-surface rounded-2xl p-6 shadow-md border border-border hover:border-primary/40 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3 group"
                >
                  <div className="relative w-24 h-24 bg-surface-muted rounded-xl overflow-hidden flex items-center justify-center">
                    <span className="text-muted-foreground text-xs">Logo</span>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors flex items-center gap-1">
                    {p.nome}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                  </span>
                </motion.a>
              ))}
            </div>
          </section>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100 rounded-3xl p-8 md:p-12 text-center border border-primary-100 dark:border-primary-800/60"
        >
          <h3 className="text-3xl font-bold mb-4">Vuoi unirti al team?</h3>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-muted-foreground">
            Siamo sempre alla ricerca di volontari che vogliano mettere a disposizione tempo,
            competenze e cuore per accompagnare i ragazzi nel loro percorso.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-primary-200 transition-all"
          >
            Contattaci <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
}
