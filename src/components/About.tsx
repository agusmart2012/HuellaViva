import { stats, teamNote, values } from '@/content'

export function About() {
  return (
    <section id="nosotros" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              Quiénes somos
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Una causa que empezó en el aula y quiere llegar a toda la comunidad.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            {teamNote} Este sitio es el primer paso: una casa digital para
            educar, convocar voluntarios y mostrar que la tenencia responsable
            es posible.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.value}
              className="rounded-2xl border border-line bg-cream p-5"
            >
              <p className="font-display text-2xl font-semibold text-forest">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-forest px-6 py-7 text-cream"
            >
              <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
