import { type FormEvent, useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
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
        </div>

        {sent ? (
          <div className="flex flex-col justify-center rounded-[1.6rem] bg-forest-dark p-8">
            <p className="font-display text-3xl font-semibold">¡Gracias!</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
              Recibimos tu mensaje en esta demo. Cuando corrijas los datos de
              contacto, lo vamos a mandar de verdad al equipo.
            </p>
            <button
              type="button"
              className="mt-6 w-fit rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-forest"
              onClick={() => setSent(false)}
            >
              Enviar otro
            </button>
          </div>
        ) : (
          <form
            className="rounded-[1.6rem] bg-forest-dark p-6 sm:p-8"
            onSubmit={handleSubmit}
          >
            <label className="block text-sm font-medium">
              Nombre
              <input
                required
                name="nombre"
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
              className="mt-6 w-full rounded-full bg-clay px-5 py-3 text-sm font-semibold text-white transition hover:bg-clay-dark"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
