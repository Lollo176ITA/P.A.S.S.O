import TestConnection from '@/components/TestConnection';
import Header from '@/components/Header';
import Link from 'next/link';

import SubHeader from '@/components/SubHeader';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      <SubHeader />
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-0 pb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-blue-600">
          P.A.S.S.O.
        </h1>
        <p className="text-2xl md:text-4xl text-blue-600 mb-6 max-w-4xl mx-auto font-semibold">
          Percorsi di Autonomia,<br className="md:hidden" /> Sostegno e Servizi Operativi
        </p>
        <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed">
          Trasformiamo l&apos;uscita dalla comunità in un vero ingresso nella vita adulta. 
          Un passo alla volta, ma nella direzione giusta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/storia"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            Scopri di Più
          </Link>
          <Link 
            href="/contatti"
            className="inline-block bg-white text-blue-600 border-2 border-blue-600 font-semibold px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl text-lg hover:bg-blue-50"
          >
            Contattaci
          </Link>
        </div>
      </header>

      {/* Cards Sezioni */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/storia" className="group">
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                La Nostra Storia
              </h3>
              <p className="text-gray-800">
                Scopri come è nato P.A.S.S.O. e il percorso che ci ha portato fin qui
              </p>
            </div>
          </Link>

          <Link href="/scopo" className="group">
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                Il Nostro Scopo
              </h3>
              <p className="text-gray-800">
                La missione, la visione e i valori che guidano ogni nostro passo
              </p>
            </div>
          </Link>

          <Link href="/servizi" className="group">
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                I Nostri Servizi
              </h3>
              <p className="text-gray-800">
                Tutti i supporti che offriamo per costruire l&apos;autonomia
              </p>
            </div>
          </Link>

          <Link href="/team" className="group">
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                Il Nostro Team
              </h3>
              <p className="text-gray-800">
                Conosci le persone che rendono possibile P.A.S.S.O.
              </p>
            </div>
          </Link>

          <Link href="/contatti" className="group">
            <div className="bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                Contattaci
              </h3>
              <p className="text-gray-800">
                Scrivici, chiamaci o vieni a trovarci. Siamo qui per te
              </p>
            </div>
          </Link>

          {/* <Link href="/dashboard" className="group">
            <div className="bg-blue-600 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Dashboard
              </h3>
              <p className="text-blue-100">
                Accedi alla dashboard per gestire il progetto
              </p>
            </div>
          </Link> */}
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16 mb-20">
        <div className="max-w-4xl mx-auto bg-blue-600 text-white rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un Passo Alla Volta
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            P.A.S.S.O. vuole essere quella mano concreta, competente e costante che aiuta 
            ogni giovane a costruire la propria autonomia. Un passo alla volta, ma nella direzione giusta. ✨
          </p>
          <Link 
            href="/contatti"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            Scopri Come Aiutare
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">
            © 2025 P.A.S.S.O. - Percorsi di Autonomia, Sostegno e Servizi Operativi
          </p>
        </div>
      </footer>
      
      {/* Test connessione database */}
      <TestConnection />
    </div>
  );
}
