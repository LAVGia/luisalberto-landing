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
    <main className="bg-[#16131d] text-white overflow-hidden">

      {/* OPENING CINEMATIC */}

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

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex flex-col items-center 
justify-center text-center px-6">

          <p className="uppercase tracking-[0.4em] text-zinc-300 mb-8">
            Invitación Especial
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-tight">
            Isabella
            <span className="mx-4 text-[#c8b6ff]">&</span>
            Daniel
          </h1>

          <p className="mt-10 text-zinc-300 text-xl">
            18 Octubre 2026
          </p>

          <button
            onClick={openInvitation}
            className="group relative overflow-hidden mt-16 border 
border-white/20 bg-white/10 backdrop-blur-sm px-10 py-5 rounded-full 
text-lg hover:scale-105 transition"
          >

            <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/30 to-transparent -translate-x-full 
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

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-zinc-300 mb-8">
            Nuestra Boda
          </p>

          <h2 className="text-6xl md:text-8xl font-light leading-tight">
            Isabella
            <span className="mx-4 text-[#c8b6ff]">&</span>
            Daniel
          </h2>

          <p className="text-zinc-300 text-xl mt-12 leading-relaxed">
            Hay momentos que cambian nuestra historia para siempre.
            Queremos compartir este día contigo.
          </p>

        </div>

      </section>

      {/* COUNTDOWN */}

      <section className="py-32 px-8 text-center border-t border-white/10 
border-b border-white/10">

        <p className="uppercase tracking-[0.3em] text-zinc-400 mb-8">
          Cuenta Regresiva
        </p>

        <div className="flex justify-center gap-10 flex-wrap">

          {["120 Días", "08 Horas", "24 Min", "12 Seg"].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 
backdrop-blur-sm rounded-3xl px-10 py-8 min-w-[150px]"
            >
              <h3 className="text-3xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* EVENT DETAILS */}

      <section className="py-32 px-8 md:px-20">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-[40px] 
p-12 backdrop-blur-sm">

            <p className="uppercase tracking-[0.3em] text-zinc-400 mb-6">
              Ceremonia
            </p>

            <h3 className="text-4xl font-light mb-8">
              Hacienda Santa Lucía
            </h3>

            <p className="text-zinc-300 text-lg leading-relaxed">
              18 Octubre 2026
              <br />
              5:00 PM
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] 
p-12 backdrop-blur-sm">

            <p className="uppercase tracking-[0.3em] text-zinc-400 mb-6">
              Recepción
            </p>

            <h3 className="text-4xl font-light mb-8">
              Jardines Bellavista
            </h3>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Cena · Música · Celebración
            </p>

          </div>

        </div>

      </section>

      {/* DRESS CODE */}

      <section className="py-32 px-8 text-center border-t border-white/10 
border-b border-white/10">

        <p className="uppercase tracking-[0.3em] text-zinc-400 mb-8">
          Dress Code
        </p>

        <h2 className="text-5xl font-light">
          Formal Elegante
        </h2>

        <p className="text-zinc-400 text-xl mt-10">
          Tonos neutros y colores suaves recomendados.
        </p>

      </section>

      {/* GALLERY */}

      <section className="py-32 px-8 md:px-20">

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

      <section className="py-40 px-8 text-center">

        <h2 className="text-6xl font-light">
          Confirma tu asistencia
        </h2>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mt-10 
leading-relaxed">
          Será un honor compartir este momento contigo.
        </p>

        <a
          href="https://wa.me/527351210954"
          target="_blank"
          className="group relative overflow-hidden inline-flex 
items-center gap-3 mt-16 border border-green-500/30 bg-green-500/10 px-10 
py-5 rounded-full text-lg hover:scale-105 transition"
        >

          <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/20 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>

          <span className="relative z-10 text-green-400">
            ◉
          </span>

          <span className="relative z-10">
            Confirmar por WhatsApp
          </span>

        </a>

      </section>

    </main>
  )
}
