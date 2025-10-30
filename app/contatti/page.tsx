import PageLayout from '@/components/PageLayout';

export default function ContattiPage() {
  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">
          Contattaci
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Siamo qui per te. Scrivici, chiamaci o vieni a trovarci
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Info di Contatto */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Informazioni di Contatto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a 
                    href="mailto:info@progettopasso.it" 
                    className="text-blue-600 hover:underline"
                  >
                    info@progettopasso.it
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefono</h3>
                  <a 
                    href="tel:+393401234567" 
                    className="text-blue-600 hover:underline"
                  >
                    +39 340 123 4567
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Lun-Ven: 9:00 - 18:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sede</h3>
                  <p className="text-gray-700">
                    Via Giuseppe Mazzini, 42<br />
                    20100 Milano (MI)<br />
                    Italia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/393401234567" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scrivici su WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Seguici sui Social</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xl">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-xl">in</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Form di Contatto */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Invia un Messaggio
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tua@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+39 123 456 7890"
                />
              </div>
              
              <div>
                <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo del Contatto *
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Seleziona un&apos;opzione</option>
                  <option value="supporto">Richiesta di Supporto</option>
                  <option value="volontario">Voglio Diventare Volontario</option>
                  <option value="partnership">Proposta Partnership</option>
                  <option value="donazione">Informazioni su Donazioni</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Invia Messaggio
              </button>
              
              <p className="text-xs text-gray-600 text-center">
                * Campi obbligatori
              </p>
            </form>
          </div>
        </div>
        
        {/* Orari e Info Aggiuntive */}
        <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Orari di Apertura</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <p className="font-semibold mb-2">Ufficio</p>
              <p className="text-blue-100">Lunedì - Venerdì</p>
              <p className="text-blue-100">9:00 - 13:00 | 14:00 - 18:00</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Sportello Ragazzi</p>
              <p className="text-blue-100">Martedì e Giovedì</p>
              <p className="text-blue-100">15:00 - 19:00</p>
            </div>
          </div>
          <p className="mt-6 text-blue-100">
            Per emergenze fuori orario, contattaci via WhatsApp
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
