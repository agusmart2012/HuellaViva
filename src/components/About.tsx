import { aboutHeading, teamNote, values } from '@/content'

export function About() {
  return (
    <section id="nosotros" className="border-t border-line bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {aboutHeading}
          </h2>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {teamNote.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
