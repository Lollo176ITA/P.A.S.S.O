"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const FOOTPRINT_COUNT = 36;
const REVEAL_DELAY = 3000;

// Genera posizioni lungo un'ellisse
const generateFootprintPositions = () => {
  const positions = [];
  for (let i = 0; i < FOOTPRINT_COUNT; i++) {
    const angle = (i / FOOTPRINT_COUNT) * Math.PI * 2;
    positions.push({
      id: i,
      angle,
      delay: i * 0.03,
    });
  }
  return positions;
};

const FOOTPRINTS = generateFootprintPositions();

export default function AnimatedHero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowContent(true), REVEAL_DELAY);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header className="container mx-auto px-4 pt-0 pb-24 text-center">
      <div className="relative mx-auto flex h-[400px] w-full max-w-5xl items-center justify-center overflow-visible md:h-[500px]">
        {/* Impronte sempre visibili */}
        <motion.div
          key="footprints"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {FOOTPRINTS.map(({ id, angle, delay }) => {
                // Calcola posizione sull'ellisse
                const radiusX = 45; // Raggio orizzontale %
                const radiusY = 42; // Raggio verticale %
                const x = 50 + radiusX * Math.cos(angle);
                const y = 50 + radiusY * Math.sin(angle);
                
                // Rotazione tangente al percorso + alternanza sinistra/destra
                const tangentAngle = (angle * 180) / Math.PI + 90;
                const footRotation = tangentAngle + (id % 2 === 0 ? -15 : 15);

                return (
                  <motion.span
                    key={id}
                    className="material-symbols-outlined absolute text-5xl text-[#11A09A] drop-shadow-lg md:text-6xl"
                    initial={{
                      opacity: 0,
                      scale: 0.3,
                      left: "50%",
                      top: "50%",
                      rotate: 0,
                      x: "-50%",
                      y: "-50%",
                    }}                  animate={{
                    opacity: [0, 0.95, 0.95],
                    scale: [0.3, 1.1, 1],
                    left: `${x}%`,
                    top: `${y}%`,
                    rotate: footRotation,
                    x: "-50%",
                    y: "-50%",
                  }}
                  transition={{
                    duration: 1.8,
                    delay,
                    ease: [0.34, 1.56, 0.64, 1],
                    opacity: {
                      times: [0, 0.3, 1],
                      duration: 1.8,
                    },
                  }}
                  aria-hidden="true"
                >
                    footprint
                  </motion.span>
                );
              })}
              
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
              <motion.h1
                className="text-8xl font-bold text-primary-700 md:text-9xl lg:text-[10rem]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                PASSO
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
