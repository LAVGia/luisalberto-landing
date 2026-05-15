export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="h-screen flex items-center px-8 md:px-20 
border-b border-white/10">
        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Productor Audiovisual
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Luis Alberto <span className="text-zinc-500">VG</span>
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl mt-10 
leading-relaxed">
            Fotografía, video, livestream y narrativa visual para eventos,
            marcas y coberturas en tiempo real.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <button className="bg-white text-black px-8 py-4 rounded-full 
font-bold hover:scale-105 transition">
              Ver Portafolio
            </button>

            <button className="border border-white/20 px-8 py-4 
rounded-full hover:bg-white hover:text-black transition">
              Coberturas en Vivo
            </button>

          </div>

        </div>
      </section>

      {/* SOBRE MI */}

      <section className="px-8 md:px-20 py-32 border-b border-white/10">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div className="bg-zinc-900 rounded-3xl h-[500px]"></div>

          <div>

            <h2 className="text-5xl font-black mb-10">
              Historias que se viven en tiempo real.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Mi trabajo combina fotografía documental, producción 
audiovisual
              y transmisión en vivo para crear experiencias visuales con
              identidad cinematográfica.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Desde bodas y conciertos hasta eventos masivos y campañas
              institucionales, cada proyecto busca capturar emociones 
reales
              con una estética moderna y narrativa visual cuidada.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICIOS */}

      <section className="px-8 md:px-20 py-32 border-b border-white/10">

        <h2 className="text-5xl font-black mb-20">
          Servicios
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-10">
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

          <div className="bg-zinc-900 rounded-3xl p-10">
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

          <div className="bg-zinc-900 rounded-3xl p-10">
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

          <div className="bg-zinc-900 rounded-3xl p-10">
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

      {/* ENCUENTRA TU FOTO */}

      <section className="px-8 md:px-20 py-32 text-center border-b 
border-white/10">

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

      <section className="px-8 md:px-20 py-32 border-b border-white/10">

        <h2 className="text-5xl font-black mb-20">
          Portafolio
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-3xl h-[400px] flex items-end 
p-8">
            <h3 className="text-3xl font-bold">Bodas</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl h-[400px] flex items-end 
p-8">
            <h3 className="text-3xl font-bold">Conciertos</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl h-[400px] flex items-end 
p-8">
            <h3 className="text-3xl font-bold">Documental</h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl h-[400px] flex items-end 
p-8">
            <h3 className="text-3xl font-bold">Live Streaming</h3>
          </div>

        </div>

      </section>

      {/* REDES */}

      <section className="px-8 md:px-20 py-32 border-b border-white/10">

        <h2 className="text-5xl font-black mb-20">
          Sigue las Coberturas
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              Facebook Tepalcingo
            </h3>

            <p className="text-zinc-400 mb-8">
              Cobertura institucional y transmisiones oficiales.
            </p>

            <button className="border border-white/20 px-6 py-3 
rounded-full">
              Ver Página
            </button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              Facebook Luis Alberto VG
            </h3>

            <p className="text-zinc-400 mb-8">
              Cobertura regional y contenido social.
            </p>

            <button className="border border-white/20 px-6 py-3 
rounded-full">
              Seguir
            </button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              YouTube
            </h3>

            <p className="text-zinc-400 mb-8">
              Lives masivos y producciones especiales.
            </p>

            <button className="border border-white/20 px-6 py-3 
rounded-full">
              Ver Canal
            </button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              Instagram
            </h3>

            <p className="text-zinc-400 mb-8">
              Reels, retratos y contenido visual.
            </p>

            <button className="border border-white/20 px-6 py-3 
rounded-full">
              Ver Instagram
            </button>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5">
              TikTok
            </h3>

            <p className="text-zinc-400 mb-8">
              Storytelling y detrás de cámaras.
            </p>

            <button className="border border-white/20 px-6 py-3 
rounded-full">
              Ver TikTok
            </button>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-8 md:px-20 py-40 text-center">

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

    </main>
  )
}
