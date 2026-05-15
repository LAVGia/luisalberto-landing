"use client"

import { useRef } from "react"

export default function Invitacion() {

  const invitationRef = useRef<HTMLDivElement>(null)

  const openInvitation = () => {
    invitationRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <main className="bg-[#f8f4ee] text-[#1a1a1a] overflow-hidden">

      {/* OPENING */}

      <section className="relative h-screen w-full overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            
src="https://cdn.coverr.co/videos/coverr-wedding-kiss-1560927352142?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex flex-col items-center 
justify-center text-center px-6">

          <p className="uppercase tracking-[0.4em] text-white/80 mb-8 
text-sm">
            Invitación Especial
          </p>

          <h1 className="text-5xl md:text-8xl font-light leading-tight 
text-white break-words">
            Isabella
            <span className="mx-3 text-[#d4af37]">&</span>
            Daniel
          </h1>

          <p className="mt-10 text-white/80 text-lg md:text-xl">
            18 Octubre 2026
          </p>

          <button
            onClick={openInvitation}
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
        ref={invitationRef}
        className="relative min-h-screen flex items-center justify-center 
px-8 py-32"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#000]/45"></div>

        <div className="relative z-10 text-center max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-white/70 mb-8 
text-sm">
            Nuestra Boda
          </p>

          <h2 className="text-5xl md:text-8xl font-light leading-tight 
text-white break-words">
            Isabella
            <span className="mx-3 text-[#d4af37]">&</span>
            Daniel
          </h2>

          <p className="text-white/80 text-lg md:text-xl mt-12 
leading-relaxed max-w-2xl mx-auto">
            Hay momentos que cambian nuestra historia para siempre.
            Queremos compartir este día contigo.
          </p>

        </div>

      </section>

      {/* COUNTDOWN */}

      <section className="py-28 px-8 text-center">

        <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-8 
text-sm">
          Cuenta Regresiva
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          {["120 Días", "08 Horas", "24 Min", "12 Seg"].map((item) => (
            <div
              key={item}
              className="bg-white border border-[#d8c7a3] rounded-[30px] 
px-10 py-8 min-w-[140px] shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold 
text-[#1a1a1a]">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* EVENT DETAILS */}

      <section className="py-24 px-8 md:px-20">

        <div className="grid md:grid-cols-2 gap-10">

          <a
            href="https://maps.google.com"
            target="_blank"
            className="bg-white border border-[#d8c7a3] rounded-[40px] 
p-12 hover:scale-[1.02] transition shadow-sm"
          >

            <p className="text-4xl mb-6">
              ⛪
            </p>

            <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-6 
text-sm">
              Ceremonia
            </p>

            <h3 className="text-4xl font-light mb-8">
              Hacienda Santa Lucía
            </h3>

            <p className="text-[#555] text-lg leading-relaxed">
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

            <p className="text-4xl mb-6">
              🍾
            </p>

            <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-6 
text-sm">
              Recepción
            </p>

            <h3 className="text-4xl font-light mb-8">
              Jardines Bellavista
            </h3>

            <p className="text-[#555] text-lg leading-relaxed">
              Cena · Música · Celebración
            </p>

          </a>

        </div>

      </section>

      {/* ITINERARIO */}

      <section className="py-28 px-8 md:px-20 bg-[#f1ebe1]">

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-8 
text-center text-sm">
            Itinerario
          </p>

          <h2 className="text-5xl font-light text-center mb-20">
            Programa del Evento
          </h2>

          <div className="space-y-8">

            {[
              ["4:30 PM", "Recepción de invitados", "🥂"],
              ["5:00 PM", "Ceremonia", "⛪"],
              ["7:00 PM", "Cena", "🍽️"],
              ["8:30 PM", "Primer baile", "✨"],
              ["9:00 PM", "Fiesta", "🎶"],
            ].map((item) => (
              <div
                key={item[0]}
                className="bg-white rounded-[30px] border border-[#d8c7a3] 
p-8 flex items-center justify-between shadow-sm"
              >

                <div className="flex items-center gap-6">

                  <div className="text-3xl">
                    {item[2]}
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium">
                      {item[1]}
                    </h3>

                    <p className="text-[#777] mt-2">
                      {item[0]}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DRESS CODE */}

      <section className="py-28 px-8 text-center">

        <p className="uppercase tracking-[0.3em] text-[#9c8b6d] mb-8 
text-sm">
          Dress Code
        </p>

        <h2 className="text-5xl md:text-6xl font-light">
          Formal Elegante
        </h2>

        <p className="text-[#666] text-xl mt-10 max-w-2xl mx-auto 
leading-relaxed">
          Tonos neutros y colores suaves recomendados.
        </p>

      </section>

      {/* GALLERY */}

      <section className="py-28 px-8 md:px-20">

        <h2 className="text-5xl font-light text-center mb-20">
          Nuestra Historia
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
            
"https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
            
"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
          ].map((image) => (
            <div
              key={image}
              className="h-[500px] rounded-[40px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          ))}

        </div>

      </section>

      {/* RSVP */}

      <section className="py-40 px-8 text-center bg-[#f1ebe1]">

        <h2 className="text-5xl md:text-6xl font-light leading-tight">
          Confirma tu asistencia
        </h2>

        <p className="text-[#666] text-xl max-w-2xl mx-auto mt-10 
leading-relaxed">
          Tu presencia hará este momento aún más especial.
        </p>

        <a
          href="https://docs.google.com/spreadsheets/"
          target="_blank"
          className="group relative overflow-hidden inline-flex 
items-center gap-3 mt-16 border border-[#d4af37]/50 bg-white px-10 py-5 
rounded-full text-lg hover:scale-105 transition shadow-sm"
        >

          <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-[#d4af37]/20 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

          <span className="relative z-10 text-[#b38b2d]">
            ✨
          </span>

          <span className="relative z-10">
            Confirmar Asistencia
          </span>

        </a>

      </section>

    </main>
  )
}
