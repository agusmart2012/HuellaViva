import React, { type ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import {
  Menu,
  X,
  ChevronRight,
  Heart,
  Home,
  Stethoscope,
  GraduationCap,
  Shield,
  PawPrint,
} from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { Logo } from '@/components/Logo'
import { org } from '@/content'

function Link({ href, ...props }: ComponentProps<'a'> & { href: string }) {
  return <a href={href} {...props} />
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden" id="inicio">
        <section className="relative">
          <div className="relative mx-1 mt-1 min-h-[88vh] overflow-hidden rounded-3xl border border-black/10 sm:min-h-[78vh] lg:rounded-[3rem]">
            <img
              className="absolute inset-0 size-full object-cover object-top"
              src="/hero-dogs-clean.jpg"
              alt="Tres perros asomándose, felices de tener un hogar"
            />
            <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 sm:min-h-[78vh] lg:px-12 lg:pb-20">
              <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-2xl lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                  {org.legal}
                </p>
                <h1 className="font-display mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl xl:text-7xl">
                  {org.tagline}
                </h1>
                <p className="mt-5 max-w-xl text-balance text-base text-ink-soft sm:text-lg">
                  {org.short} Adoptá con conciencia, castrá, vacuná y nunca
                  abandones.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <Link href="#tenencia">
                      <span className="text-nowrap">Conocé la causa</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5"
                  >
                    <Link href="#sumate">
                      <span className="text-nowrap">Quiero ayudar</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Lo que promovemos</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  {causes.map((cause) => (
                    <div
                      key={cause.label}
                      className="flex items-center gap-2 text-foreground"
                    >
                      <cause.icon className="size-5" aria-hidden />
                      <span className="text-sm font-medium">{cause.label}</span>
                    </div>
                  ))}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const causes = [
  { label: 'Adoptar', icon: Heart },
  { label: 'Castrar', icon: Stethoscope },
  { label: 'Hogar seguro', icon: Home },
  { label: 'Educar', icon: GraduationCap },
  { label: 'Proteger', icon: Shield },
  { label: 'Nunca abandonar', icon: PawPrint },
]

const menuItems = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Tenencia', href: '#tenencia' },
  { name: 'Sumate', href: '#sumate' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="group fixed z-20 w-full pt-2"
      >
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
            scrolled && 'bg-background/50 backdrop-blur-2xl',
          )}
        >
          <motion.div
            key={1}
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
              scrolled && 'lg:py-4',
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="#inicio"
                aria-label="inicio"
                className="flex items-center space-x-2"
              >
                <Logo className="h-8 w-8" />
                <span className="font-display text-xl tracking-tight">
                  {org.name}
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="#contacto">
                    <span>Contacto</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#sumate">
                    <span>Sumate</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}
