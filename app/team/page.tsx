import PageLayout from '@/components/PageLayout';

export default function TeamPage() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">
          Il Nostro Team
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Un team multidisciplinare di professionisti e volontari uniti da una missione comune
        </p>
        
        {/* Coordinamento */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Coordinamento
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                MC
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Maria Consonni
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Coordinatrice Generale
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pedagogista con 15 anni di esperienza in comunità per minori. 
                Coordina le attività e garantisce la qualità del supporto educativo.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                LR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Luca Rossi
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Responsabile Progetti
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Psicologo e project manager, si occupa della pianificazione strategica 
                e della gestione dei progetti di accompagnamento.
              </p>
            </div>
          </div>
        </div>
        
        {/* Equipe Professionale */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Equipe Professionale
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sofia Bianchi', role: 'Psicologa', icon: '🧠' },
              { name: 'Marco Verdi', role: 'Educatore Professionale', icon: '👨‍🏫' },
              { name: 'Anna Ferrari', role: 'Assistente Sociale', icon: '🤲' },
              { name: 'Giorgio Colombo', role: 'Consulente del Lavoro', icon: '💼' },
              { name: 'Elena Russo', role: 'Avvocato', icon: '⚖️' },
              { name: 'Paolo Ricci', role: 'Commercialista', icon: '📊' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{member.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Volontari */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            I Nostri Volontari
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              Il cuore pulsante di P.A.S.S.O. è la nostra rete di volontari: persone di tutte 
              le età e professioni che dedicano il loro tempo e le loro competenze per fare 
              la differenza.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Volontari Attivi</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600">Ore di Volontariato/Mese</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600">Professioni Diverse</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">Passione e Dedizione</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Vuoi Unirti al Team?</h3>
          <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Siamo sempre alla ricerca di professionisti e volontari che vogliano 
            contribuire alla crescita dei nostri ragazzi.
          </p>
          <a 
            href="/contatti" 
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            Contattaci
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
