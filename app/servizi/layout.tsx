import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'I nostri servizi',
  description:
    'Accompagnamento personalizzato, workshop pratici, supporto legale, orientamento professionale, rete sociale e piattaforma digitale: tutto gratuito.',
  alternates: { canonical: '/servizi' },
  openGraph: {
    title: 'I nostri servizi · P.A.S.S.O.',
    description:
      'Sei aree di intervento gratuite per chi esce dalla comunità: casa, lavoro, diritti, budget e molto altro.',
    url: '/servizi',
  },
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return children;
}
