import { useState } from 'react'
import { ArrowRight, Mail, Menu, X } from 'lucide-react'
import { BrandLockup } from '@/components/BrandLockup'
import { nav } from '@/content'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-header">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem]">
        <div className="flex min-w-0 items-center gap-6 lg:gap-8">
          <BrandLockup />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-foreground no-underline transition hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-primary-dark"
          >
            Escribinos
            <Mail className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#tenencia"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-2.5 text-sm font-semibold text-foreground no-underline transition hover:border-foreground/35"
          >
            Conocé la causa
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="menu-movil" className="border-t border-line bg-header px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground no-underline hover:bg-card"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline"
              onClick={() => setOpen(false)}
            >
              Escribinos
              <Mail className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#tenencia"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-2.5 text-sm font-semibold text-foreground no-underline"
              onClick={() => setOpen(false)}
            >
              Conocé la causa
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
