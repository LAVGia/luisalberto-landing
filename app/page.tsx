export const metadata = {
  title: "LuisAlbertoVG",
}

const portfolioItems = [
  {
    title: "Bodas",
    image:
      
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "XV Años",
    image:
      
"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Retrato",
    image:
      
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Documental",
    image:
      
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Livestream",
    image:
      
"https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop",
  },
]

export default function Home() {
  return (
    <main className="bg-[#0b0b0f] text-[#f5f5f7] overflow-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-10%] left-[15%] w-[900px] h-[900px] 
bg-[#8f7bb8]/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] 
h-[800px] bg-[#b497ff]/10 blur-[200px] rounded-full"></div>

      </div>

      {/* HERO */}

      <section className="min-h-screen flex items-center px-8 md:px-20 
border-b border-white/5 relative overflow-hidden">

        <div className="absolute inset-0 
bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_50%)]"></div>

        <div className="max-w-7xl relative z-10">

          <p className="uppercase tracking-[0.5em] text-zinc-500 mb-8 
text-sm">
            Productor Audiovisual
          </p>

          <h1 className="text-6xl md:text-8xl xl:text-[10rem] font-black 
leading-[0.9] tracking-[-0.04em]">

            Luis Alberto
            <br />

            <span className="text-[#b497ff]">
              VG
            </span>

          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl mt-12 
leading-relaxed">
            Producción audiovisual, livestreaming, fotografía y narrativa
            visual para eventos, marcas e historias reales.
          </p>

          <div className="flex flex-wrap gap-5 mt-14">

            <a
              href="#luxury"
              className="bg-white text-black px-9 py-5 rounded-full 
font-semibold hover:scale-105 transition duration-500"
            >
              Luxury Experience
            </a>

            <a
              href="#portfolio"
              className="border border-white/10 bg-white/5 
backdrop-blur-xl px-9 py-5 rounded-full hover:bg-white hover:text-black 
transition duration-500"
            >
              Portafolio
            </a>

            <a
              href="#social"
              className="border border-white/10 bg-white/5 
backdrop-blur-xl px-9 py-5 rounded-full hover:bg-white hover:text-black 
transition duration-500"
            >
              Redes Sociales
            </a>

          </div>

        </div>

      </section>

      {/* LUXURY */}

      <section
        id="luxury"
        className="relative px-8 md:px-20 py-44 border-b border-white/5"
      >

        <div className="grid xl:grid-cols-2 gap-24 items-center">

          <div>

            <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6 
text-sm">
              Luxury Event Experience
            </p>

            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black 
leading-[0.95] tracking-[-0.04em]">

              Diseñado como
              <br />

              una experiencia
              <br />

              visual premium
              <br />

              dentro de tu evento.

            </h2>

            <div className="mt-14 space-y-5 text-zinc-300 text-lg 
md:text-xl leading-relaxed">

              <p>• Producción visual previa a tu evento</p>

              <p>• Video y sesión fotográfica para tu invitación</p>

              <p>• Invitación web premium personalizada</p>

              <p>• Historia visual con fotos y video cinematográfico</p>

              <p>• Sesión fotográfica luxury para tus invitados</p>

              <p>• Galería online en tiempo real</p>

              <p>• Contenido digital shareable al momento</p>

              <p>• Impresiones fotográficas premium</p>

              <p>• Entrega inmediata al finalizar la experiencia</p>

            </div>

            <div className="mt-16 border-l border-[#8f7bb8]/50 pl-8">

              <h3 className="text-3xl md:text-5xl font-black 
leading-tight">

                Tu evento termina.
                <br />

                <span className="text-[#b497ff]">
                  Tus recuerdos ya están listos.
                </span>

              </h3>

            </div>

            <div className="flex flex-wrap gap-5 mt-16">

              <a
                href="https://luisalberto.vg/invitacion"
                target="_blank"
                className="bg-[#8f7bb8] text-white px-9 py-5 rounded-full 
font-semibold hover:scale-105 transition duration-500"
              >
                Ver Experience
              </a>

              <a
                href="https://wa.me/527351210954"
                target="_blank"
                className="border border-white/10 bg-white/5 
backdrop-blur-xl px-9 py-5 rounded-full hover:bg-white hover:text-black 
transition duration-500"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-[#8f7bb8]/20 blur-[120px] 
rounded-full"></div>

            <div className="relative rounded-[3rem] overflow-hidden border 
border-white/10 bg-white/5 backdrop-blur-2xl">

              <img
                
src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop"
                className="w-full h-[850px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#0b0b0f] via-black/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10 md:p-14">

                <p className="uppercase tracking-[0.4em] text-zinc-400 
text-sm mb-5">
                  Luxury Event Experience
                </p>

                <h3 className="text-4xl md:text-6xl font-black 
leading-none">

                  Visual
                  <br />

                  Storytelling

                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="px-8 md:px-20 py-44 border-b border-white/5"
      >

        <div className="max-w-5xl mb-24">

          <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6 
text-sm">
            Servicios
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] 
tracking-[-0.04em]">

            Producción visual
            <br />

            para experiencias modernas.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {[
            {
              title: "Producción Audiovisual",
              items: [
                "Cortometrajes",
                "Documentales",
                "Video comercial",
                "Narrativa cinematográfica",
              ],
              image:
                
"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Fotografía",
              items: [
                "Retrato",
                "Eventos sociales",
                "Luxury Sessions",
                "Contenido visual",
              ],
              image:
                
"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Live Streaming",
              items: [
                "Eventos masivos",
                "Multicámara profesional",
                "Audio profesional",
                "Cobertura en tiempo real",
              ],
              image:
                
"https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600&auto=format&fit=crop",
            },
            {
              title: "Cobertura Digital",
              items: [
                "Contenido social",
                "Cobertura tipo reportero",
                "Reels y clips",
                "Narrativa visual",
              ],
              image:
                
"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group relative rounded-[2.5rem] overflow-hidden 
border border-white/10 min-h-[580px] bg-white/5 backdrop-blur-2xl 
hover:-translate-y-2 transition duration-700"
            >

              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-110 transition duration-[3000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#0b0b0f] via-black/40 to-black/10"></div>

              <div className="relative z-10 p-10 flex flex-col justify-end 
h-full">

                <h3 className="text-3xl font-black mb-8">
                  {service.title}
                </h3>

                <ul className="space-y-4 text-zinc-300 text-lg">

                  {service.items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PORTFOLIO */}

      <section
        id="portfolio"
        className="px-8 md:px-20 py-44 border-b border-white/5"
      >

        <div className="max-w-5xl mb-24">

          <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6 
text-sm">
            Portafolio
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] 
tracking-[-0.04em]">

            Historias reales.
            <br />

            Narrativa visual.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-[2rem] overflow-hidden 
h-[520px] border border-white/10 hover:-translate-y-2 transition 
duration-700"
            >

              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-110 transition duration-[3000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#0b0b0f] via-black/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 z-10">

                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* SOCIAL */}

      <section
        id="social"
        className="px-8 md:px-20 py-44 border-b border-white/5"
      >

        <div className="max-w-5xl mb-24">

          <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6 
text-sm">
            Redes Sociales
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] 
tracking-[-0.04em]">

            Cobertura digital,
            <br />

            eventos masivos y storytelling.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {[
            {
              title: "Instagram",
              link: "https://www.instagram.com/luisalbertovg",
              text: "Retratos, reels y narrativa visual.",
            },
            {
              title: "Facebook",
              link: "https://www.facebook.com/LuisAlbertoVGOficial",
              text: "Cobertura audiovisual y contenido social.",
            },
            {
              title: "Noticias Tepalcingo",
              link: "https://www.facebook.com/Tepalcingo",
              text: "Cobertura tipo reportero y eventos masivos.",
            },
            {
              title: "TikTok",
              link: "https://www.tiktok.com/@luisalberto.vg",
              text: "Storytelling y detrás de cámaras.",
            },
            {
              title: "Pixieset",
              link: "https://luisalbertovg9.pixieset.com/quinceandrea/",
              text: "Galerías premium y entregas inmediatas.",
            },
          ].map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="_blank"
              className="group relative overflow-hidden rounded-[2rem] 
border border-white/10 bg-white/5 backdrop-blur-2xl p-8 
hover:-translate-y-2 transition duration-700"
            >

              <div className="relative z-10">

                <h3 className="text-2xl font-black mb-5">
                  {social.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {social.text}
                </p>

              </div>

            </a>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="relative px-8 md:px-20 py-52 text-center 
overflow-hidden"
      >

        <div className="absolute inset-0 
bg-[radial-gradient(circle_at_center,rgba(180,151,255,0.12),transparent_60%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black 
leading-[0.95] tracking-[-0.04em]">

            ¿Tienes una
            <br />

            historia que contar?

          </h2>

          <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl 
mx-auto mt-12 leading-relaxed">

            Producción audiovisual, livestreaming, fotografía y 
experiencias
            visuales premium para proyectos que buscan destacar.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="bg-white text-black px-10 py-5 rounded-full 
font-semibold hover:scale-105 transition duration-500"
            >
              Iniciar Proyecto
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}
