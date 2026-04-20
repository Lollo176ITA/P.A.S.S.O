import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Il nostro scopo',
  description:
    'I tre pilastri di P.A.S.S.O.: aiuto pratico quotidiano, diritti e agevolazioni, accompagnamento umano verso la piena autonomia.',
  alternates: { canonical: '/scopo' },
  openGraph: {
    title: 'Il nostro scopo · P.A.S.S.O.',
    description:
      "Aiutiamo i care leavers a costruire l'autonomia: competenze concrete, diritti accessibili, una rete di persone presenti.",
    url: '/scopo',
  },
};

export default function ScopoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
