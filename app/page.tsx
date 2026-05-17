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

        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 text-center px-6 w-full">

          <h1 className="text-[2.3rem] md:text-[5.5rem] xl:text-[7rem] font-black leading-[0.9] tracking-[-0.08em] whitespace-nowrap">

            Luis Alberto
            <span className="text-[#C6A77D] ml-3">
              VG
            </span>

          </h1>

        </div>

      </section>

      {/* LUXURY EXPERIENCE */}

      <section
        id="luxury"
        className="h-screen snap-start flex items-center px-8 md:px-20 bg-[#141210] relative overflow-hidden"
      >

        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C6A77D]/[0.05] blur-[220px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#8E6F4E]/[0.05] blur-[220px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm mb-8">
              Luxury Experience
            </p>

            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.92] tracking-[-0.08em]">

              Una experiencia
              <br />
              diseñada alrededor
              <br />
              de tu historia.

            </h2>

            <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl mt-10 leading-[1.9] font-light">

              Más que una invitación digital, una propuesta visual que conecta fotografía, narrativa y momentos compartidos en tiempo real.

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

            {/* CARD 1 */}

            <button
              type="button"
              onClick={() =>
                setSelectedImage("/images/editorial.png")
              }
              className="group text-left rounded-[2rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-xl p-8 hover:border-[#C6A77D]/30 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">
                Sesión Editorial
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.9] text-sm">

                Una sesión previa pensada para crear imágenes naturales, elegantes y cinematográficas antes del gran día.

              </p>

            </button>

            {/* CARD 2 */}

            <button
              type="button"
              onClick={() =>
                setSelectedImage("/images/invitacion.png")
              }
              className="group text-left rounded-[2rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-xl p-8 hover:border-[#C6A77D]/30 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">
                Invitación Web
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.9] text-sm">

                Sus fotografías se convierten en una experiencia digital personalizada para compartir su boda de una manera única.

              </p>

            </button>

            {/* CARD 3 */}

            <button
              type="button"
              onClick={() =>
                setSelectedImage("/images/retrato.png")
              }
              className="group text-left rounded-[2rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-xl p-8 hover:border-[#C6A77D]/30 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">
                Retrato en Vivo
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.9] text-sm">

                Durante la celebración, realizamos retratos editoriales con iluminación profesional y dirección visual cinematográfica.

              </p>

            </button>

            {/* CARD 4 */}

            <button
              type="button"
              onClick={() =>
                setSelectedImage("/images/galeria.png")
              }
              className="group text-left rounded-[2rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-xl p-8 hover:border-[#C6A77D]/30 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">
                Galería Instantánea
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.9] text-sm">

                Tus invitados pueden acceder y compartir fotografías del evento prácticamente al momento.

              </p>

            </button>

          </div>

        </div>

      </section>

      {/* MODAL */}

      {selectedImage && (

        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white/70 hover:text-[#C6A77D] text-4xl transition-colors duration-500"
          >
            ×
          </button>

          <img
            src={selectedImage}
            className="h-full max-h-[95vh] w-auto rounded-[2rem] object-contain"
          />

        </div>

      )}

    </main>
  )
}