import { CheckCircle2 } from 'lucide-react'
import { decalogo, pilares } from '@/content'

export function Guide() {
  return (
    <section id="tenencia" className="mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
          Guía
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          ¿Qué es la tenencia responsable?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Es el conjunto de obligaciones que asumís al convivir con un animal:
          garantizar su salud física y emocional, evitar que cause daño o
          molestias a terceros, y cumplir las normas de tu ciudad. Un animal no
          se “tiene” como un objeto. Es un ser sintiente.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pilares.map((pilar, index) => (
          <article
            key={pilar.title}
            className="rounded-2xl border border-line bg-paper p-6 transition hover:border-forest/30"
          >
            <span className="font-display text-sm font-semibold text-clay">
              0{index + 1}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-ink">{pilar.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {pilar.text}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-8 rounded-[2rem] bg-sand p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            Decálogo para tutores
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Si no podés ofrecerle tiempo, dinero para el veterinario y un
            ambiente seguro, es mejor no adoptarlo todavía. Eso también es
            responsabilidad.
          </p>
        </div>
        <ol className="space-y-3">
          {decalogo.map((item, index) => (
            <li key={item} className="flex gap-3 text-sm text-ink">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
              <span>
                <strong className="text-forest">{index + 1}.</strong> {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
