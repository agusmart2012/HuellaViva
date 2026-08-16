import { Logo } from '@/components/Logo'
import { nav, org } from '@/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-2 no-underline">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-semibold text-ink">
              {org.name}
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            {org.tagline} {org.legal} dedicada a la tenencia responsable.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Pie">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft no-underline hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {org.year} {org.name} · Proyecto de colegio · Contenido educativo
        </p>
      </div>
    </footer>
  )
}
