import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHeader from "@/components/SubHeader";
import AnimatedHero from "@/components/AnimatedHero";
import StepProgressBar from "@/components/StepProgressBar";
import Link from "next/link";

const HOME_SECTIONS = [
  { id: "hero", label: "PASSO" },
  { id: "idea", label: "L’idea" },
  { id: "palestra", label: "Palestra" },
  { id: "come", label: "Modalità" },
  { id: "fasce", label: "Fasce d’età" },
  { id: "relazione", label: "Equipe" },
  { id: "comuni", label: "Comuni" },
  { id: "pilota", label: "Pilota" },
];

const PRACTICE_TOPICS = [
  {
    title: "Denaro e prevenzione debiti",
    description:
      "Budget reale, pianificazione delle spese, piccole riserve e strategie per evitare prestiti tossici.",
  },
  {
    title: "Conto e strumenti digitali",
    description:
      "Apertura del conto, home banking, pagamenti contactless, lettura degli estratti conto.",
  },
  {
    title: "Casa, utenze e manutenzione",
    description:
      "Contratti di affitto, bollette, subentri, manutenzioni base e convivenza con i vicini.",
  },
  {
    title: "Adempimenti fiscali",
    description:
      "Dichiarazione dei redditi, tasse, scadenze, PEC e carta d’identità digitale.",
  },
  {
    title: "Vita quotidiana",
    description:
      "Spesa ragionata, organizzazione di una routine, gestione del tempo, lavatrici e pulizie.",
  },
  {
    title: "Benessere alimentare e medico",
    description:
      "Preparare pasti equilibrati, programmare visite, conoscere i servizi sanitari territoriali.",
  },
  {
    title: "Orientamento al lavoro",
    description:
      "CV, colloqui, micro-obiettivi, diritti, contratti e iscrizione a ITS/corsi professionalizzanti.",
  },
  {
    title: "Rete sociale e cittadinanza",
    description:
      "Volontariato, accesso a eventi, iscrizione ai servizi comunali, costruzione di nuovi legami.",
  },
];

const MODALITIES = [
  {
    title: "Equipe dedicate",
    body: [
      "Ogni ragazzo ha un piccolo team misto (volontari e professionisti) sempre raggiungibile.",
      "L’equipe passa dal fare “al posto di” al fare insieme, fino al far fare in autonomia.",
    ],
  },
  {
    title: "Incontri aperti",
    body: [
      "Workshop periodici in luoghi accessibili su denaro, casa, diritti, digitale, salute.",
      "Condivisione di materiali, domande dal vivo e testimonianze di chi ha già fatto il salto.",
    ],
  },
  {
    title: "Sito e contenuti",
    body: [
      "Guide pratiche, video tutorial, checklist e calendario degli appuntamenti.",
      "Area partner e spazi per aziende/enti che desiderano collaborare.",
    ],
  },
  {
    title: "Canali digitali",
    body: [
      "Broadcast WhatsApp/Telegram per avvisi e materiali.",
      "Gruppo Q&A moderato per dubbi quotidiani, con risposte salvate e linkate al sito.",
    ],
  },
];

const AGE_ACTIONS = [
  {
    age: "16–18 anni",
    description:
      "Lezioni teoriche, confronto pratico e materiali per iniziare a conoscere strumenti, rete PASSO e figure di riferimento. L’obiettivo è preparare l’uscita dalla comunità con fiducia.",
  },
  {
    age: "18–24 anni",
    description:
      "Accompagnamento operativo su conti, casa, lavoro, aspetti legali e amministrativi. L’equipe definisce obiettivi concreti e cammina accanto al ragazzo verso l’autonomia.",
  },
];

const MUNICIPAL_POINTS = [
  "Sponsorizzazione istituzionale per presentarci al territorio e favorire il lavoro di rete.",
  "Punti di contatto e liste delle comunità locali per raggiungere i ragazzi che ne hanno più bisogno.",
  "Facilitazioni sugli alloggi sfitti o convenzionati (quando possibile) con canoni accessibili.",
];

