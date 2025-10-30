import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#202a2e' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonna 1: Info P.A.S.S.O. */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">P.A.S.S.O.</h3>
            <p className="text-white text-sm leading-relaxed mb-4 opacity-90">
              Percorsi di Autonomia, Sostegno e Servizi Operativi per giovani verso l&apos;indipendenza.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-lg font-bold">f</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/storia" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm">
                  La Nostra Storia
                </Link>
              </li>
              <li>
                <Link href="/scopo" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm">
                  Il Nostro Scopo
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm">
                  I Nostri Servizi
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm">
                  Il Nostro Team
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-white opacity-90 hover:opacity-100 transition-opacity text-sm">
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
                <span className="text-blue-400 mt-1">📧</span>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:info@progettopasso.it" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    info@progettopasso.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">📱</span>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Telefono</p>
                  <a 
                    href="tel:+393401234567" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    +39 340 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">💬</span>
                <div>
                  <p className="text-xs text-gray-400 mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/393401234567" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
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
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Via Giuseppe Mazzini, 42<br />
                    20100 Milano (MI)<br />
                    Italia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">🕐</span>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Orari</p>
                  <p className="text-gray-300 text-sm">
                    Lun-Ven: 9:00 - 18:00<br />
                    Sab-Dom: Chiuso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linea separatrice */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} P.A.S.S.O. - Percorsi di Autonomia, Sostegno e Servizi Operativi. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/cookie" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
