import { ArrowUpRight } from 'lucide-react'
import { helpWays } from '@/content'

export function Help() {
  return (
    <section id="sumate" className="mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
          Cómo ayudar
        </p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          No hace falta ser experto. Hace falta comprometerse.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {helpWays.map((way) => (
          <article
            key={way.title}
            className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-ink">{way.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {way.text}
              </p>
            </div>
            <a
              href={way.href}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest no-underline hover:text-forest-dark"
            >
              {way.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
