"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const REVEAL_DELAY = 2000;

const PASSO_LETTERS = [
  {
    letter: "P",
    words: ["Percorsi pratici", "Palestra di autonomia", "Progetti territoriali"],
  },
  {
    letter: "A",
    words: ["Ascolto attivo", "Allenamento quotidiano", "Accompagnamento continuo"],
  },
  {
    letter: "S",
    words: ["Sostegno relazionale", "Servizi accessibili", "Skill digitali"],
  },
  {
    letter: "S",
    words: ["Squadra mista", "Strumenti concreti", "Scelte condivise"],
  },
  {
    letter: "O",
    words: ["Opportunità di lavoro", "Orizzonte di fiducia", "Obiettivi misurabili"],
  },
];

const FOOTPRINT_COUNT = 28;

export default function AnimatedHero() {
  const [showContent, setShowContent] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [activeLetterIndex, setActiveLetterIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowContent(true), REVEAL_DELAY);
    return () => window.clearTimeout(timer);
  }, []);

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
        color: "#11A09A",
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
        {/* Impronte interattive */}
        <motion.div
          key="footprints"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {footprintPositions.map((step, index) => (
            <motion.button
              key={step.id}
              type="button"
              className="material-symbols-outlined absolute text-4xl md:text-5xl drop-shadow-[0_8px_22px_rgba(0,0,0,0.35)] transition focus:outline-none"
              style={{
                color: "#11A09A",
                left: step.left,
                top: step.top,
                transform: "translate(-50%, -50%)",
              }}
              initial={{
                opacity: 0,
                scale: 0.3,
              }}
              animate={{
                opacity: activeStepIndex === index ? 1 : 0.8,
                scale: activeStepIndex === index ? 1.15 : 1,
                rotate: step.rotation,
              }}
              transition={{
                duration: 1.2,
                delay: step.delay,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              onClick={() => setActiveStepIndex(index)}
              aria-pressed={activeStepIndex === index}
            >
              footprint
            </motion.button>
          ))}
        </motion.div>

        {/* Contenuto centrale - Solo P.A.S.S.O. */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="hero-copy"
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                {activeLetterIndex === null ? (
                  PASSO_LETTERS.map((item, index) => (
                    <button
                      key={`${item.letter}-${index}`}
                      type="button"
                      className="text-6xl md:text-7xl lg:text-8xl font-black text-primary-600 transition hover:text-primary-700"
                      onClick={() => setActiveLetterIndex(index)}
                    >
                      {item.letter}
                    </button>
                  ))
                ) : (
                  <motion.div
                    className="flex items-center gap-6 rounded-4xl border border-white/60 bg-white/95 px-8 py-6 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <button
                      type="button"
                      className="text-[10rem] leading-none font-black text-primary-700 drop-shadow-[0_10px_25px_rgba(17,160,154,0.45)] transition hover:scale-105"
                      onClick={() => setActiveLetterIndex(null)}
                      aria-label="Torna a PASSO"
                    >
                      {PASSO_LETTERS[activeLetterIndex].letter}
                    </button>
                    <div className="flex flex-col gap-2 text-left">
                      {PASSO_LETTERS[activeLetterIndex].words.map((word) => (
                        <div key={word} className="text-2xl font-semibold text-primary-700">
                          <span className="text-gray-700">{word.slice(1)}</span>
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
