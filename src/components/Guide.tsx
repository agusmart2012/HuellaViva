import { ChevronDown } from 'lucide-react'
import { decalogo, decalogoHeading, pilares, tenenciaIntro } from '@/content'

export function Guide() {
  return (
    <section id="tenencia" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            ¿Qué es la tenencia responsable?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {tenenciaIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
            {pilares.map((pilar, index) => (
              <details
                key={pilar.title}
                className="group bg-card open:bg-muted open:[&_svg]:rotate-180"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-base font-bold tracking-tight text-foreground sm:px-6 sm:text-lg">
                  {pilar.title}
                  <ChevronDown
                    className="accordion-chevron h-5 w-5 shrink-0 text-muted-foreground transition-transform"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                  {pilar.text}
                </p>
              </details>
            ))}
          </div>

          <aside className="rounded-2xl bg-inverse px-6 py-8 text-inverse-foreground sm:px-8">
            <p className="text-sm font-medium text-white/60">
              Decálogo para tutores
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              {decalogoHeading}
            </h3>
            <ol className="mt-6 space-y-3">
              {decalogo.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                  <span className="w-5 shrink-0 font-semibold text-primary">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}
