'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const sections = [
  { name: 'Storia', href: '/storia' },
  { name: 'Scopo', href: '/scopo' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Team', href: '/team' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Mobile: solo P.A.S.S.O., Desktop: titolo completo */}
          <Link href="/" className="flex items-center group" aria-label="Torna alla homepage">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-100 transition-colors">
                P.A.S.S.O.
              </h1>
              <p className="hidden md:block text-xs md:text-sm text-blue-100 -mt-1">
                Percorsi di Autonomia, Sostegno e Servizi Operativi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links - Appaiono quando scrolli */}
          <div className={`hidden md:flex items-center gap-2 transition-all duration-500 ${isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
            {sections.map((section) => {
              const isActive = pathname === section.href;
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all text-sm whitespace-nowrap
                    ${isActive 
                      ? 'bg-white text-blue-600 shadow-md' 
                      : 'text-white hover:bg-blue-700'
                    }
                  `}
                >
                  {section.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-blue-400">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => {
                const isActive = pathname === section.href;
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className={`
                      px-4 py-3 rounded-lg font-medium transition-all text-center
                      ${isActive 
                        ? 'bg-white text-blue-600 shadow-md' 
                        : 'text-white hover:bg-blue-700'
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {section.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
