import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubHeader from "@/components/SubHeader";
import AnimatedHero from "@/components/AnimatedHero";
import StepProgressBar from "@/components/StepProgressBar";
import Link from "next/link";

const HOME_SECTIONS = [
  { id: "hero", label: "PASSO" },
  { id: "idea", label: "L'idea" },
  { id: "palestra", label: "Cosa faremo" },
  { id: "fasce", label: "Per chi" },
];

const PRACTICE_TOPICS = [
  {
    title: "Denaro e prevenzione debiti",
    description:
      "Budget reale, pianificazione delle spese e strategie per evitare prestiti tossici.",
  },
  {
    title: "Casa, utenze e lavoro",
    description:
      "Contratti, bollette, CV, colloqui e primi passi verso l'indipendenza economica.",
  },
  {
    title: "Vita quotidiana",
    description:
      "Organizzazione del tempo, spesa ragionata, routine e gestione della casa.",
  },
  {
    title: "Benessere e rete sociale",
    description:
      "Salute, alimentazione, volontariato e costruzione di nuovi legami sul territorio.",
  },
];

const AGE_ACTIONS = [
  {
    age: "16–18 anni",
    description:
      "Preparazione all'uscita dalla comunità: strumenti, confronto pratico e figure di riferimento.",
  },
  {
    age: "18–24 anni",
    description:
      "Accompagnamento operativo su casa, lavoro e aspetti amministrativi verso l'autonomia.",
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
            competenze pratiche per gestire la vita adulta. PASSO nasce per trasformare l'uscita dalla comunità 
            in un vero ingresso nella vita adulta, con persone presenti e competenti che accompagnano nel quotidiano.
          </p>
        </section>

        <section id="palestra" className="scroll-mt-32">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-700">Cosa faremo</p>
            <h2 className="text-4xl font-bold text-primary-900">Una palestra di autonomia</h2>
            <p className="mt-4 text-gray-600">
              Lavoriamo accanto ai ragazzi su tutte le competenze di ogni giorno.
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
          <div className="mt-8 text-center">
            <Link
              href="/servizi"
              className="text-primary-700 hover:text-primary-900 underline underline-offset-4 transition"
            >
              Scopri tutti i servizi →
            </Link>
          </div>
        </section>

        <section id="fasce" className="scroll-mt-32">
          <div className="rounded-4xl bg-linear-to-r from-primary-100 via-white to-primary-50 p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-700 mb-2">Per chi</p>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Azioni per fasce d'età</h2>
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

        <section className="scroll-mt-32">
          <div className="rounded-4xl bg-primary-900 p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Vuoi saperne di più?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Scopri la nostra storia, conosci il team o contattaci per partecipare al progetto pilota.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/storia"
                className="rounded-full bg-white px-6 py-3 text-primary-900 font-medium shadow-lg transition hover:-translate-y-0.5"
              >
                La nostra storia
              </Link>
              <Link
                href="/contatti"
                className="rounded-full border-2 border-white px-6 py-3 text-white font-medium transition hover:bg-white hover:text-primary-900"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
