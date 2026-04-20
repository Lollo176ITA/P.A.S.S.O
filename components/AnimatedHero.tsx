'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const REVEAL_DELAY = 1000;

const PASSO_LETTERS = [
  {
    letter: 'P',
    words: ['Percorsi pratici', 'Palestra di autonomia', 'Progetti territoriali'],
  },
  {
    letter: 'A',
    words: ['Ascolto attivo', 'Allenamento quotidiano', 'Accompagnamento continuo'],
  },
  {
    letter: 'S',
    words: ['Sostegno relazionale', 'Servizi accessibili', 'Skill digitali'],
  },
  {
    letter: 'S',
    words: ['Squadra mista', 'Strumenti concreti', 'Scelte condivise'],
  },
  {
    letter: 'O',
    words: ['Opportunità di lavoro', 'Orizzonte di fiducia', 'Obiettivi misurabili'],
  },
];

const FOOTPRINT_COUNT = 20;

function FootprintIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M7.5 13c1.93 0 3.5-2.46 3.5-5S9.43 3 7.5 3 4 5.46 4 8s1.57 5 3.5 5zm0 1.5c-2.09 0-3.5 1.96-3.5 3.75 0 1.66 1.34 3 3 3 1.1 0 2-.9 2-2v-1.5c0-1.93-.56-3.25-1.5-3.25zm9-11.5C14.57 3 13 5.46 13 8s1.57 5 3.5 5S20 10.54 20 8s-1.57-5-3.5-5zm0 11.5c-.94 0-1.5 1.32-1.5 3.25v1.5c0 1.1.9 2 2 2 1.66 0 3-1.34 3-3 0-1.79-1.41-3.75-3.5-3.75z" />
    </svg>
  );
}

export default function AnimatedHero() {
  const [showContent, setShowContent] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [activeLetterIndex, setActiveLetterIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(
      () => setShowContent(true),
      shouldReduceMotion ? 0 : REVEAL_DELAY,
    );
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  const footprintPositions = useMemo(() => {
    return Array.from({ length: FOOTPRINT_COUNT }).map((_, index) => {
      const angle = (index / FOOTPRINT_COUNT) * Math.PI * 2;
      const radiusX = 52;
      const radiusY = 45;
      const xPercent = Number((50 + radiusX * Math.cos(angle)).toFixed(4));
      const yPercent = Number((50 + radiusY * Math.sin(angle)).toFixed(4));
      const tangentAngle = (angle * 180) / Math.PI + 90;
      const footRotation = Number((tangentAngle + (index % 2 === 0 ? -20 : 20)).toFixed(2));
      return {
        id: index,
        color: 'var(--color-primary-800)',
        left: `${xPercent}%`,
        top: `${yPercent}%`,
        rotation: footRotation,
        delay: Number((index * 0.1).toFixed(2)),
      };
    });
  }, []);

  return (
    <header className="container mx-auto px-4 pt-0 pb-24 text-center">
      <div className="relative mx-auto flex h-[400px] w-full max-w-5xl items-center justify-center overflow-visible md:h-[500px]">
        <motion.div
          key="footprints"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          aria-hidden
        >
          {footprintPositions.map((step, index) => (
            <motion.button
              key={step.id}
              type="button"
              aria-label={`Passo ${index + 1}`}
              className="absolute h-10 w-10 md:h-12 md:w-12 drop-shadow-[0_8px_22px_rgba(0,0,0,0.25)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-full"
              style={{
                color: step.color,
                left: step.left,
                top: step.top,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.3,
              }}
              animate={{
                opacity: activeStepIndex === index ? 1 : 0.9,
                scale: activeStepIndex === index ? 1.15 : 1,
                rotate: shouldReduceMotion ? 0 : step.rotation,
              }}
              whileHover={shouldReduceMotion ? undefined : { opacity: 1, scale: 1.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 1.2,
                delay: shouldReduceMotion ? 0 : step.delay,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              onClick={() => setActiveStepIndex(index)}
              aria-pressed={activeStepIndex === index}
            >
              <FootprintIcon className="h-full w-full" />
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {showContent && (
            <motion.div
              key="hero-copy"
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: 'easeOut', delay: 0.1 }}
              >
                {activeLetterIndex === null ? (
                  PASSO_LETTERS.map((item, index) => (
                    <button
                      key={`${item.letter}-${index}`}
                      type="button"
                      className="text-6xl md:text-7xl lg:text-8xl font-black text-primary-600 dark:text-primary-300 transition hover:text-primary-700 dark:hover:text-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl"
                      onClick={() => setActiveLetterIndex(index)}
                      aria-label={`Scopri significato della lettera ${item.letter}`}
                    >
                      {item.letter}
                    </button>
                  ))
                ) : (
                  <motion.div
                    className="flex items-center gap-6 rounded-4xl border border-border bg-surface/95 px-8 py-6 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <button
                      type="button"
                      className="text-[10rem] leading-none font-black text-primary-700 dark:text-primary-300 drop-shadow-[0_10px_25px_rgba(17,160,154,0.45)] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl"
                      onClick={() => setActiveLetterIndex(null)}
                      aria-label="Torna a PASSO"
                    >
                      {PASSO_LETTERS[activeLetterIndex].letter}
                    </button>
                    <div className="flex flex-col gap-2 text-left">
                      {PASSO_LETTERS[activeLetterIndex].words.map((word) => (
                        <div key={word} className="text-2xl font-semibold text-primary-700 dark:text-primary-200">
                          <span className="text-foreground">{word.slice(1)}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
