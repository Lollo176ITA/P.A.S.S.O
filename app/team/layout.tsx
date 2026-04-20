import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Il team',
  description:
    'Le persone dietro P.A.S.S.O.: direttivo, soci fondatori, volontari e partner che accompagnano ogni ragazzo verso una vita autonoma.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Il team · P.A.S.S.O.',
    description:
      'Conosci le persone che ogni giorno costruiscono P.A.S.S.O.: direttivo, soci fondatori, volontari.',
    url: '/team',
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
