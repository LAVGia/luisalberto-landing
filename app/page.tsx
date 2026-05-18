"use client"

import { useState } from "react"

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="bg-[#141210] text-[#F5F2ED] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden">

      {/* HERO */}

      <section className="relative h-screen snap-start overflow-hidden flex items-center justify-center bg-[#141210]">

        <div className="absolute left-[-10%] top-0 w-[40%] h-full bg-[#C6A77D]/[0.08] blur-[180px]" />
        <div className="absolute right-[-10%] top-0 w-[40%] h-full bg-[#8E6F4E]/[0.08] blur-[180px]" />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-3xl scale-110"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-full w-full flex items-center justify-center px-8">

          <div className="relative h-full flex items-center justify-center">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-auto object-contain"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/40 via-transparent to-[#141210]/70" />

          </div>

        </div>

        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 text-center">

          <p className="uppercase tracking-[0.45em] text-[#D2CCC4] text-[11px] md:text-sm">
            Productor Audiovisual
          </p>

        </div>

        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 text-center px-6 w-full">

          <h1 className="text-[2.3rem] md:text-[5.5rem] xl:text-[7rem] font-black leading-[0.9] tracking-[-0.08em] whitespace-nowrap">

            Luis Alberto
            <span className="text-[#C6A77D] ml-3">
              VG
            </span>

          </h1>

          <p className="text-[#D2CCC4] text-sm md:text-lg mt-5 tracking-[0.08em]">
            Narrativa visual para historias que merecen permanecer.
          </p>

        </div>

        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-[#A8A29E] hover:text-[#C6A77D] transition-all duration-700 group"
        >

          <span className="text-3xl group-hover:translate-y-1 transition-transform duration-700">
            ↓
          </span>

          <span className="uppercase tracking-[0.35em] text-xs mt-3">
            Explorar
          </span>

        </a>

      </section>

      {/* MENU */}

      <section
        id="services"
        className="h-screen snap-start flex items-center px-6 md:px-20 bg-[#141210] relative overflow-hidden"
      >

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm mb-8">
            Narrativa Visual
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-[-0.08em] max-w-4xl mb-14">

            No todas las
            <br />
            historias se
            <br />
            cuentan igual.

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-4">

            {[
              ["#", "Portafolio"],
              ["#luxury", "Invitaciones Luxury"],
              ["#weddings", "Bodas y XV Años"],
              ["#documentales", "Documentales y Eventos"],
              ["#gallery", "Encuentra tu Foto"],
              ["#", "Redes Sociales"],
              ["#", "Livestream"],
            ].map(([href, label]) => (

              <a
                key={label}
                href={href}
                className="group flex items-center justify-between border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-5 py-5 rounded-full hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
              >

                <span className="tracking-[0.04em] text-sm">
                  {label}
                </span>

                <span className="opacity-50 group-hover:translate-x-1 transition-transform duration-700">
                  →
                </span>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* LUXURY */}

      <section
        id="luxury"
        className="h-screen snap-start flex items-center px-6 md:px-20 bg-[#141210]"
      >

        <div className="w-full max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-xs mb-6">
            Luxury Experience
          </p>

          <h2 className="text-3xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-[-0.08em] max-w-5xl">

            Una experiencia
            <br />
            diseñada alrededor
            <br />
            de tu historia.

          </h2>

          <p className="text-[#A8A29E] text-sm md:text-lg leading-[1.8] max-w-3xl mt-8">
            Fotografía, narrativa y experiencias digitales para vivir y compartir una boda de una manera única.
          </p>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-12">

            {[
              [
                "Sesión Editorial",
                "Imágenes naturales y cinematográficas antes del gran día.",
                "/images/editorial.png",
              ],
              [
                "Invitación Web",
                "Una experiencia digital personalizada para compartir su historia.",
                "/images/invitacion.png",
              ],
              [
                "Retrato en Vivo",
                "Retratos editoriales creados durante la celebración.",
                "/images/retrato.png",
              ],
              [
                "Galería Instantánea",
                "Fotografías disponibles para compartir prácticamente al momento.",
                "/images/galeria.png",
              ],
            ].map(([title, text, image]) => (

              <button
                key={title}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group text-left rounded-[1.5rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-xl p-5 hover:border-[#C6A77D]/30 transition-all duration-700"
              >

                <h3 className="text-lg md:text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">
                  {title}
                </h3>

                <p className="text-[#A8A29E] text-xs md:text-sm leading-[1.7] mt-4">
                  {text}
                </p>

              </button>

            ))}

          </div>

          <div className="mt-14 text-center">

            <p className="uppercase tracking-[0.35em] text-[#8E8A84] text-[11px] md:text-xs">
              Experiencia Premium · Calidad Editorial · Narrativa Visual
            </p>

            <p className="text-[#F5F2ED] text-xl md:text-3xl font-black tracking-[-0.04em] mt-6">
              Diseñado para permanecer en el tiempo.
            </p>

            <a
              href="https://luisalberto.vg/invitacion"
              className="group inline-flex items-center gap-4 mt-10 border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-8 py-4 rounded-full hover:border-[#C6A77D]/40 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="uppercase tracking-[0.28em] text-xs md:text-sm">
                Explorar experiencia
              </span>

              <span className="group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* BODAS PARTE 1 */}

      <section
        id="weddings"
        className="h-screen snap-start flex items-center px-6 md:px-20 bg-[#141210]"
      >

        <div className="w-full max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-xs mb-8">
            Bodas y XV Años
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-[0.92] tracking-[-0.08em] max-w-5xl">

            Hay momentos
            <br />
            que solo ocurren
            <br />
            una vez.

          </h2>

          <p className="text-[#A8A29E] text-sm md:text-lg leading-[1.8] max-w-3xl mt-10">
            Fotografía y narrativa visual para recuerdos diseñados para permanecer en el tiempo.
          </p>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 mt-20">

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Fotografía
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Imágenes naturales y llenas de emoción.
              </p>

            </div>

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Video
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Películas cinematográficas para recordar tu historia.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BODAS PARTE 2 */}

      <section
        className="h-screen snap-start flex items-center px-6 md:px-20 bg-[#141210]"
      >

        <div className="w-full max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Entrega Digital
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Galerías privadas para compartir tus recuerdos.
              </p>

            </div>

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Cobertura Completa
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Capturamos cada momento de principio a fin.
              </p>

            </div>

          </div>

          <div className="mt-24 text-center">

            <p className="uppercase tracking-[0.35em] text-[#8E8A84] text-[11px] md:text-xs">
              Narrativa Visual · Emoción Real · Recuerdos que Permanecen
            </p>

            <p className="text-[#F5F2ED] text-xl md:text-3xl font-black mt-6">
              La forma de recordar también importa.
            </p>

            <button
              type="button"
              onClick={() => setSelectedImage("/images/bodasyxv.png")}
              className="group inline-flex items-center gap-4 mt-12 border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-8 py-4 rounded-full hover:border-[#C6A77D]/40 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="uppercase tracking-[0.28em] text-xs md:text-sm">
                Ver historia
              </span>

              <span className="group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </button>

          </div>

        </div>

      </section>

      {/* DOCUMENTALES PARTE 1 */}

      <section
        id="documentales"
        className="h-screen snap-start flex items-center px-6 md:px-20 bg-[#141210]"
      >

        <div className="w-full max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-xs mb-8">
            Documentales y Eventos
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-[0.92] tracking-[-0.08em] max-w-5xl">

            Historias reales
            <br />
            contadas desde
            <br />
            la emoción y
            <br />
            la atmósfera.

          </h2>

          <p className="text-[#A8A29E] text-sm md:text-lg leading-[1.8] max-w-4xl mt-10">
            Documental, entrevistas y cobertura cinematográfica para eventos culturales y proyectos con identidad propia.
          </p>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 mt-20">

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Documental
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Historias humanas observadas desde una mirada cinematográfica.
              </p>

            </div>

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Entrevistas
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Conversaciones reales contadas con cercanía y emoción.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* DOCUMENTALES PARTE 2 */}

      <section
        className="h-screen snap-start flex items-center px-6 md:px-20 bg-[#141210]"
      >

        <div className="w-full max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Eventos Masivos
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Cobertura para ferias, festivales y celebraciones culturales.
              </p>

            </div>

            <div>

              <h3 className="text-xl md:text-3xl font-black">
                Narrativa Visual
              </h3>

              <p className="text-[#A8A29E] text-sm md:text-lg mt-4">
                Imagen y video para proyectos con identidad propia.
              </p>

            </div>

          </div>

          <div className="mt-24 text-center">

            <p className="uppercase tracking-[0.35em] text-[#8E8A84] text-[11px] md:text-xs">
              Narrativa Visual · Cultura · Memoria Documental
            </p>

            <p className="text-[#F5F2ED] text-xl md:text-3xl font-black mt-6">
              Algunas historias merecen ser observadas de otra manera.
            </p>

            <button
              type="button"
              onClick={() => setSelectedImage("/images/documentaleseventos.png")}
              className="group inline-flex items-center gap-4 mt-12 border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-8 py-4 rounded-full hover:border-[#C6A77D]/40 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="uppercase tracking-[0.28em] text-xs md:text-sm">
                Ver documental
              </span>

              <span className="group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </button>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="h-screen snap-start flex items-center justify-center px-6 md:px-20 bg-[#141210]"
      >

        <div className="text-center max-w-4xl">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-xs mb-8">
            Encuentra tu historia
          </p>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.92] tracking-[-0.08em]">

            Tus recuerdos
            <br />
            siguen aquí.

          </h2>

          <a
            href="https://luisalbertovg9.pixieset.com/quinceandrea/"
            target="_blank"
            className="inline-flex items-center justify-center mt-14 px-8 py-4 rounded-full border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl text-sm md:text-base tracking-[0.15em] hover:border-[#C6A77D]/40 hover:text-[#C6A77D] transition-all duration-700"
          >

            Buscar Fotografías

          </a>

        </div>

      </section>

      {/* MODAL */}

      {selectedImage && (

        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed top-5 right-5 md:top-8 md:right-8 z-[1000] w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white/80 hover:text-[#C6A77D] text-3xl flex items-center justify-center transition-all duration-500"
          >
            ×
          </button>

          <img
            src={selectedImage}
            className="h-auto max-h-[92vh] w-auto max-w-[92vw] rounded-[1.5rem] object-contain"
          />

        </div>

      )}

    </main>
  )
}