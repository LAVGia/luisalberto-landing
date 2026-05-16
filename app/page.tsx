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
      
"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
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
    title: "Livestream",
    image:
      
"https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* AMBIENT BACKGROUND */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] 
bg-[#8f7bb8]/20 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] 
bg-cyan-500/10 blur-[180px] rounded-full"></div>

      </div>

      {/* HERO */}

      <section className="min-h-screen flex items-center px-8 md:px-20 
border-b border-white/10 relative">

        <div className="max-w-6xl">

          <p className="uppercase tracking-[0.4em] text-zinc-500 mb-8 
text-sm">
            Productor Audiovisual
          </p>

          <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-black 
leading-[0.9] max-w-6xl">

            Narrativa
            <br />

            <span className="text-[#8f7bb8]">
              Cinematográfica
            </span>

          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed 
max-w-3xl mt-12">
            Producción audiovisual, livestreaming, fotografía y 
experiencias
            visuales premium para eventos, marcas e historias reales.
          </p>

          <div className="flex flex-wrap gap-5 mt-14">

            <a
              href="#experience"
              className="bg-white text-black px-8 py-4 rounded-full 
font-bold hover:scale-105 transition duration-300"
            >
              Ver Experience
            </a>

            <a
              href="#services"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition duration-300"
            >
              Producciones
            </a>

            <a
              href="#portfolio"
              className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition duration-300"
            >
              Portafolio
            </a>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="px-8 md:px-20 py-40 border-b border-white/10 relative"
      >

        <div className="grid xl:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-6 
text-sm">
              Cinematic Experience
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">

              Más que una
              <br />

              <span className="text-[#8f7bb8]">
                invitación
              </span>

            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed mt-10 
max-w-2xl">
              Creamos experiencias cinematográficas premium donde cada 
evento
              comienza antes de suceder.
            </p>

            <p className="text-zinc-500 text-lg leading-relaxed mt-8 
max-w-2xl">
              Video hero profesional, narrativa visual, sesiones 
editoriales,
              galerías premium y cobertura audiovisual conectada en una 
sola
              experiencia.
            </p>

            <div className="flex flex-wrap gap-5 mt-14">

              <a
                href="https://luisalberto.vg/invitacion"
                target="_blank"
                className="bg-[#8f7bb8] text-white px-8 py-4 rounded-full 
font-bold hover:scale-105 transition duration-300"
              >
                Ver Experience
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-8 py-4 rounded-full 
hover:bg-white hover:text-black transition duration-300"
              >
                Solicitar Proyecto
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-[#8f7bb8]/20 blur-[120px] 
rounded-full"></div>

            <div className="relative rounded-[3rem] overflow-hidden border 
border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

              <img
                
src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-[700px] object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black 
via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-10">

                <p className="uppercase tracking-[0.3em] text-zinc-400 
text-sm mb-4">
                  Luxury Event Experience
                </p>

                <h3 className="text-4xl font-black">
                  Cinematic Storytelling
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="px-8 md:px-20 py-40 border-b border-white/10"
      >

        <h2 className="text-5xl md:text-7xl font-black mb-24">
          Producciones
        </h2>

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
                
"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Fotografía Editorial",
              items: [
                "Bodas",
                "XV Años",
                "Luxury Session",
                "Retrato",
              ],
              image:
                
"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Live Streaming",
              items: [
                "Eventos masivos",
                "Multicámara",
                "Cobertura en tiempo real",
                "Audio profesional",
              ],
              image:
                
"https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Experiencias Web",
              items: [
                "Cinematic Experience",
                "Micrositios premium",
                "Galerías visuales",
                "Storytelling digital",
              ],
              image:
                
"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] overflow-hidden relative 
min-h-[500px] group border border-white/10"
            >

              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover 
group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/75"></div>

              <div className="relative z-10 p-10 flex flex-col h-full 
justify-end">

                <h3 className="text-3xl font-black mb-8">
                  {service.title}
                </h3>

                <ul className="space-y-4 text-zinc-300">
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
        className="px-8 md:px-20 py-40 border-b border-white/10"
      >

        <h2 className="text-5xl md:text-7xl font-black mb-24">
          Portafolio
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] h-[420px] bg-cover bg-center 
relative overflow-hidden hover:scale-[1.02] transition duration-500"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-0 left-0 p-8 z-10">

                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* EVENTS */}

      <section
        className="px-8 md:px-20 py-40 border-b border-white/10 
text-center"
      >

        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm 
mb-6">
          Editorial Gallery
        </p>

        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          ¿Estuviste
          <br />
          en un evento?
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl 
mx-auto mt-10">
          Revive la experiencia con galerías editoriales premium 
actualizadas
          en tiempo real.
        </p>

        <a
          href="https://luisalbertovg9.pixieset.com/quinceandrea/"
          target="_blank"
          className="group relative inline-flex items-center 
justify-center overflow-hidden rounded-full px-10 py-5 font-bold 
text-white mt-14 border border-white/20 bg-white/5 backdrop-blur-sm 
hover:scale-105 transition"
        >

          <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/20 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

          <span className="relative z-10">
            Entrar a la Galería
          </span>

        </a>

      </section>

      {/* SOCIAL */}

      <section
        className="px-8 md:px-20 py-40 border-b border-white/10"
      >

        <h2 className="text-5xl md:text-7xl font-black mb-24">
          Redes Sociales
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

          {[
            {
              title: "Instagram",
              link: "https://www.instagram.com/luisalbertovg",
              text: "Reels cinematográficos y retratos editoriales.",
            },
            {
              title: "Facebook",
              link: "https://www.facebook.com/LuisAlbertoVGOficial",
              text: "Cobertura audiovisual y contenido social.",
            },
            {
              title: "Noticias Tepalcingo",
              link: "https://www.facebook.com/Tepalcingo",
              text: "Cobertura institucional y transmisiones.",
            },
            {
              title: "TikTok",
              link: "https://www.tiktok.com/@luisalberto.vg",
              text: "Storytelling y detrás de cámaras.",
            },
            {
              title: "Pixieset",
              link: "https://luisalbertovg9.pixieset.com/quinceandrea/",
              text: "Galerías premium y entregas digitales.",
            },
          ].map((social) => (
            <a
              key={social.title}
              href={social.link}
              target="_blank"
              className="bg-white/5 backdrop-blur-xl border 
border-white/10 rounded-[2rem] p-8 hover:scale-105 transition 
duration-300"
            >

              <h3 className="text-2xl font-black mb-5">
                {social.title}
              </h3>

              <p className="text-zinc-400">
                {social.text}
              </p>

            </a>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="px-8 md:px-20 py-40 text-center"
      >

        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          ¿Tienes una
          <br />
          historia que contar?
        </h2>

        <p className="text-zinc-400 text-xl max-w-3xl mx-auto mt-10 
leading-relaxed">
          Producción audiovisual, livestreaming, narrativa cinematográfica 
y
          experiencias visuales premium para proyectos que buscan 
destacar.
        </p>

        <a
          href="https://wa.me/527351210954"
          target="_blank"
          className="inline-flex items-center gap-4 bg-white text-black 
px-10 py-5 rounded-full font-bold mt-14 hover:scale-105 transition 
duration-300"
        >

          Iniciar Proyecto

        </a>

      </section>

    </main>
  )
}
