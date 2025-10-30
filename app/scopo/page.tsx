import PageLayout from '@/components/PageLayout';

export default function ScopoPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
          Il Nostro Scopo
        </h1>
        
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-4">La Nostra Missione</h2>
          <p className="text-xl leading-relaxed">
            Trasformare l&apos;uscita dalla comunità in un vero ingresso nella vita adulta, 
            fornendo competenze concrete, supporto continuativo e una rete di riferimento 
            stabile per ogni giovane.
          </p>
        </div>
        
        <div className="space-y-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  Obiettivo Principale
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Preparare i giovani 16-24 anni all&apos;autonomia reale attraverso un percorso 
                  personalizzato che sviluppa competenze pratiche essenziali per la vita quotidiana.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Gestione economica e finanziaria personale
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Competenze abitative e domestiche
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Orientamento professionale e lavorativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Costruzione di una rete sociale stabile
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💡</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  La Nostra Visione
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un futuro in cui ogni giovane che esce dal sistema di protezione ha le competenze, 
                  la fiducia e il supporto necessari per costruire una vita autonoma e soddisfacente. 
                  Vogliamo che nessuno si senta solo o incapace di fronte alle sfide della vita adulta.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">❤️</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">
                  I Nostri Valori
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Concretezza
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Competenze pratiche e applicabili immediatamente nella vita reale
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Personalizzazione
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Ogni percorso è unico e costruito sui bisogni del singolo
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Continuità
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Supporto costante, non interventi sporadici o occasionali
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Empowerment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Dal &quot;fare al posto di&quot; al &quot;sai farlo da solo&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Il Nostro Impegno</h3>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Ogni giovane merita di avere le stesse opportunità di costruire un futuro solido. 
            Il nostro impegno è essere quel ponte, quella mano tesa che accompagna verso 
            l&apos;autonomia vera. Un passo alla volta, ma nella direzione giusta.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
