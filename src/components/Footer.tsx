import { BrandLockup } from '@/components/BrandLockup'
import { nav, org } from '@/content'

export function Footer() {
  return (
    <footer className="border-t border-line bg-inverse text-inverse-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <BrandLockup nameClassName="text-white" />
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Pie">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 no-underline hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm text-white/70 no-underline hover:text-white"
          >
            Contacto
          </a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/45">
          © {org.year} {org.name} · Proyecto de colegio · Contenido educativo
        </p>
      </div>
    </footer>
  )
}