const PILOT_CARD = [
  {
    title: "Chi fa cosa",
    description:
      "Un tutor stabile, 1–2 volontari esperti di vita pratica e contatti “a chiamata” (lavoro, legale, fiscale). Persone comuni che condividono competenze concrete.",
  },
  {
    title: "Obiettivi in 6 mesi",
    description:
      "Budget mensile reale, routine domestica, CV e candidature, gestione di documenti e scadenze, sapere a chi chiedere aiuto.",
  },
  {
    title: "Come si svolge",
    description:
      "Incontri in presenza (comunità, appartamento, spazi neutri), contatti WhatsApp per dubbi veloci, attività pratiche su spesa, budget, contratti e organizzazione personale.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <StepProgressBar steps={HOME_SECTIONS} />
      <Header />
      <SubHeader />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 pb-24 px-4 sm:px-6 lg:px-10 xl:px-16">
        <section id="hero" className="scroll-mt-32">
          <AnimatedHero />
        </section>

        <section id="idea" className="scroll-mt-32 rounded-4xl bg-linear-to-br from-primary-900 via-primary-700 to-primary-500 p-10 text-white shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">PASSO</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Percorsi di Autonomia, Sostegno e Servizi Operativi
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            I giovani che escono da comunità spesso non hanno una rete su cui contare, una casa stabile, o le
            competenze pratiche per gestire la vita adulta. Il rischio è concreto: marginalità abitativa, debiti,
            lavori precari, isolamento. PASSO nasce per trasformare l’uscita dalla comunità in un vero ingresso
            nella vita adulta, con persone presenti e competenti che accompagnano nel quotidiano.
          </p>
        </section>

        <section id="palestra" className="scroll-mt-32">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Cosa faremo</p>
            <h2 className="text-4xl font-bold text-primary-900">Una palestra di autonomia</h2>
            <p className="mt-4 text-gray-600">
              Lavoriamo accanto ai ragazzi su tutte le competenze di ogni giorno, costruendo fiducia e
              responsabilità concrete.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PRACTICE_TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="rounded-3xl border border-primary/10 bg-white p-6 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/30"
              >
                <h3 className="text-xl font-semibold text-primary-900">{topic.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="come" className="scroll-mt-32">
          <div className="grid gap-8 lg:grid-cols-2">
            {MODALITIES.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-primary/15 bg-primary-50/80 p-6 shadow-lg">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-2">Come lo faremo</p>
                <h3 className="text-2xl font-semibold text-primary-900">{item.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
                  {item.body.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="fasce" className="scroll-mt-32">
          <div className="rounded-4xl bg-linear-to-r from-primary-100 via-white to-primary-50 p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-500 mb-2">Azioni per fasce d’età</p>
            <div className="grid gap-6 md:grid-cols-2">
              {AGE_ACTIONS.map((action) => (
                <div key={action.age} className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow">
                  <h3 className="text-2xl font-bold text-primary-900">{action.age}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="relazione" className="scroll-mt-32 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-primary/15 bg-white p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-500 mb-4">Rapporto equipe–ragazzo</p>
            <h3 className="text-3xl font-bold text-primary-900 mb-4">Ogni passo è un PASSO</h3>
            <p className="text-gray-700 leading-relaxed">
              Il baricentro è relazionale e pratico insieme: l’equipe accompagna il ragazzo su obiettivi misurabili
              (aprire un conto, pagare una bolletta, inviare candidature, gestire scadenze). Il ragazzo sceglie le
              priorità, monitora i progressi e passa dalla dipendenza alla piena autonomia.
            </p>
          </div>
          <div className="rounded-[28px] border border-primary/15 bg-white p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-500 mb-4">Perché</p>
            <h3 className="text-3xl font-bold text-primary-900 mb-4">Autonomia si costruisce facendo</h3>
            <p className="text-gray-700 leading-relaxed">
              Non basta un manuale: serve una mano concreta, competente e costante. PASSO aiuta a passare dal “non
              so da dove cominciare” al “so cosa fare domani mattina”. Un passo alla volta, nella direzione giusta.
            </p>
          </div>
        </section>

        <section id="comuni" className="scroll-mt-32">
          <div className="rounded-4xl border border-primary/15 bg-white p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-500 mb-3">Il ruolo dei Comuni</p>
            <h3 className="text-3xl font-bold text-primary-900 mb-4">Tre richieste semplici ma decisive</h3>
            <ul className="space-y-4 text-gray-700">
              {MUNICIPAL_POINTS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Avvieremo interlocuzioni con gli assessorati competenti per integrare PASSO in iniziative culturali,
              giovanili e di partecipazione.
            </p>
          </div>
        </section>

        <section id="pilota" className="scroll-mt-32">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">PASSO · esempio pilota</p>
            <h3 className="text-4xl font-bold text-primary-900">Come può partire un percorso</h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PILOT_CARD.map((card) => (
              <div key={card.title} className="rounded-3xl border border-primary/10 bg-white p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-primary-900">{card.title}</h4>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-primary-50/80 p-6 text-sm text-gray-700">
            <p>
              Comunità e Comune restano coinvolti: la comunità segnala e partecipa all’inizio e alla fine del
              percorso, il Comune supporta con “benedizione” istituzionale e, se possibile, facilita l’accesso a
              sportelli o opportunità legati a casa, lavoro, giovani.
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/contatti"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5"
            >
              Partecipa al pilota
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
