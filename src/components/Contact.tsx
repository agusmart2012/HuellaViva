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

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-line bg-card px-3 py-2.5 text-foreground outline-none ring-0 placeholder:text-muted-foreground/70 focus:border-foreground'

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
          return res.ok && (json.success === true || json.success === 'true')
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
    <section id="contacto" className="border-t border-line bg-muted">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Escribinos. Este proyecto se construye entre todos.
          </h2>
        </div>

        {status === 'sent' ? (
          <div
            className="flex flex-col justify-center rounded-2xl border border-line bg-card p-8"
            role="status"
          >
            <p className="text-2xl font-bold tracking-tight">¡Gracias!</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Te vamos a responder a la brevedad.
            </p>
            <button
              type="button"
              className="mt-6 w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
              onClick={() => setStatus('idle')}
            >
              Enviar otro
            </button>
          </div>
        ) : (
          <form
            className="relative overflow-hidden rounded-2xl border border-line bg-card p-6 sm:p-8"
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
            <label className="block text-sm font-medium text-foreground">
              Nombre
              <input
                required
                name="nombre"
                autoComplete="name"
                className={fieldClass}
                placeholder="Tu nombre"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className={fieldClass}
                placeholder="tumail@correo.com"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Quiero
              <select
                name="motivo"
                className={fieldClass}
                defaultValue="voluntariado"
              >
                <option value="voluntariado">Ser voluntario</option>
                <option value="adopcion">Adoptar</option>
                <option value="charla">Pedir una charla</option>
                <option value="donacion">Donar</option>
                <option value="otro">Otra consulta</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Mensaje
              <textarea
                required
                name="mensaje"
                rows={4}
                className={`${fieldClass} resize-y`}
                placeholder="Contanos en qué querés ayudar o qué necesitás."
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-wait disabled:opacity-70"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
