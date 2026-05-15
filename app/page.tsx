export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          Creador de experiencias visuales
        </h1>

        <p className="mt-6 text-gray-400 text-sm md:text-lg tracking-widest">
          Fotografía · Video · Invitaciones digitales · Storytelling
        </p>

        <div className="mt-10 flex gap-4">
          <a href="#experiencias" className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">
            Ver experiencias
          </a>

          <a href="#contacto" className="px-6 py-3 bg-white text-black hover:opacity-80 transition">
            Contacto
          </a>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section id="experiencias" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12">
          Experiencias
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-800 p-6">
            <h3 className="text-xl mb-2">Elegant Invitation</h3>
            <p className="text-gray-400 text-sm">
              Invitación digital minimalista y elegante.
            </p>
          </div>

          <div className="border border-gray-800 p-6">
            <h3 className="text-xl mb-2">Cinematic Experience</h3>
            <p className="text-gray-400 text-sm">
              Video narrativo con enfoque cinematográfico.
            </p>
          </div>

          <div className="border border-gray-800 p-6">
            <h3 className="text-xl mb-2">Luxury Story</h3>
            <p className="text-gray-400 text-sm">
              Foto + video + galería editorial premium.
            </p>
          </div>

        </div>
      </section>

      {/* PORTAFOLIO */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            Portafolio
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-square bg-zinc-800"></div>
            <div className="aspect-square bg-zinc-800"></div>
            <div className="aspect-square bg-zinc-800"></div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Trabajemos juntos
        </h2>

        <p className="text-gray-400 mb-10">
          Fotografía · Video · Experiencias visuales para eventos y marcas personales
        </p>

        <a
          href="mailto:tuemail@correo.com"
          className="px-8 py-3 bg-white text-black hover:opacity-80 transition"
        >
          Contactar
        </a>
      </section>

    </main>
  );
}
