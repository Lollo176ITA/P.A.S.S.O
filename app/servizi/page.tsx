import PageLayout from '@/components/PageLayout';

export default function ServiziPage() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">
          I Nostri Servizi
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Un insieme completo di supporti per costruire l&apos;autonomia, passo dopo passo
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Accompagnamento Personalizzato */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Accompagnamento Personalizzato
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ogni ragazzo viene seguito da una piccola equipe mista di volontari e professionisti.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Incontri settimanali o bisettimanali</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Piano personalizzato di obiettivi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Supporto psicologico ed educativo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Affiancamento nelle pratiche quotidiane</span>
              </li>
            </ul>
          </div>
          
          {/* Workshop Pratici */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Workshop Pratici
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Incontri tematici aperti su competenze essenziali per la vita autonoma.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Gestione del budget e risparmio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Casa: bollette, contratti, manutenzione</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Cucina base e alimentazione sana</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Orientamento al lavoro e CV</span>
              </li>
            </ul>
          </div>
          
          {/* Supporto Legale e Amministrativo */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Supporto Legale e Amministrativo
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Aiuto concreto nella gestione di pratiche burocratiche e adempimenti.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Dichiarazione dei redditi e tasse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Contratti di lavoro e affitto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Accesso a servizi e contributi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Consulenza su diritti e doveri</span>
              </li>
            </ul>
          </div>
          
          {/* Orientamento Professionale */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">💼</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Orientamento Professionale
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Supporto nella ricerca del lavoro e costruzione del percorso formativo.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Creazione CV e lettera di presentazione</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Simulazione colloqui di lavoro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Orientamento a ITS e corsi professionali</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Connessione con aziende partner</span>
              </li>
            </ul>
          </div>
          
          {/* Rete Sociale e Comunitaria */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">🤝</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Rete Sociale e Comunitaria
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Costruzione di relazioni significative e integrazione nel territorio.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Attività di gruppo e socializzazione</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Connessione con associazioni locali</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Opportunità di volontariato</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Eventi culturali e ricreativi</span>
              </li>
            </ul>
          </div>
          
          {/* Piattaforma Digitale */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="text-5xl mb-4">💻</div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Piattaforma Digitale
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Strumenti online per rimanere connessi e accedere a risorse utili.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Guide pratiche e video tutorial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Calendario eventi e scadenze</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Chat di supporto e Q&A</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Materiali scaricabili e checklist</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-600 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Tutti i Servizi Sono Gratuiti</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Crediamo che l&apos;accesso al supporto non debba essere un privilegio. 
            Tutti i nostri servizi sono completamente gratuiti per i ragazzi seguiti.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
