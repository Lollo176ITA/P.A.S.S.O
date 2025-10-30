import Header from '@/components/Header';
import SubHeader from '@/components/SubHeader';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SubHeader />
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>
    </div>
  );
}
