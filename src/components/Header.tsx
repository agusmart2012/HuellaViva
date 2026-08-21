import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { nav } from '@/content'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="flex items-center no-underline" aria-label="Inicio">
          <Logo className="h-10 w-10" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft no-underline transition hover:text-forest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#sumate"
            className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream no-underline transition hover:bg-forest-dark"
          >
            Sumate
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="menu-movil"
          className="border-t border-line bg-cream px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink no-underline hover:bg-sand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#sumate"
              className="mt-2 rounded-full bg-forest px-4 py-2.5 text-center text-sm font-semibold text-cream no-underline"
              onClick={() => setOpen(false)}
            >
              Sumate
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
