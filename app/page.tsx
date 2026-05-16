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
]

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#1b1425] via-[#120f18] 
to-[#09090c] text-[#f8f5ff] overflow-x-hidden selection:bg-[#dccfff] 
selection:text-black">

      {/* ATMOSPHERE */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-10%] left-[5%] w-[1400px] 
h-[1400px] bg-[#b497ff]/20 blur-[260px] rounded-full"></div>

        <div className="absolute bottom-[-20%] right-[-10%] w-[1200px] 
h-[1200px] bg-[#dccfff]/10 blur-[260px] rounded-full"></div>

        <div className="absolute top-[40%] left-[55%] w-[700px] h-[700px] 
bg-[#e7c8ff]/10 blur-[200px] rounded-full"></div>

        <div className="absolute inset-0 
bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]"></div>

      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-8 
md:px-20 overflow-hidden">

        <div className="max-w-7xl relative z-10">

          <p className="uppercase tracking-[0.6em] text-[#cabfda] mb-8 
text-sm">
            Productor Audiovisual
          </p>

          <h1 className="text-7xl md:text-[9rem] xl:text-[12rem] 
font-black leading-[0.82] tracking-[-0.08em]">

            Luis Alberto
            <br />

            <span className="text-[#dccfff] 
drop-shadow-[0_0_40px_rgba(220,207,255,0.45)]">
              VG
            </span>

          </h1>

          <p className="text-[#cabfda] text-2xl md:text-3xl max-w-4xl 
mt-14 leading-[1.6] font-light">
            Producción audiovisual, livestreaming, fotografía y narrativa
            visual para eventos, marcas e historias reales.
          </p>

          <div className="flex flex-wrap gap-5 mt-16">

            <a
              href="#luxury"
              className="group relative overflow-hidden bg-[#dccfff] 
text-black px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_50px_rgba(220,207,255,0.35)]"
            >

              <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/60 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

              <span className="relative z-10">
                Luxury Experience
              </span>

            </a>

            <a
              href="#portfolio"
              className="bg-white/[0.06] backdrop-blur-2xl border 
border-white/[0.08] px-10 py-5 rounded-[999px] hover:bg-white 
hover:text-black transition duration-500"
            >
              Portafolio
            </a>

            <a
              href="#social"
              className="bg-white/[0.06] backdrop-blur-2xl border 
border-white/[0.08] px-10 py-5 rounded-[999px] hover:bg-white 
hover:text-black transition duration-500"
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
bg-[radial-gradient(circle_at_center,rgba(220,207,255,0.12),transparent_60%)]"></div>

        <div className="grid xl:grid-cols-2 gap-28 items-center relative 
z-10">

          <div>

            <p className="uppercase tracking-[0.5em] text-[#cabfda] mb-6 
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

            <div className="mt-14 space-y-5 text-[#cabfda] text-lg 
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

            <div className="mt-16 pl-8 border-l border-[#dccfff]/40">

              <h3 className="text-3xl md:text-5xl font-black leading-tight 
tracking-[-0.06em]">

                Tu evento termina.
                <br />

                <span className="text-[#dccfff]">
                  Tus recuerdos ya están listos.
                </span>

              </h3>

            </div>

            <div className="flex flex-wrap gap-5 mt-16">

              <a
                href="https://luisalberto.vg/invitacion"
                target="_blank"
                className="group relative overflow-hidden bg-[#b497ff] 
text-white px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_60px_rgba(180,151,255,0.35)]"
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
                className="bg-white/[0.06] backdrop-blur-2xl border 
border-white/[0.08] px-10 py-5 rounded-[999px] hover:bg-white 
hover:text-black transition duration-500"
              >
                WhatsApp
              </a>

              <a
                href="/LuisAlbertoVG.vcf"
                className="bg-white/[0.06] backdrop-blur-2xl border 
border-white/[0.08] px-10 py-5 rounded-[999px] hover:bg-white 
hover:text-black transition duration-500"
              >
                Guardar Contacto
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-[#b497ff]/25 blur-[160px] 
rounded-full"></div>

            <div className="group relative rounded-[4rem] overflow-hidden 
border border-white/[0.08] bg-white/[0.05] backdrop-blur-2xl 
shadow-[0_40px_120px_rgba(0,0,0,0.45)]">

              <img
                
src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1800&auto=format&fit=crop"
                className="w-full h-[900px] object-cover 
group-hover:scale-[1.08] transition duration-[4000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#120f18] via-black/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-12 md:p-16">

                <p className="uppercase tracking-[0.5em] text-[#cabfda] 
text-sm mb-6">
                  Luxury Event Experience
                </p>

                <h3 className="text-5xl md:text-7xl font-black 
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

          <p className="uppercase tracking-[0.5em] text-[#cabfda] mb-6 
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
border border-white/[0.08] min-h-[620px] bg-white/[0.05] backdrop-blur-2xl 
hover:-translate-y-4 hover:shadow-[0_40px_120px_rgba(0,0,0,0.45)] 
transition duration-700"
            >

              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-[1.08] transition duration-[3500ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#120f18] via-black/30 to-transparent"></div>

              <div className="absolute inset-0 opacity-0 
group-hover:opacity-100 transition duration-700 
bg-[radial-gradient(circle_at_top,rgba(220,207,255,0.18),transparent_60%)]"></div>

              <div className="relative z-10 p-10 flex flex-col justify-end 
h-full">

                <h3 className="text-3xl font-black mb-8 
tracking-[-0.06em]">
                  {service.title}
                </h3>

                <ul className="space-y-4 text-[#cabfda] text-lg 
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

          <p className="uppercase tracking-[0.5em] text-[#cabfda] mb-6 
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
h-[560px] border border-white/[0.08] hover:-translate-y-4 
hover:shadow-[0_40px_120px_rgba(0,0,0,0.45)] transition duration-700"
            >

              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-[1.08] transition duration-[3500ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t 
from-[#120f18] via-black/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 z-10">

                <h3 className="text-3xl font-black tracking-[-0.06em]">
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
        className="px-8 md:px-20 py-56"
      >

        <div className="max-w-5xl mb-28">

          <p className="uppercase tracking-[0.5em] text-[#cabfda] mb-6 
text-sm">
            Redes Sociales
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            Cobertura digital,
            <br />

            eventos masivos y storytelling.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {socials.map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="_blank"
              className="group relative overflow-hidden rounded-[4rem] 
border border-white/[0.08] bg-white/[0.05] backdrop-blur-2xl p-8 
hover:-translate-y-4 hover:shadow-[0_40px_120px_rgba(0,0,0,0.45)] 
transition duration-700"
            >

              <div className="absolute inset-0 opacity-0 
group-hover:opacity-100 transition duration-700 
bg-[radial-gradient(circle_at_top,rgba(220,207,255,0.18),transparent_70%)]"></div>

              <div className="relative z-10">

                <h3 className="text-2xl font-black mb-5 
tracking-[-0.06em]">
                  {social.title}
                </h3>

                <p className="text-[#cabfda] leading-relaxed">
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
bg-[radial-gradient(circle_at_center,rgba(220,207,255,0.15),transparent_60%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black 
leading-[0.92] tracking-[-0.08em]">

            ¿Tienes una
            <br />

            historia que contar?

          </h2>

          <p className="text-[#cabfda] text-xl md:text-2xl max-w-3xl 
mx-auto mt-12 leading-relaxed font-light">

            Producción audiovisual, livestreaming, fotografía y 
experiencias
            visuales premium para proyectos que buscan destacar.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-16">

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="group relative overflow-hidden bg-[#dccfff] 
text-black px-10 py-5 rounded-[999px] font-semibold hover:scale-105 
transition duration-500 shadow-[0_0_50px_rgba(220,207,255,0.35)]"
            >

              <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/60 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

              <span className="relative z-10">
                Iniciar Proyecto
              </span>

            </a>

            <a
              href="/LuisAlbertoVG.vcf"
              className="bg-white/[0.06] backdrop-blur-2xl border 
border-white/[0.08] px-10 py-5 rounded-[999px] hover:bg-white 
hover:text-black transition duration-500"
            >
              Guardar Contacto
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}
