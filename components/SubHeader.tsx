'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const sections = [
  { name: 'Storia', href: '/storia' },
  { name: 'Scopo', href: '/scopo' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Team', href: '/team' },
  { name: 'Contatti', href: '/contatti' },
];

export default function SubHeader() {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary to-primary-400" />
      <motion.div
        className="absolute -left-10 top-4 h-32 w-32 rounded-full bg-white/20 blur-3xl"
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="absolute right-10 -bottom-10 h-40 w-40 rounded-full bg-primary-100/40 blur-3xl"
        initial={{ opacity: 0.1, scale: 0.7 }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden
      />

      {/* Link del SubHeader - Solo desktop */}
      <div className="relative hidden md:block container mx-auto px-4">
        <motion.div
          className="flex items-center justify-center gap-2 py-4 overflow-x-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {sections.map((section) => {
            const isActive = pathname === section.href;
            return (
              <motion.div key={section.href} whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={section.href}
                  className={`px-6 py-2 rounded-xl font-medium transition-all whitespace-nowrap text-base ${
                    isActive
                      ? 'bg-white text-primary shadow-lg shadow-primary/40'
                      : 'text-white/90 hover:bg-white/15'
                  }`}
                >
                  {section.name}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Onda decorativa molto ondulata */}
      <div className="relative h-20 md:h-24">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1440 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 C40,70 80,85 120,80 C160,75 200,60 240,50 C280,40 320,45 360,55 C400,65 440,75 480,70 C520,65 560,50 600,45 C640,40 680,50 720,60 C760,70 800,75 840,70 C880,65 920,55 960,50 C1000,45 1040,50 1080,60 C1120,70 1160,80 1200,75 C1240,70 1280,60 1320,55 C1360,50 1400,55 1420,60 L1440,65 L1440,140 L0,140 Z" 
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
}
