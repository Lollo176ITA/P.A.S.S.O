# P.A.S.S.O. — Sito web

Sito ufficiale dell'associazione **P.A.S.S.O.** (Percorsi di Autonomia, Sostegno e Servizi Operativi), che accompagna i giovani 16–24 anni in uscita da comunità e case famiglia verso una vita adulta autonoma.

Il progetto racconta la nostra storia, i pilastri del nostro lavoro, i servizi offerti e permette di contattarci per richieste di supporto, volontariato o partnership.

## Stack tecnologico

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** con design token semantici e dark mode
- **Framer Motion** per le animazioni (con rispetto di `prefers-reduced-motion`)
- **Lucide React** per le icone
- **Supabase** (`@supabase/ssr`) per database e form contatti
- **Vercel Analytics** + **Speed Insights**
- **Content Collections** + MDX, pronti per contenuti editoriali

## Prerequisiti

- Node.js **≥ 20**
- npm (o pnpm / yarn se preferisci)
- Un progetto Supabase con le tabelle definite in `database/schema.sql` (opzionale: senza Supabase il form contatti restituisce un messaggio di servizio non disponibile)

## Setup locale

```bash
git clone https://github.com/lollo176ita/p.a.s.s.o.git
cd p.a.s.s.o
npm install
cp .env.example .env.local   # se presente, altrimenti vedi sotto
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

### Variabili d'ambiente

Crea un file `.env.local` con:

```bash
# URL pubblico del sito (usato per metadata, OG, sitemap)
NEXT_PUBLIC_SITE_URL=https://progettopasso.it

# Supabase (necessario per form contatti e /dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Script disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Build di produzione |
| `npm run start` | Avvia la build di produzione |
| `npm run lint` | Esegue ESLint |

## Struttura del progetto

```
app/                # Pagine e route (App Router)
  api/contact/      # Endpoint POST per il form contatti
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
  opengraph-image.tsx  # OG image generata a runtime
components/         # Componenti UI riutilizzabili
  progress/         # StepProgressBar e varianti (top + wave)
data/               # Dati statici (team, partner)
database/           # Schema SQL Supabase
lib/                # Dati condivisi (navigation, contact, SITE_URL)
utils/              # Hook e utility (useScrolled, wave, supabase)
public/             # Asset statici (logo, svg)
```

## Temi

Il sito supporta tema **chiaro** e **scuro** con toggle nell'header. La preferenza è persistita in `localStorage` sotto la chiave `passo-theme`. Se non impostata, il sito segue `prefers-color-scheme`.

I token semantici (`--color-background`, `--color-surface`, `--color-border`, `--color-muted-foreground`, ecc.) sono definiti in `app/globals.css` ed esposti come utility Tailwind (`bg-surface`, `text-muted-foreground`, ecc.). La palette teal di brand (`primary-50` → `primary-950`) resta invariata nei due temi.

## Deploy

Il progetto è pensato per essere deployato su **Vercel**:

1. Collega il repo su Vercel.
2. Imposta le variabili d'ambiente (vedi sopra).
3. Ogni push sul branch principale triggera un deploy di produzione.

## Contribuire

- Mantieni i token semantici invece di colori hardcoded (`bg-surface` ✓, `bg-white` ✗).
- Se aggiungi animazioni pesanti, rispetta sempre `useReducedMotion` di Framer Motion.
- Per modificare navigazione e dati di contatto, usa `lib/navigation.ts` e `lib/contact.ts`: sono le sorgenti uniche di verità.

## Licenza

© Associazione P.A.S.S.O. — Tutti i diritti riservati.
