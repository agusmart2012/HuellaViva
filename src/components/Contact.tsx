import { type FormEvent, useState } from 'react'
import { org } from '@/content'

const motivoLabels: Record<string, string> = {
  voluntariado: 'Ser voluntario',
  adopcion: 'Adoptar',
  charla: 'Pedir una charla',
  donacion: 'Donar',
  otro: 'Otra consulta',
}

function openMailto(
  nombre: string,
  email: string,
  motivo: string,
  mensaje: string,
) {
  const to = org.emails.join(',')
  const subject = encodeURIComponent(`Huella Viva — ${motivo}`)
  const body = encodeURIComponent(
    `Nombre: ${nombre}\nEmail: ${email}\nQuiero: ${motivo}\n\n${mensaje}`,
  )
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get('_honey') ?? '')) {
      setStatus('sent')
      return
    }

    const nombre = String(data.get('nombre') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const motivoValue = String(data.get('motivo') ?? 'otro')
    const motivo = motivoLabels[motivoValue] ?? motivoValue
    const mensaje = String(data.get('mensaje') ?? '').trim()

    setStatus('sending')

    const payload = {
      nombre,
      email,
      motivo,
      mensaje,
      _subject: `Huella Viva — ${motivo}`,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      const results = await Promise.all(
        org.emails.map(async (address) => {
          const res = await fetch(`https://formsubmit.co/ajax/${address}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(payload),
          })
          const json = (await res.json()) as { success?: string | boolean }
          return (
            res.ok && (json.success === true || json.success === 'true')
          )
        }),
      )
      if (!results.every(Boolean)) {
        throw new Error('FormSubmit no disponible')
      }
      setStatus('sent')
    } catch {
      openMailto(nombre, email, motivo, mensaje)
      setStatus('sent')
    }
  }

  return (
    <section id="contacto" className="border-t border-line bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
            Contacto
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Escribinos. Este proyecto se construye entre todos.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-cream/75">
            ¿Querés sumarte, dar una charla en tu clase, adoptar o proponer una
            idea? Dejanos un mensaje.
          </p>
          <ul className="mt-8 space-y-2">
            {org.emails.map((mail) => (
              <li key={mail}>
                <a
                  href={`mailto:${mail}`}
                  className="text-sm text-sand no-underline hover:underline"
                >
                  {mail}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {status === 'sent' ? (
          <div
            className="flex flex-col justify-center rounded-[1.6rem] bg-forest-dark p-8"
            role="status"
          >
            <p className="font-display text-3xl font-semibold">¡Gracias!</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
              Tu mensaje llega a {org.emails[0]} y a {org.emails[1]}. Te vamos a
              responder a la brevedad.
            </p>
            <button
              type="button"
              className="mt-6 w-fit rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-forest"
              onClick={() => setStatus('idle')}
            >
              Enviar otro
            </button>
          </div>
        ) : (
          <form
            className="relative overflow-hidden rounded-[1.6rem] bg-forest-dark p-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            />
            <label className="block text-sm font-medium">
              Nombre
              <input
                required
                name="nombre"
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border-0 bg-cream/10 px-3 py-2.5 text-cream outline-none ring-1 ring-cream/15 placeholder:text-cream/35 focus:ring-2 focus:ring-sand"
                placeholder="Tu nombre"
              />
            </label>
            <label className="mt-4 block text-sm font-medium">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-1.5 w-full rounded-xl border-0 bg-cream/10 px-3 py-2.5 text-cream outline-none ring-1 ring-cream/15 placeholder:text-cream/35 focus:ring-2 focus:ring-sand"
                placeholder="tumail@correo.com"
              />
            </label>
            <label className="mt-4 block text-sm font-medium">
              Quiero
              <select
                name="motivo"
                className="mt-1.5 w-full rounded-xl border-0 bg-cream/10 px-3 py-2.5 text-cream outline-none ring-1 ring-cream/15 focus:ring-2 focus:ring-sand"
                defaultValue="voluntariado"
              >
                <option value="voluntariado">Ser voluntario</option>
                <option value="adopcion">Adoptar</option>
                <option value="charla">Pedir una charla</option>
                <option value="donacion">Donar</option>
                <option value="otro">Otra consulta</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium">
              Mensaje
              <textarea
                required
                name="mensaje"
                rows={4}
                className="mt-1.5 w-full resize-y rounded-xl border-0 bg-cream/10 px-3 py-2.5 text-cream outline-none ring-1 ring-cream/15 placeholder:text-cream/35 focus:ring-2 focus:ring-sand"
                placeholder="Contanos en qué querés ayudar o qué necesitás."
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full rounded-full bg-clay px-5 py-3 text-sm font-semibold text-white transition hover:bg-clay-dark disabled:cursor-wait disabled:opacity-70"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
