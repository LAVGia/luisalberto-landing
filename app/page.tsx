export default function Home() {
  return (
    <main className="bg-[#1a1721] text-white min-h-screen scroll-smooth">

      {/* HERO */}

      <section className="h-screen flex items-center px-8 md:px-20 
border-b border-white/10">

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.3em] text-zinc-400 mb-6">
            Productor Audiovisual
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none 
relative overflow-hidden w-fit">

            <span className="relative z-10">
              Luis Alberto <span className="text-[#8f7bb8]">VG</span>
            </span>

            <span className="absolute inset-0 shimmer"></span>

          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl mt-10 
leading-relaxed">
            Fotografía, video, livestream y narrativa visual para eventos,
            marcas y coberturas en tiempo real.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#portfolio"
              className="bg-white text-black px-8 py-4 rounded-full 
font-bold hover:scale-105 transition"
            >
              Portafolio
            </a>

            <a
              href="#foto"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition"
            >
              Tu Foto
            </a>

            <a
              href="#services"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition"
            >
              Servicios
            </a>

            <a
              href="#contact"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition"
            >
              Contacto
            </a>

          </div>

        </div>

      </section>

      {/* SERVICIOS */}

      <section
        id="services"
        className="px-8 md:px-20 py-32 border-b border-white/10"
      >

        <h2 className="text-5xl font-black mb-20">
          Servicios
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-[#241f2f] rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-8">
              Producción Audiovisual
            </h3>

            <ul className="space-y-4 text-zinc-400">
              <li>Reels cinematográficos</li>
              <li>Video comercial</li>
              <li>Documentales cortos</li>
              <li>Contenido institucional</li>
            </ul>
          </div>

          <div className="bg-[#241f2f] rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-8">
              Fotografía
            </h3>

            <ul className="space-y-4 text-zinc-400">
              <li>Bodas</li>
              <li>Retrato</li>
              <li>Eventos sociales</li>
              <li>Fotografía documental</li>
            </ul>
          </div>

          <div className="bg-[#241f2f] rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-8">
              Live Streaming
            </h3>

            <ul className="space-y-4 text-zinc-400">
              <li>Multicámara</li>
              <li>Conciertos</li>
              <li>Eventos masivos</li>
              <li>Cobertura en vivo</li>
            </ul>
          </div>

          <div className="bg-[#241f2f] rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-8">
              Diseño Digital
            </h3>

            <ul className="space-y-4 text-zinc-400">
              <li>Invitaciones web</li>
              <li>Contenido para redes</li>
              <li>Branding visual</li>
              <li>Motion graphics</li>
            </ul>
          </div>

        </div>

      </section>

      {/* TU FOTO */}

      <section
        id="foto"
        className="px-8 md:px-20 py-32 text-center border-b 
border-white/10"
      >

        <h2 className="text-5xl md:text-6xl font-black">
          ¿Estuviste en un evento?
        </h2>

        <p className="text-zinc-400 max-w-3xl mx-auto mt-10 text-xl 
leading-relaxed">
          Accede a galerías actualizadas en tiempo real y encuentra tus
          fotografías minutos después de haber sido capturadas.
        </p>

        <button className="bg-white text-black px-10 py-5 rounded-full 
font-bold mt-14 hover:scale-105 transition">
          Entrar a Galerías
        </button>

      </section>

      {/* PORTAFOLIO */}

      <section
        id="portfolio"
        className="px-8 md:px-20 py-32 border-b border-white/10"
      >

        <h2 className="text-5xl font-black mb-20">
          Portafolio
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-[#241f2f] rounded-3xl h-[400px] flex 
items-end p-8">
            <h3 className="text-3xl font-bold">Bodas</h3>
          </div>

          <div className="bg-[#241f2f] rounded-3xl h-[400px] flex 
items-end p-8">
            <h3 className="text-3xl font-bold">Conciertos</h3>
          </div>

          <div className="bg-[#241f2f] rounded-3xl h-[400px] flex 
items-end p-8">
            <h3 className="text-3xl font-bold">Documental</h3>
          </div>

          <div className="bg-[#241f2f] rounded-3xl h-[400px] flex 
items-end p-8">
            <h3 className="text-3xl font-bold">Live Streaming</h3>
          </div>

        </div>

      </section>

      {/* CONTACTO */}

      <section
        id="contact"
        className="px-8 md:px-20 py-40 text-center"
      >

        <h2 className="text-6xl font-black">
          ¿Tienes una historia que contar?
        </h2>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mt-10 
leading-relaxed">
          Producción visual, narrativa audiovisual y cobertura en tiempo 
real
          para proyectos que buscan destacar.
        </p>

        <button className="bg-white text-black px-10 py-5 rounded-full 
font-bold mt-14 hover:scale-105 transition">
          Hablemos
        </button>

      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .shimmer {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.06) 45%,
            rgba(255,255,255,0.18) 50%,
            rgba(255,255,255,0.06) 55%,
            transparent 100%
          );

          transform: translateX(-100%);
          animation: shimmerMove 7s infinite;
        }

        @keyframes shimmerMove {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
      `}</style>

    </main>
  )
}

