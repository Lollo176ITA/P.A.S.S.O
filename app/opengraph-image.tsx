import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/contact';

export const runtime = 'edge';
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #063c39 0%, #106d68 45%, #11A09A 100%)',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            opacity: 0.85,
            fontSize: 26,
            letterSpacing: 10,
            textTransform: 'uppercase',
          }}
        >
          Associazione
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 140,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            fontWeight: 600,
            maxWidth: 900,
            lineHeight: 1.15,
            color: '#d6f4f2',
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            maxWidth: 900,
            color: '#b8e9e5',
          }}
        >
          Accompagniamo i giovani 16–24 anni dalla comunità alla vita adulta.
        </div>
      </div>
    ),
    { ...size },
  );
}
