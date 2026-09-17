import { Logo } from '@/components/Logo'
import { org } from '@/content'

type BrandLockupProps = {
  nameClassName?: string
}

export function BrandLockup({ nameClassName = 'text-foreground' }: BrandLockupProps) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <a
        href={org.schoolUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center no-underline"
        aria-label={`${org.schoolName} (se abre en una pestaña nueva)`}
      >
        <img
          src="/logo-harwood-on-light.png"
          alt=""
          className="h-8 w-auto dark:hidden sm:h-9"
        />
        <img
          src="/logo-harwood.png"
          alt=""
          className="hidden h-8 w-auto dark:block sm:h-9"
        />
      </a>
      <span className="h-7 w-px shrink-0 bg-foreground/25 sm:h-8" aria-hidden />
      <a
        href="#inicio"
        className="flex min-w-0 shrink-0 items-center gap-2 no-underline sm:gap-2.5"
        aria-label="Inicio"
      >
        <Logo className="h-8 w-8 sm:h-9 sm:w-9" />
        <span
          className={`truncate text-[15px] font-semibold tracking-tight ${nameClassName}`}
        >
          {org.name}
        </span>
      </a>
    </div>
  )
}
