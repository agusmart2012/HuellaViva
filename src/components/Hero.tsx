import { ArrowRight, PawPrint } from 'lucide-react'
import { org } from '@/content'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
            <PawPrint className="h-3.5 w-3.5" aria-hidden />
            Proyecto escolar · ONG
          </p>
          <h1 className="font-display mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            {org.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {org.short} Adoptá con conciencia, castrá, vacuná y nunca
            abandones: ellos no eligen su hogar. Vos sí.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tenencia"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-clay-dark"
            >
              Qué es la tenencia responsable
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#sumate"
              className="inline-flex items-center rounded-full border border-ink/15 bg-paper px-6 py-3 text-sm font-semibold text-ink no-underline transition hover:border-forest hover:text-forest"
            >
              Quiero ayudar
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-leaf/15 blur-2xl" />
          <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-clay/15 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1400&q=80"
            alt="Persona abrazando a un perro con cariño"
            className="relative z-10 aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_rgba(28,23,18,0.18)] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <div className="absolute bottom-5 left-5 z-20 max-w-[15rem] rounded-2xl bg-paper/95 p-4 shadow-lg backdrop-blur">
            <p className="font-display text-lg font-semibold text-forest">
              Ellos sienten.
            </p>
            <p className="mt-1 text-sm leading-snug text-ink-soft">
              Un animal no se tiene: se acompaña, se cuida y se respeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
