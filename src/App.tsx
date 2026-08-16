import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Guide } from '@/components/Guide'
import { Header } from '@/components/Header'
import { Help } from '@/components/Help'
import { ParallaxComponent } from '@/components/ui/parallax-scrolling'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <Header />
      <ParallaxComponent />
      <About />
      <Guide />
      <Help />
      <Contact />
      <Footer />
    </div>
  )
}
