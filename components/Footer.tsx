import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white py-16 bg-primary-900">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary" aria-hidden />
      <div className="absolute -right-32 top-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonna 1: Info P.A.S.S.O. */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                <Image
                  src="/logo_passo.svg"
                  alt="Logo P.A.S.S.O."
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white leading-tight">P.A.S.S.O.</h3>
                <p className="text-xs text-blue-100 uppercase tracking-[0.2em]">Crescere insieme</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Percorsi di Autonomia, Sostegno e Servizi Operativi per giovani verso l&apos;indipendenza.
            </p>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/storia" className="text-white/80 hover:text-white transition-colors text-sm">
                  La Nostra Storia
                </Link>
              </li>
              <li>
                <Link href="/scopo" className="text-white/80 hover:text-white transition-colors text-sm">
                  Il Nostro Scopo
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-white/80 hover:text-white transition-colors text-sm">
                  I Nostri Servizi
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/80 hover:text-white transition-colors text-sm">
                  Il Nostro Team
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contattaci
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Contatti */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div>
                  <p className="text-xs text-blue-200/80 mb-1 uppercase tracking-wide">Email</p>
                  <a
                    href="mailto:info@progettopasso.it"
                    className="text-white/80 hover:text-blue-200 transition-colors text-sm"
                  >
                    info@progettopasso.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <p className="text-xs text-blue-200/80 mb-1 uppercase tracking-wide">Telefono</p>
                  <a
                    href="tel:+393401234567"
                    className="text-white/80 hover:text-blue-200 transition-colors text-sm"
                  >
                    +39 340 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div>
                  <p className="text-xs text-blue-200/80 mb-1 uppercase tracking-wide">WhatsApp</p>
                  <a
                    href="https://wa.me/393401234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-200 transition-colors text-sm"
                  >
                    +39 340 123 4567
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Colonna 4: Sede */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sede</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Via Giuseppe Mazzini, 42<br />
                    20100 Milano (MI)<br />
                    Italia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div>
                  <p className="text-xs text-blue-200/80 mb-1 uppercase tracking-wide">Orari</p>
                  <p className="text-white/80 text-sm">
                    Lun-Ven: 9:00 - 18:00<br />
                    Sab-Dom: Chiuso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linea separatrice */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} P.A.S.S.O. - Percorsi di Autonomia, Sostegno e Servizi Operativi. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-blue-200 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/cookie" className="text-white/60 hover:text-blue-200 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
