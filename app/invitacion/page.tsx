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

const services = [
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
]

const socials = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/luisalbertovg",
    text: "Retratos, reels y narrativa visual premium.",
  },
  {
    title: "LuisAlbertoVG Oficial",
    link: "https://www.facebook.com/LuisAlbertoVGOficial",
    text: "Cobertura de eventos masivos, contenido regional y storytelling 
visual positivo.",
  },
  {
    title: "Noticias Tepalcingo",
    link: "https://www.facebook.com/Tepalcingo",
    text: "Noticias positivas, culturales y sociales de Tepalcingo.",
  },
  {
    title: "TikTok",
    link: "https://www.tiktok.com/@luisalberto.vg",
    text: "Behind the scenes, narrativa visual y contenido 
cinematográfico.",
  },
]

export default function Home() {
  return (
    <main className="bg-[#f3eefc] text-[#1a1324] overflow-x-hidden 
selection:bg-[#b497ff] selection:text-black">

      {/* ATMOSPHERE */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-10%] left-[0%] w-[1400px] 
h-[1400px] bg-[#cdb8ff]/40 blur-[260px] rounded-full"></div>

        <div className="absolute bottom-[-20%] right-[-10%] w-[1200px] 
h-[1200px] bg-[#e8dcff]/50 blur-[260px] rounded-full"></div>

        <div className="absolute top-[40%] left-[55%] w-[700px] h-[700px] 
bg-white/40 blur-[200px] rounded-full"></div>

      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-8 
md:px-20 overflow-hidden">

        <div className="max-w-7xl relative z-10">

          <p className="uppercase tracking-[0.6em] text-[#6f5f8e] mb-8 
text-sm">
            Productor Audiovisual
          </p>

          <h1 className="text-7xl md:text-[9rem] xl:text-[12rem] 
font-black leading-[0.82] tracking-[-0.08em]">

            Luis Alberto
            <br />

            <span className="text-[#9f7dff] 
drop-shadow-[0_0_40px_rgba(159,125,255,0.35)]">
              VG
            </span>

          </h1>

          <p className="text-[#5d4f77] text-2xl md:text-3xl max-w-4xl 
mt-14 leading-[1.6] font-light">
            Producción audiovisual, livestreaming, fotografía y narrativa
            visual para eventos, marcas e historias reales.
          </p>

          <div className="flex flex-wrap gap-5 mt-16">

            <a
              href="#luxury"
              className="group relative overflow-hidden bg-[#9f7dff] 
text-white px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_50px_rgba(159,125,255,0.35)]"
            >

              <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/30 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

              <span className="relative z-10">
                Luxury Experience
              </span>

            </a>

            <a
              href="#gallery"
              className="bg-white/60 backdrop-blur-2xl border 
border-white/60 px-10 py-5 rounded-[999px] hover:bg-white transition 
duration-500"
            >
              Buscar Fotos
            </a>

            <a
              href="#portfolio"
              className="bg-white/60 backdrop-blur-2xl border 
border-white/60 px-10 py-5 rounded-[999px] hover:bg-white transition 
duration-500"
            >
              Portafolio
            </a>

            <a
              href="#social"
              className="bg-white/60 backdrop-blur-2xl border 
border-white/60 px-10 py-5 rounded-[999px] hover:bg-white transition 
duration-500"
            >
              Redes Sociales
            </a>

          </div>

        </div>

      </section>

      {/* LUXURY */}

      <section
        id="luxury"
        className="relative px-8 md:px-20 py-56 overflow-hidden"
      >

        <div className="absolute inset-0 
bg-[radial-gradient(circle_at_center,rgba(180,151,255,0.18),transparent_60%)]"></div>

        <div className="grid xl:grid-cols-2 gap-28 items-center relative 
z-10">

          <div>

            <p className="uppercase tracking-[0.5em] text-[#6f5f8e] mb-6 
text-sm">
              Luxury Event Experience
            </p>

            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black 
leading-[0.92] tracking-[-0.08em]">

              Diseñado como
              <br />

              una experiencia
              <br />

              visual premium
              <br />

              dentro de tu evento.

            </h2>

            <div className="mt-14 space-y-5 text-[#5d4f77] text-lg 
md:text-xl leading-relaxed font-light">

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

            <div className="mt-16 pl-8 border-l border-[#b497ff]/40">

              <h3 className="text-3xl md:text-5xl font-black leading-tight 
tracking-[-0.06em]">

                Tu evento termina.
                <br />

                <span className="text-[#9f7dff]">
                  Tus recuerdos ya están listos.
                </span>

              </h3>

            </div>

            <div className="flex flex-wrap gap-5 mt-16">

              <a
                href="https://luisalberto.vg/invitacion"
                target="_blank"
                className="group relative overflow-hidden bg-[#9f7dff] 
text-white px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_60px_rgba(159,125,255,0.35)]"
              >

                <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/20 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

                <span className="relative z-10">
                  Ver Experience
                </span>

              </a>

              <a
                href="https://wa.me/527351210954"
                target="_blank"
                className="bg-white/60 backdrop-blur-2xl border 
border-white/60 px-10 py-5 rounded-[999px] hover:bg-white transition 
duration-500"
              >
                WhatsApp
              </a>

              <a
                href="/LuisAlbertoVG.vcf"
                className="bg-white/60 backdrop-blur-2xl border 
border-white/60 px-10 py-5 rounded-[999px] hover:bg-white transition 
duration-500"
              >
                Guardar Contacto
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-[#b497ff]/25 blur-[160px] 
rounded-full"></div>

            <div className="group relative rounded-[4rem] overflow-hidden 
border border-white/60 bg-white/50 backdrop-blur-2xl 
shadow-[0_40px_120px_rgba(140,110,220,0.15)]">

              <img
                
src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1800&auto=format&fit=crop&sat=-100"
                className="w-full h-[900px] object-cover 
group-hover:scale-[1.08] transition duration-[4000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#120f18]/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-12 md:p-16">

                <p className="uppercase tracking-[0.5em] text-white/80 
text-sm mb-6">
                  Luxury Event Experience
                </p>

                <h3 className="text-5xl md:text-7xl text-white font-black 
leading-none tracking-[-0.08em]">

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
        className="px-8 md:px-20 py-56"
      >

        <div className="max-w-5xl mb-28">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] mb-6 
text-sm">
            Servicios
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            Producción visual
            <br />

            para experiencias modernas.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-[4rem] overflow-hidden 
border border-white/60 min-h-[620px] bg-white/50 backdrop-blur-2xl 
hover:-translate-y-4 hover:shadow-[0_40px_120px_rgba(140,110,220,0.15)] 
transition duration-700"
            >

              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-[1.08] transition duration-[3500ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#120f18]/80 via-black/10 to-transparent"></div>

              <div className="relative z-10 p-10 flex flex-col justify-end 
h-full">

                <h3 className="text-3xl text-white font-black mb-8 
tracking-[-0.06em]">
                  {service.title}
                </h3>

                <ul className="space-y-4 text-white/80 text-lg 
leading-relaxed">

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
        className="px-8 md:px-20 py-56"
      >

        <div className="max-w-5xl mb-28">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] mb-6 
text-sm">
            Portafolio
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            Historias reales.
            <br />

            Narrativa visual.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-[4rem] overflow-hidden 
h-[560px] border border-white/60 hover:-translate-y-4 
hover:shadow-[0_40px_120px_rgba(140,110,220,0.15)] transition 
duration-700"
            >

              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-[1.08] transition duration-[3500ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#120f18]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 z-10">

                <h3 className="text-3xl text-white font-black 
tracking-[-0.06em]">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="relative px-8 md:px-20 py-56 overflow-hidden"
      >

        <div className="absolute inset-0 
bg-[radial-gradient(circle_at_center,rgba(180,151,255,0.18),transparent_60%)]"></div>

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] mb-6 
text-sm">
            Online Gallery
          </p>

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black 
leading-[0.92] tracking-[-0.08em]">

            ¿Estuviste
            <br />

            en un evento?

          </h2>

          <p className="text-[#5d4f77] text-2xl leading-[1.6] max-w-3xl 
mt-14 font-light">

            Encuentra tus fotografías, galerías premium y recuerdos 
digitales
            de eventos sociales, conciertos, coberturas y experiencias 
luxury.

          </p>

          <div className="flex flex-wrap gap-5 mt-16">

            <a
              href="https://luisalbertovg9.pixieset.com/"
              target="_blank"
              className="group relative overflow-hidden bg-[#9f7dff] 
text-white px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_60px_rgba(159,125,255,0.35)]"
            >

              <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/20 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

              <span className="relative z-10">
                Buscar Fotos
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* SOCIAL */}

      <section
        id="social"
        className="px-8 md:px-20 py-56"
      >

        <div className="max-w-5xl mb-28">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] mb-6 
text-sm">
            Redes Sociales
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            Cobertura regional,
            <br />

            cultura y storytelling positivo.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {socials.map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="_blank"
              className="group relative overflow-hidden rounded-[4rem] 
border border-white/60 bg-white/50 backdrop-blur-2xl p-8 
hover:-translate-y-4 hover:shadow-[0_40px_120px_rgba(140,110,220,0.15)] 
transition duration-700"
            >

              <div className="relative z-10">

                <h3 className="text-2xl font-black mb-5 
tracking-[-0.06em]">
                  {social.title}
                </h3>

                <p className="text-[#5d4f77] leading-relaxed">
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
        className="relative px-8 md:px-20 py-56 text-center 
overflow-hidden"
      >

        <div className="absolute inset-0 
bg-[radial-gradient(circle_at_center,rgba(180,151,255,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black 
leading-[0.92] tracking-[-0.08em]">

            ¿Tienes una
            <br />

            historia que contar?

          </h2>

          <p className="text-[#5d4f77] text-xl md:text-2xl max-w-3xl 
mx-auto mt-12 leading-relaxed font-light">

            Producción audiovisual, livestreaming, fotografía y 
experiencias
            visuales premium para proyectos que buscan destacar.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="group relative overflow-hidden bg-[#9f7dff] 
text-white px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_50px_rgba(159,125,255,0.35)]"
            >

              <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/30 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

              <span className="relative z-10">
                Iniciar Proyecto
              </span>

            </a>

            <a
              href="/LuisAlbertoVG.vcf"
              className="bg-white/60 backdrop-blur-2xl border 
border-white/60 px-10 py-5 rounded-[999px] hover:bg-white transition 
duration-500"
            >
              Guardar Contacto
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}
