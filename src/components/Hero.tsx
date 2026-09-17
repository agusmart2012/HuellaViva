import { ArrowRight, Heart, Home, PawPrint, Users } from 'lucide-react'
import { goalsHeading, org, stats } from '@/content'

const statIcons = [Heart, Home, PawPrint, Users]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative w-full bg-background">
        <img
          src="/front_page.png"
          alt="Perros, gatos, un conejo, un canario y un hámster"
          className="relative z-0 mx-auto block w-full max-w-6xl select-none"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h1 className="hero-title font-display max-w-3xl text-[clamp(2.6rem,6.5vw,5.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              {org.tagline}
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#tenencia"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white no-underline transition hover:bg-primary-dark"
              >
                Conocé la causa
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-full border border-foreground/15 bg-card px-5 py-3 text-sm font-semibold text-foreground no-underline transition hover:border-foreground/40"
              >
                Quiero ayudar
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 lg:pb-20">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {goalsHeading}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {stats.map((item, index) => {
            const Icon = statIcons[index] ?? Heart
            return (
              <article
                key={item.value}
                className="min-h-[220px] rounded-3xl bg-surface p-8 sm:p-10"
              >
                <Icon className="h-7 w-7 text-primary" aria-hidden />
                <p className="mt-5 text-2xl font-bold tracking-tight text-white">
                  {item.value}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  {item.label}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
