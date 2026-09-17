import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { Guide } from '@/components/Guide'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Guide />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
