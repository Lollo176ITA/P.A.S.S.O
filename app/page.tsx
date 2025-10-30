import TestConnection from '@/components/TestConnection';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';
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

      

      {/* Footer */}
      <Footer />
      
      {/* Test connessione database 
      <TestConnection />*/}
    </div>
  );
}
