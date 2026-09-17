import { ChevronDown } from 'lucide-react'
import { faqs } from '@/content'

export function Faq() {
  return (
    <section id="preguntas" className="border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <h2 className="font-display text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group open:[&_svg]:rotate-180">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-bold tracking-tight text-foreground sm:text-lg">
                {item.q}
                <ChevronDown
                  className="accordion-chevron h-5 w-5 shrink-0 text-muted-foreground transition-transform"
                  aria-hidden
                />
              </summary>
              <div className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>{item.a}</p>
                {'list' in item && item.list ? (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5">
                    {item.list.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
