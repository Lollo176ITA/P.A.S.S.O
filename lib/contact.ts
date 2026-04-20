export const CONTACT_INFO = {
  email: 'info@progettopasso.it',
  phone: '+39 340 123 4567',
  phoneE164: '+393401234567',
  whatsapp: 'https://wa.me/393401234567',
  hours: 'Lun–Ven: 9:00–18:00',
  address: {
    street: 'Via Giuseppe Mazzini, 42',
    zip: '20100',
    city: 'Milano',
    province: 'MI',
    country: 'Italia',
    countryCode: 'IT',
  },
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://progettopasso.it';

export const SITE_NAME = 'P.A.S.S.O.';
export const SITE_TAGLINE = 'Percorsi di Autonomia, Sostegno e Servizi Operativi';
export const SITE_DESCRIPTION =
  "Trasformiamo l'uscita dalla comunità in un vero ingresso nella vita adulta. Accompagnamento pratico e concreto per giovani 16–24 anni.";
