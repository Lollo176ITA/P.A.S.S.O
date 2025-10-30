'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700">
      {/* Link del SubHeader - Solo desktop */}
      <div className="hidden md:block container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-4 overflow-x-auto">
          {sections.map((section) => {
            const isActive = pathname === section.href;
            return (
              <Link
                key={section.href}
                href={section.href}
                className={`
                  px-6 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-base
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
