export const metadata = {
  title: "LuisAlbertoVG",
}

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
      
"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
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
      
"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
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
      
"https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
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
      
"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
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
    text: "Cobertura de eventos masivos y contenido regional positivo.",
  },
  {
    title: "Noticias Tepalcingo",
    link: "https://www.facebook.com/Tepalcingo",
    text: "Noticias culturales y sociales de Tepalcingo.",
  },
  {
    title: "TikTok",
    link: "https://www.tiktok.com/@luisalberto.vg",
    text: "Behind the scenes y narrativa visual cinematográfica.",
  },
]

export default function Home() {
  return (
    <main className="bg-[#f5f1fb] text-[#1a1324] overflow-x-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-full h-full 
bg-gradient-to-b from-[#f5f1fb] via-[#efe7fb] to-[#f8f5ff]" />

        <div className="absolute top-[-10%] right-[-10%] w-[500px] 
h-[500px] bg-[#cdb8ff]/30 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] 
h-[400px] bg-[#e4d7ff]/40 rounded-full blur-[100px]" />

      </div>

      {/* HERO */}

      <section className="min-h-screen flex items-center px-8 md:px-20 
relative">

        <div className="max-w-6xl">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] text-sm 
mb-8">
            Productor Audiovisual
          </p>

          <h1 className="text-6xl md:text-[8rem] xl:text-[10rem] 
font-black leading-[0.85] tracking-[-0.08em]">

            Luis Alberto
            <br />

            <span className="text-[#9f7dff]">
              VG
            </span>

          </h1>

          <p className="text-[#5d4f77] text-xl md:text-2xl max-w-3xl mt-12 
leading-relaxed font-light">
            Producción audiovisual, fotografía, livestreaming y 
storytelling visual para eventos, marcas e historias reales.
          </p>

          <div className="flex flex-wrap gap-4 mt-14">

            <a
              href="#luxury"
              className="bg-[#9f7dff] text-white px-8 py-4 rounded-full 
font-medium hover:opacity-90 transition"
            >
              Luxury Experience
            </a>

            <a
              href="#services"
              className="bg-white/70 border border-white px-8 py-4 
rounded-full hover:bg-white transition"
            >
              Servicios
            </a>

            <a
              href="#gallery"
              className="bg-white/70 border border-white px-8 py-4 
rounded-full hover:bg-white transition"
            >
              Tu Foto
            </a>

            <a
              href="#social"
              className="bg-white/70 border border-white px-8 py-4 
rounded-full hover:bg-white transition"
            >
              Redes Sociales
            </a>

          </div>

        </div>

      </section>

      {/* LUXURY */}

      <section
        id="luxury"
        className="px-8 md:px-20 py-40"
      >

        <div className="grid xl:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[0.5em] text-[#6f5f8e] 
text-sm mb-6">
              Luxury Event Experience
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

              Una experiencia
              <br />

              visual premium
              <br />

              dentro de tu evento.

            </h2>

            <div className="mt-12 space-y-4 text-[#5d4f77] text-lg 
leading-relaxed font-light">

              <p>• Producción visual previa a tu evento</p>

              <p>• Video y sesión fotográfica para tu invitación</p>

              <p>• Invitación web premium personalizada</p>

              <p>• Historia visual con fotos y video cinematográfico</p>

              <p>• Sesión luxury para tus invitados</p>

              <p>• Galería online en tiempo real</p>

              <p>• Contenido shareable al momento</p>

              <p>• Impresiones premium</p>

            </div>

            <div className="mt-14 border-l border-[#cdb8ff] pl-6">

              <h3 className="text-3xl md:text-5xl font-black leading-tight 
tracking-[-0.06em]">

                Tu evento termina.
                <br />

                <span className="text-[#9f7dff]">
                  Tus recuerdos ya están listos.
                </span>

              </h3>

            </div>

            <div className="flex flex-wrap gap-4 mt-14">

              <a
                href="https://luisalberto.vg/invitacion"
                target="_blank"
                className="bg-[#9f7dff] text-white px-8 py-4 rounded-full 
font-medium hover:opacity-90 transition"
              >
                Invitación Web
              </a>

              <a
                href="https://luisalbertovg9.pixieset.com/"
                target="_blank"
                className="bg-white/70 border border-white px-8 py-4 
rounded-full hover:bg-white transition"
              >
                Galería
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="rounded-[3rem] overflow-hidden border 
border-white bg-white/40 shadow-xl">

              <img
                
src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop&sat=-100"
                className="w-full h-[700px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="px-8 md:px-20 py-40"
      >

        <div className="max-w-5xl mb-20">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] text-sm 
mb-6">
            Servicios
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            Producción visual
            <br />

            para experiencias modernas.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-[3rem] overflow-hidden 
min-h-[520px] border border-white bg-white/30"
            >

              <img
                src={service.image}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 p-8 flex flex-col justify-end 
h-full">

                <h3 className="text-3xl text-white font-black mb-6 
tracking-[-0.05em]">
                  {service.title}
                </h3>

                <ul className="space-y-3 text-white/80">

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

      {/* GALLERY */}

      <section
        id="gallery"
        className="px-8 md:px-20 py-40"
      >

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] text-sm 
mb-6">
            Online Gallery
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            ¿Estuviste
            <br />

            en un evento?

          </h2>

          <p className="text-[#5d4f77] text-xl md:text-2xl max-w-3xl mt-12 
leading-relaxed font-light">

            Encuentra tus fotografías y galerías premium de eventos 
sociales, conciertos y experiencias luxury.

          </p>

          <div className="mt-14">

            <a
              href="https://luisalbertovg9.pixieset.com/"
              target="_blank"
              className="inline-block bg-[#9f7dff] text-white px-8 py-4 
rounded-full font-medium hover:opacity-90 transition"
            >
              Buscar Fotos
            </a>

          </div>

        </div>

      </section>

      {/* SOCIAL */}

      <section
        id="social"
        className="px-8 md:px-20 py-40"
      >

        <div className="max-w-5xl mb-20">

          <p className="uppercase tracking-[0.5em] text-[#6f5f8e] text-sm 
mb-6">
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
              className="rounded-[3rem] bg-white/60 border border-white 
p-8 hover:bg-white transition"
            >

              <h3 className="text-2xl font-black mb-4 tracking-[-0.05em]">
                {social.title}
              </h3>

              <p className="text-[#5d4f77] leading-relaxed">
                {social.text}
              </p>

            </a>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section className="px-8 md:px-20 py-40 text-center">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-black leading-[0.92] 
tracking-[-0.08em]">

            ¿Tienes una
            <br />

            historia que contar?

          </h2>

          <p className="text-[#5d4f77] text-xl md:text-2xl max-w-3xl 
mx-auto mt-12 leading-relaxed font-light">

            Producción audiovisual, livestreaming, fotografía y 
experiencias visuales premium.

          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-14">

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="bg-[#9f7dff] text-white px-8 py-4 rounded-full 
font-medium hover:opacity-90 transition"
            >
              Iniciar Proyecto
            </a>

            <a
              href="/LuisAlbertoVG.vcf"
              className="bg-white/70 border border-white px-8 py-4 
rounded-full hover:bg-white transition"
            >
              Guardar Contacto
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}
