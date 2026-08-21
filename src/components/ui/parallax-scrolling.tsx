import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const triggerElement = parallaxRef.current?.querySelector(
      '[data-parallax-layers]',
    )
    let tickerFn: ((time: number) => void) | undefined

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0,
        },
      })

      const layers = [
        { layer: '1', yPercent: 30 },
        { layer: '3', yPercent: 40 },
      ]

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(
            `[data-parallax-layer="${layerObj.layer}"]`,
          ),
          {
            yPercent: layerObj.yPercent,
            ease: 'none',
          },
          idx === 0 ? undefined : '<',
        )
      })
    }

    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    tickerFn = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
      if (triggerElement) {
        gsap.killTweensOf(triggerElement)
      }
      if (tickerFn) {
        gsap.ticker.remove(tickerFn)
      }
      lenis.destroy()
    }
  }, [])

  return (
    <div className="parallax" ref={parallaxRef} id="inicio">
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            <img
              src="/hero-dogs-clean.jpg"
              loading="eager"
              data-parallax-layer="1"
              alt="Mascotas asomándose: gato, perros, conejo y un periquito, felices de tener un hogar"
              className="parallax__layer-img"
            />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title sr-only">Huella Viva</h2>
            </div>
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>
    </div>
  )
}
