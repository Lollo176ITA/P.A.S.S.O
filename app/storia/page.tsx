import PageLayout from '@/components/PageLayout';

export default function StoriaPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
          La Nostra Storia
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Come Nasce P.A.S.S.O.
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              P.A.S.S.O. nasce dall&apos;osservazione diretta di una realtà spesso invisibile: giovani che 
              escono da comunità e case famiglia si trovano improvvisamente catapultati nella vita adulta, 
              senza una rete di supporto, senza competenze pratiche fondamentali e, troppo spesso, senza 
              speranza.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3 mt-8">
              Il Problema che Abbiamo Visto
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Durante anni di lavoro con giovani in difficoltà, abbiamo notato un pattern ricorrente: 
              ragazzi brillanti e pieni di potenziale che, una volta usciti dal sistema di protezione, 
              cadevano in situazioni di marginalità. Non per mancanza di volontà, ma per mancanza di 
              strumenti concreti.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl my-8 border-l-4 border-blue-600">
              <p className="text-gray-800 italic">
                &quot;Non sapevo come pagare una bolletta. Non sapevo a chi chiedere. Mi sentivo 
                solo e incapace.&quot; - Testimonianza di un ragazzo seguito da P.A.S.S.O.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3 mt-8">
              La Svolta
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nel 2024, un gruppo di educatori, psicologi, volontari e professionisti si è riunito con 
              un obiettivo chiaro: creare un ponte concreto tra la vita protetta della comunità e 
              l&apos;autonomia vera. Non volevamo creare un altro servizio assistenziale, ma una vera 
              &quot;palestra di vita&quot;.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3 mt-8">
              I Primi Passi
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Abbiamo iniziato in piccolo: tre ragazzi, una stanza, e tante domande pratiche da 
              affrontare insieme. Da lì, abbiamo capito che il nostro approccio funzionava. Non dare 
              soluzioni preconfezionate, ma costruire insieme, passo dopo passo, le competenze necessarie 
              per vivere autonomamente.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-700 mb-3 mt-8">
              Oggi
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Oggi P.A.S.S.O. è cresciuto, ma mantiene la stessa filosofia: accompagnamento personalizzato, 
              competenze pratiche, e una rete di persone che credono nel potenziale di ogni giovane. 
              Ogni passo conta, e noi siamo qui per farli insieme.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2024</div>
            <p className="text-gray-600">Anno di Fondazione</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Ragazzi Supportati</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <p className="text-gray-600">Volontari e Professionisti</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
