'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'passo-theme';

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.dataset.theme = theme;
}

interface ThemeToggleProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function ThemeToggle({ variant = 'light', className = '' }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => readInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    // Rendering differs between SSR and client (icon choice depends on theme);
    // the mounted flag avoids a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  const label = theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro';
  const Icon = theme === 'dark' ? Sun : Moon;

  const baseClasses =
    'inline-flex h-10 w-10 items-center justify-center rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60';
  const surfaceClasses =
    variant === 'dark'
      ? 'border-white/40 bg-white/10 text-white hover:bg-white/20'
      : 'border-primary/30 bg-surface text-primary-700 hover:bg-primary/10 dark:text-primary-200';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`${baseClasses} ${surfaceClasses} ${className}`}
      suppressHydrationWarning
    >
      {mounted ? <Icon className="h-5 w-5" aria-hidden /> : <span className="h-5 w-5" aria-hidden />}
    </button>
  );
}
