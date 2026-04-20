import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La nostra storia',
  description:
    "Come nasce P.A.S.S.O.: l'esperienza di Lorenzo, 10 anni in casa famiglia e la volontà di trasformare le difficoltà in opportunità per altri ragazzi.",
  alternates: { canonical: '/storia' },
  openGraph: {
    title: 'La nostra storia · P.A.S.S.O.',
    description:
      "Come nasce P.A.S.S.O.: un'associazione fondata da chi ha vissuto la casa famiglia in prima persona.",
    url: '/storia',
  },
};

export default function StoriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
