import React from 'react'
import { cn } from '@/lib/utils'

type AuroraBackgroundProps = {
  children: React.ReactNode
  className?: string
  /** Imagen de fondo (ej. Unsplash sobre animales / tenencia responsable) */
  imageUrl?: string
  /** Opacidad de la imagen 0–1 (default 0.45) */
  imageOpacity?: number
}

/**
 * AuroraBackground — fondo con imagen + aurora animada.
 * Las animaciones viven en index.css (compatible con Vite; no usa styled-jsx).
 */
export const AuroraBackground = ({
  children,
  className = '',
  imageUrl,
  imageOpacity = 0.45,
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        'relative min-h-screen w-full overflow-hidden bg-black',
        className,
      )}
    >
      {/* Capa de imagen de fondo */}
      {imageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            opacity: imageOpacity,
          }}
          aria-hidden
        />
      ) : null}

      {/* Aurora Background */}
      <div className="absolute inset-0">
        {/* Base aurora layer */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40" />
        </div>

        {/* Animated aurora waves */}
        <div className="absolute inset-0">
          <div
            className="animate-aurora1 absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 800px 600px at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            }}
          />
          <div
            className="animate-aurora2 absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(ellipse 600px 400px at 80% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
            }}
          />
          <div
            className="animate-aurora3 absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 700px 500px at 20% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            }}
          />
          <div
            className="animate-aurora4 absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse 900px 300px at 60% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AuroraBackground
