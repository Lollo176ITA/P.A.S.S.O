'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_SECTIONS } from '@/lib/navigation';
import { useScrolled } from '@/utils/hooks/useScrolled';
import ThemeToggle from './ThemeToggle';

const linkHover = {
  hover: { y: -2, scale: 1.03 },
  tap: { scale: 0.97 },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(100);
  const pathname = usePathname();

  const navClassName = useMemo(
    () =>
      `sticky top-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-xl shadow-xl border-b border-border'
          : 'bg-primary-800 shadow-lg'
      }`,
    [isScrolled],
  );

  return (
    <nav className={navClassName} data-site-header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Torna alla homepage"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center">
              <motion.span
                className={`absolute -inset-1 rounded-2xl blur-2xl ${
                  isScrolled ? 'bg-primary/20' : 'bg-white/30'
                }`}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: isScrolled ? 0.35 : 0.6, scale: isScrolled ? 1 : 1.1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                aria-hidden
              />
              <div className="relative h-12 w-16 md:h-16 md:w-24 transition-transform">
                <Image
                  src="/logo_passo.svg"
                  alt="Logo P.A.S.S.O."
                  fill
                  sizes="(max-width: 768px) 64px, 96px"
                  priority
                  className={`object-contain transition duration-300 ${
                    isScrolled ? '' : 'brightness-0 invert drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]'
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <motion.h1
                className={`text-2xl md:text-3xl font-bold transition-colors ${
                  isScrolled ? 'text-primary-800 dark:text-primary-200' : 'text-white'
                }`}
                layout
              >
                P.A.S.S.O.
              </motion.h1>
              <span
                className={`hidden md:block text-xs md:text-sm transition-colors ${
                  isScrolled ? 'text-primary-800 dark:text-primary-200' : 'text-white'
                }`}
              >
                Percorsi di Autonomia, Sostegno e Servizi Operativi
              </span>
            </div>
          </Link>

          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: isScrolled ? 1 : 0, x: isScrolled ? 0 : 16 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {NAV_SECTIONS.map((section) => {
              const isActive = pathname === section.href;
              return (
                <motion.div
                  key={section.href}
                  whileHover={linkHover.hover}
                  whileTap={linkHover.tap}
                >
                  <Link
                    href={section.href}
                    className={`px-4 py-2 rounded-xl font-medium transition-all text-sm whitespace-nowrap ${
                      isActive
                        ? isScrolled
                          ? 'bg-primary-800 text-white shadow-lg shadow-primary/40'
                          : 'bg-white text-primary-800 shadow-lg shadow-black/10'
                        : isScrolled
                          ? 'text-primary-700 dark:text-primary-200 hover:bg-primary/10'
                          : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {section.name}
                  </Link>
                </motion.div>
              );
            })}
            <div className="ml-2">
              <ThemeToggle variant={isScrolled ? 'light' : 'dark'} />
            </div>
          </motion.div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle variant={isScrolled ? 'light' : 'dark'} />
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isScrolled
                  ? 'text-primary-700 dark:text-primary-200 border-primary/30 bg-surface focus:ring-primary/40 focus:ring-offset-background'
                  : 'text-white border-white/40 bg-white/10 focus:ring-white/40 focus:ring-offset-primary-600'
              }`}
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={mobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`md:hidden overflow-hidden ${
                isScrolled
                  ? 'bg-surface/95 backdrop-blur-lg border border-border rounded-2xl mt-2 shadow-xl'
                  : 'bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 rounded-2xl mt-2 shadow-lg'
              }`}
            >
              <div className="py-4">
                <div className="flex flex-col space-y-2 px-4">
                  {NAV_SECTIONS.map((section) => {
                    const isActive = pathname === section.href;
                    return (
                      <Link
                        key={section.href}
                        href={section.href}
                        className={`px-4 py-3 rounded-lg font-medium text-center transition-all ${
                          isActive
                            ? isScrolled
                              ? 'bg-primary-800 text-white shadow-lg shadow-primary/40'
                              : 'bg-white text-primary-800 shadow-md'
                            : isScrolled
                              ? 'text-primary-700 dark:text-primary-200 hover:bg-primary/10'
                              : 'text-white hover:bg-white/15'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {section.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
