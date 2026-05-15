export const metadata = {
  title: "LuisAlbertoVG",
}

const portfolioItems = [
  {
    title: "Bodas",
    image:
      
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "XV Años",
    image:
      
"https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Retrato",
    image:
      
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Documental",
    image:
      
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Livestreaming",
    image:
      
"https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Home() {
  return (
    <main className="bg-[#1a1721] text-white min-h-screen">

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

            <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/10 to-transparent animate-pulse 
opacity-20"></span>

          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mt-10 
leading-relaxed">
            Fotografía, video, livestream y narrativa visual para eventos,
            marcas e instituciones.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#services"
              className="bg-white text-black px-8 py-4 rounded-full 
font-bold hover:scale-105 transition"
            >
              Servicios
            </a>

            <a
              href="#portfolio"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition"
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
              href="#social"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition"
            >
              Redes Sociales
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

          <div
            className="rounded-3xl p-10 bg-cover bg-center relative 
overflow-hidden min-h-[420px]"
            style={{
              backgroundImage:
                
"url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">
                Producción Audiovisual
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>Eventos sociales</li>
                <li>Video publicitario</li>
                <li>Documentales cortos</li>
                <li>Reels cinematográficos para tu marca</li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-3xl p-10 bg-cover bg-center relative 
overflow-hidden min-h-[420px]"
            style={{
              backgroundImage:
                
"url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">
                Fotografía
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>Bodas y XV Años</li>
                <li>Retrato</li>
                <li>Luxury Session</li>
                <li>Eventos sociales</li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-3xl p-10 bg-cover bg-center relative 
overflow-hidden min-h-[420px]"
            style={{
              backgroundImage:
                
"url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">
                Live Streaming
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>Eventos masivos</li>
                <li>Multicámara profesional</li>
                <li>Micrófonos profesionales</li>
                <li>Estabilizadores</li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-3xl p-10 bg-cover bg-center relative 
overflow-hidden min-h-[420px]"
            style={{
              backgroundImage:
                
"url('https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">
                Diseño Digital
              </h3>

              <ul className="space-y-4 text-zinc-300">
                <li>Invitaciones web</li>
                <li>Contenido para redes sociales</li>
                <li>Branding visual</li>
              </ul>
            </div>
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
          Encuentra tus fotografías en galerías actualizadas en tiempo 
real.
        </p>

        <a
          href="https://luisalbertovg9.pixieset.com/quinceandrea/"
          target="_blank"
          className="inline-block bg-white text-black px-10 py-5 
rounded-full font-bold mt-14 hover:scale-105 transition"
        >
          Entrar a Galería
        </a>

      </section>

      {/* PORTAFOLIO */}

      <section
        id="portfolio"
        className="px-8 md:px-20 py-32 border-b border-white/10"
      >

        <h2 className="text-5xl font-black mb-20">
          Portafolio
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl h-[380px] bg-cover bg-center relative 
overflow-hidden hover:scale-[1.02] transition"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* REDES */}

      <section
        id="social"
        className="px-8 md:px-20 py-32 border-b border-white/10"
      >

        <h2 className="text-5xl font-black mb-20">
          Redes Sociales
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          <a
            href="https://www.instagram.com/luisalbertovg"
            target="_blank"
            className="bg-[#241f2f] rounded-3xl p-8 hover:scale-105 
transition"
          >
            <h3 className="text-2xl font-bold mb-5">
              Instagram
            </h3>

            <p className="text-zinc-400">
              Reels, retratos y contenido visual.
            </p>
          </a>

          <a
            href="https://www.facebook.com/LuisAlbertoVGOficial"
            target="_blank"
            className="bg-[#241f2f] rounded-3xl p-8 hover:scale-105 
transition"
          >
            <h3 className="text-2xl font-bold mb-5">
              Facebook
            </h3>

            <p className="text-zinc-400">
              Cobertura regional y contenido social.
            </p>
          </a>

          <a
            href="https://www.facebook.com/Tepalcingo"
            target="_blank"
            className="bg-[#241f2f] rounded-3xl p-8 hover:scale-105 
transition"
          >
            <h3 className="text-2xl font-bold mb-5">
              Noticias Tepalcingo
            </h3>

            <p className="text-zinc-400">
              Cobertura institucional y transmisiones.
            </p>
          </a>

          <a
            href="https://www.tiktok.com/@luisalberto.vg"
            target="_blank"
            className="bg-[#241f2f] rounded-3xl p-8 hover:scale-105 
transition"
          >
            <h3 className="text-2xl font-bold mb-5">
              TikTok
            </h3>

            <p className="text-zinc-400">
              Storytelling y detrás de cámaras.
            </p>
          </a>

          <a
            href="https://luisalbertovg9.pixieset.com/quinceandrea/"
            target="_blank"
            className="bg-[#241f2f] rounded-3xl p-8 hover:scale-105 
transition"
          >
            <h3 className="text-2xl font-bold mb-5">
              Pixieset
            </h3>

            <p className="text-zinc-400">
              Galerías en vivo y entrega inmediata.
            </p>
          </a>

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

        <a
          href="https://wa.me/527351210954"
          target="_blank"
          className="inline-flex items-center gap-3 border 
border-green-500/40 text-white px-10 py-5 rounded-full font-bold mt-14 
hover:bg-green-500/10 hover:scale-105 transition"
        >
          <span className="text-green-400 text-xl">
            ◉
          </span>

          Enviar mensaje
        </a>

      </section>

    </main>
  )
}
