import Link from 'next/link';
import Image from 'next/image';
import { NAV_SECTIONS } from '@/lib/navigation';
import { CONTACT_INFO } from '@/lib/contact';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white py-16 bg-primary-900">
      <div className="absolute inset-0 bg-linear-to-r from-primary-900 via-primary-800 to-primary" aria-hidden />
      <div className="absolute -right-32 top-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" aria-hidden />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
                <p className="text-xs text-primary-100 uppercase tracking-[0.2em]">Crescere insieme</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Percorsi di Autonomia, Sostegno e Servizi Operativi per giovani verso l&apos;indipendenza.
            </p>
          </div>

          <nav aria-label="Link rapidi">
            <h3 className="text-lg font-semibold text-white mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              {NAV_SECTIONS.map((section) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-primary-200/80 mb-1 uppercase tracking-wide">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/80 hover:text-primary-100 transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <p className="text-xs text-primary-200/80 mb-1 uppercase tracking-wide">Telefono</p>
                <a
                  href={`tel:${CONTACT_INFO.phoneE164}`}
                  className="text-white/80 hover:text-primary-100 transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <p className="text-xs text-primary-200/80 mb-1 uppercase tracking-wide">WhatsApp</p>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary-100 transition-colors text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sede</h3>
            <div className="space-y-3">
              <p className="text-white/80 text-sm leading-relaxed">
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city} ({CONTACT_INFO.address.province})<br />
                {CONTACT_INFO.address.country}
              </p>
              <div>
                <p className="text-xs text-primary-200/80 mb-1 uppercase tracking-wide">Orari</p>
                <p className="text-white/80 text-sm">
                  {CONTACT_INFO.hours}<br />
                  Sab–Dom: Chiuso
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} P.A.S.S.O. — Percorsi di Autonomia, Sostegno e Servizi Operativi. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-primary-100 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/cookie" className="text-white/60 hover:text-primary-100 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
