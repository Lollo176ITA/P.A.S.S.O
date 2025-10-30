import Header from '@/components/Header';
import SubHeader from '@/components/SubHeader';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <SubHeader />
      <main className="container mx-auto px-4 py-12 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
