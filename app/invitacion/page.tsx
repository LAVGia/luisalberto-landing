"use client"

import { useRef } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const galleryImages = [
    
"https://images.unsplash.com/photo-1523438097201-512ae7d59c7a?q=80&w=1200&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1521337706264-a414f153a5db?q=80&w=1200&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1200&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
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
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 h-full flex flex-col items-center 
justify-center text-center px-6">

          <p className="uppercase tracking-[0.4em] text-white/70 mb-8 
text-sm">
            Enlace Matrimonial
          </p>

          <h1 className="text-5xl md:text-8xl font-light text-white 
leading-tight break-words">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
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
            <span className="relative z-10">Abrir Invitación</span>
          </button>

        </div>
      </section>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center 
px-8 py-32 bg-[#f8f4ee]"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1523438097201-512ae7d59c7a?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-white/70 mb-8 
text-sm">
            Nuestra Boda
          </p>

          <h2 className="text-5xl md:text-8xl font-light text-white 
leading-tight">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h2>

          <p className="text-white/80 text-lg md:text-xl mt-10">
            Queremos compartir contigo el día más importante de nuestras 
vidas.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            <button className="px-8 py-4 rounded-full bg-white/10 border 
border-white/30 text-white backdrop-blur">
              Detalles
            </button>

            <button className="px-8 py-4 rounded-full bg-white/10 border 
border-white/30 text-white backdrop-blur">
              RSVP
            </button>

            <button className="px-8 py-4 rounded-full bg-white/10 border 
border-white/30 text-white backdrop-blur">
              Nuestra Historia
            </button>

          </div>

        </div>
      </section>

      {/* COUNTDOWN */}
      <div className="relative -mt-24 px-6 z-20">

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl 
border border-white/10 rounded-full px-6 py-4">

          <div className="flex justify-center gap-10">

            {[
              ["120", "Días"],
              ["08", "Horas"],
              ["24", "Min"],
              ["12", "Seg"],
            ].map((item) => (
              <div key={item[1]} className="text-center">
                <div className="text-xl md:text-2xl text-white 
font-light">
                  {item[0]}
                </div>
                <div className="text-[10px] uppercase tracking-widest 
text-white/60">
                  {item[1]}
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* DETAILS */}
      <section
        ref={detailsRef}
        className="relative py-24 px-8 md:px-20 overflow-hidden"
      >

        <div className="absolute inset-0 bg-[#f1ebe1]" />

        <div className="relative grid md:grid-cols-2 gap-10">

          <a className="bg-white/80 backdrop-blur border rounded-[30px] 
p-10">
            <h3 className="text-2xl mb-4">Ceremonia</h3>
            <p>Hacienda Santa Lucía</p>
          </a>

          <a className="bg-white/80 backdrop-blur border rounded-[30px] 
p-10">
            <h3 className="text-2xl mb-4">Recepción</h3>
            <p>Jardines Bellavista</p>
          </a>

        </div>

      </section>

      {/* HISTORIA */}
      <section
        ref={historyRef}
        className="py-28 px-8 md:px-20 bg-[#f6f1e9]"
      >

        <h2 className="text-4xl text-center mb-14">Nuestra Historia</h2>

        <div className="flex gap-6 overflow-x-auto">

          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="min-w-[300px] h-[400px] rounded-2xl bg-cover 
bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

        </div>

      </section>

      {/* RSVP */}
      <section
        ref={rsvpRef}
        className="relative py-40 text-center px-6"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white">

          <h2 className="text-5xl">Confirma tu asistencia</h2>

          <a
            href="#"
            className="inline-block mt-10 px-10 py-4 border 
border-white/40 rounded-full backdrop-blur bg-white/10"
          >
            Confirmar
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#e8dfd1]">
        Diseñada por LuisAlbertoVG
      </footer>

    </main>
  )
}
