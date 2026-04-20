'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Torna all'inizio della pagina"
      className={`fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-[0_12px_28px_rgba(17,160,154,0.35)] transition hover:scale-105 hover:shadow-[0_16px_32px_rgba(17,160,154,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0 translate-y-2'
      }`}
    >
      <ArrowUp className="h-6 w-6" aria-hidden />
    </button>
  );
}
