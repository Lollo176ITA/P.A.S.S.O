'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { MobileDrawer } from './ui/mobile-drawer';
import { Button } from './ui/button';

const navItems = [
  { href: '/scopo', label: 'Scopo' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/storia', label: 'Storia' },
  { href: '/team', label: 'Team' },
  { href: '/contatti', label: 'Contatti' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {item.label}
          </Link>
        ))}
        <Button variant="primary">Dashboard</Button>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden touch-target p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile drawer */}
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 py-2"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" className="mt-4">Dashboard</Button>
        </div>
      </MobileDrawer>
    </>
  );
}
