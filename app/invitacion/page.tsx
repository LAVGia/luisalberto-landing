"use client"

import { useRef } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const galleryImages = [
    
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
  ]

  return (
    <main className="bg-[#f8f4ee] text-[#1a1a1a] overflow-hidden">

      {/* VIDEO INTRO */}

      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            
src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-kissing-after-their-wedding-24602-large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 h-full flex flex-col items-center 
justify-center text-center px-6">

          <p className="uppercase tracking-[0.4em] text-white/70 mb-8 
text-sm">
            Invitación Especial
          </p>

          <h1 className="text-5xl md:text-8xl font-light text-white 
leading-tight break-words">
            Isabella
            <span className="mx-3 text-[#d4af37]">&</span>
            Daniel
          </h1>

          <button
            onClick={() => scrollToSection(heroRef)}
            className="group relative overflow-hidden mt-16 border 
border-white/30 bg-white/10 backdrop-blur-sm px-10 py-5 rounded-full 
text-white hover:scale-105 transition"
          >

            <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/40 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

            <span className="relative z-10">
              Abrir Invitación
            </span>

          </button>

        </div>

      </section>

      {/* HERO */}

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center 
px-8 py-32 bg-gradient-to-b from-[#f5efe6] to-[#f8f4ee]"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-white/70 mb-8 
text-sm">
            Nuestra Boda
          </p>

          <h2 className="text-5xl md:text-8xl font-light text-white 
leading-tight break-words">
            Isabella
            <span className="mx-3 text-[#d4af37]">&</span>
            Daniel
          </h2>

          <p className="text-white/80 text-lg md:text-xl mt-12 
leading-relaxed max-w-2xl mx-auto">
            Queremos compartir contigo el día más importante de nuestras 
vidas.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <button
              onClick={() => scrollToSection(detailsRef)}
              className="border border-white/30 bg-white/10 
backdrop-blur-sm px-8 py-4 rounded-full text-white hover:bg-white 
hover:text-black transition"
            >
              Detalles
            </button>

            <button
              onClick={() => scrollToSection(rsvpRef)}
              className="border border-white/30 bg-white/10 
backdrop-blur-sm px-8 py-4 rounded-full text-white hover:bg-white 
hover:text-black transition"
            >
              RSVP
            </button>

            <button
              onClick={() => scrollToSection(historyRef)}
              className="border border-white/30 bg-white/10 
backdrop-blur-sm px-8 py-4 rounded-full text-white hover:bg-white 
hover:text-black transition"
            >
              Nuestra Historia
            </button>

          </div>

        </div>

      </section>

      {/* SMALL COUNTDOWN */}

      <div className="relative z-20 -mt-24 px-6">

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl 
border border-white/20 rounded-[40px] px-8 py-6 shadow-2xl">

          <div className="flex justify-center gap-8 flex-wrap">

            {[
              ["120", "Días"],
              ["08", "Horas"],
              ["24", "Min"],
              ["12", "Seg"],
            ].map((item) => (
              <div
                key={item[1]}
                className="text-center"
              >

                <h3 className="text-2xl md:text-4xl font-light 
text-white">
                  {item[0]}
                </h3>

                <p className="text-xs uppercase tracking-[0.2em] 
text-white/70 mt-2">
                  {item[1]}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* DETAILS */}

      <section
        ref={detailsRef}
        className="py-24 px-8 md:px-20 bg-[#f1ebe1]"
      >

        <div className="grid md:grid-cols-2 gap-10">

          <a
            href="https://maps.google.com"
            target="_blank"
            className="bg-white border border-[#d8c7a3] rounded-[40px] 
p-12 hover:scale-[1.02] transition shadow-sm"
          >

            <p className="text-4xl mb-6">⛪</p>

            <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-6 
text-sm">
              Ceremonia
            </p>

            <h3 className="text-4xl font-light mb-8">
              Hacienda Santa Lucía
            </h3>

            <p className="text-[#555] text-lg">
              18 Octubre 2026
              <br />
              5:00 PM
            </p>

          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="bg-white border border-[#d8c7a3] rounded-[40px] 
p-12 hover:scale-[1.02] transition shadow-sm"
          >

            <p className="text-4xl mb-6">🍾</p>

            <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-6 
text-sm">
              Recepción
            </p>

            <h3 className="text-4xl font-light mb-8">
              Jardines Bellavista
            </h3>

            <p className="text-[#555] text-lg">
              Cena · Música · Celebración
            </p>

          </a>

        </div>

      </section>

      {/* HISTORIA */}

      <section
        ref={historyRef}
        className="py-28 px-8 md:px-20 bg-gradient-to-b from-[#efe7db] 
to-[#f8f4ee]"
      >

        <h2 className="text-5xl font-light text-center mb-20">
          Nuestra Historia
        </h2>

        <div className="overflow-x-auto">

          <div className="flex gap-8 w-max pb-4">

            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="w-[320px] h-[520px] md:w-[500px] md:h-[340px] 
rounded-[40px] bg-cover bg-center flex-shrink-0 shadow-xl"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            ))}

          </div>

        </div>

      </section>

      {/* RSVP */}

      <section
        ref={rsvpRef}
        className="py-40 px-8 text-center bg-[#f5efe6]"
      >

        <h2 className="text-5xl md:text-6xl font-light leading-tight">
          Confirma tu asistencia
        </h2>

        <p className="text-[#666] text-xl max-w-2xl mx-auto mt-10 
leading-relaxed">
          Tu presencia hará este momento aún más especial.
        </p>

        <a
          
href="https://docs.google.com/forms/d/e/1FAIpQLSfV3q6yrUp8BhuTixLz4c7aXIvrpEFWUkypn4sYBjp3tythSQ/viewform?usp=header"
          target="_blank"
          className="group relative overflow-hidden inline-flex 
items-center gap-3 mt-16 border border-[#d4af37]/40 bg-white/70 
backdrop-blur-xl px-10 py-5 rounded-full text-lg hover:scale-105 
transition shadow-lg"
        >

          <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/80 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

          <span className="relative z-10 text-[#b38b2d]">
            ✨
          </span>

          <span className="relative z-10">
            Confirmar Asistencia
          </span>

        </a>

      </section>

      {/* FOOTER */}

      <footer className="py-12 text-center bg-[#e9dfcf] border-t 
border-[#d8c7a3]">

        <a
          href="https://luisalberto.vg"
          target="_blank"
          className="text-sm tracking-[0.2em] uppercase text-[#7b6a4f] 
hover:text-black transition"
        >
          Diseñada por LuisAlbertoVG
        </a>

      </footer>

    </main>
  )
}
