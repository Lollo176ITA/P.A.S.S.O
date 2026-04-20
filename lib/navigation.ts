export interface NavSection {
  name: string;
  href: string;
  description?: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { name: 'Storia', href: '/storia', description: 'Come nasce P.A.S.S.O. e il percorso che ci ha portato qui.' },
  { name: 'Scopo', href: '/scopo', description: 'La nostra missione e i pilastri del progetto.' },
  { name: 'Servizi', href: '/servizi', description: 'Cosa offriamo a chi esce dalle comunità.' },
  { name: 'Team', href: '/team', description: 'Le persone dietro l\'associazione.' },
  { name: 'Contatti', href: '/contatti', description: 'Scrivici per informazioni o supporto.' },
];
