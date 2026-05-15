"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const gallery = [
    
"https://images.unsplash.com/photo-1523438097201-512ae7d59c7a?q=80&w=1600&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1521337706264-a414f153a5db?q=80&w=1600&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1600&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((p) => (p + 1) % gallery.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-[#f6f1ea] text-[#1a1a1a]">

      {/* 1. HERO VIDEO */}
      <section className="relative h-screen">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex flex-col items-center 
justify-center text-white text-center px-6">

          <p className="tracking-[0.4em] uppercase text-white/70 mb-6">
            Enlace Matrimonial
          </p>

          <h1 className="text-5xl md:text-7xl font-light">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h1>

          <button
            onClick={() => scrollTo(heroRef)}
            className="mt-10 px-10 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur hover:scale-105 transition"
          >
            Abrir Invitación
          </button>

        </div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL (FOTO NOVIOS - DETALLES/RSVP) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end 
text-white"
      >

        {/* FONDO NOVIOS (CORRECTO) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1523438097201-512ae7d59c7a?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full pb-16 px-6 text-center">

          <div className="flex justify-center gap-4 mb-6 flex-wrap">

            <button
              onClick={() => scrollTo(detailsRef)}
              className="px-8 py-3 bg-white/10 border border-white/30 
backdrop-blur rounded-full"
            >
              Detalles
            </button>

            <button
              onClick={() => scrollTo(rsvpRef)}
              className="px-8 py-3 bg-white/10 border border-white/30 
backdrop-blur rounded-full"
            >
              RSVP
            </button>

          </div>

        </div>
      </section>

      {/* 3. DETALLES */}
      <section ref={detailsRef} className="py-24 px-6 bg-[#efe6db]">

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <a
            href="https://maps.app.goo.gl/pU5zycxGosdKi9MJA"
            target="_blank"
            className="p-10 rounded-3xl bg-white/70 backdrop-blur border 
hover:scale-[1.02] transition"
          >
            ⛪ Ceremonia<br />
            Santuario de Tepalcingo<br />
            5:00 PM
          </a>

          <a
            href="https://maps.app.goo.gl/bti7LF96Bd9bhAzZ9"
            target="_blank"
            className="p-10 rounded-3xl bg-white/70 backdrop-blur border 
hover:scale-[1.02] transition"
          >
            🍾 Recepción<br />
            Jardín Anrubio<br />
            6:00 PM
          </a>

        </div>
      </section>

      {/* 4. HISTORIA */}
      <section className="py-24 bg-[#f3ece2]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative h-[400px] rounded-3xl overflow-hidden">

            {gallery.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity 
duration-1000"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: i === activeIndex ? 1 : 0
                }}
              />
            ))}

          </div>

        </div>

      </section>

      {/* 5. CONFIRMA ASISTENCIA (FONDO CORREGIDO) */}
      <section ref={rsvpRef} className="relative py-40 text-center 
text-white">

        {/* FONDO JARDÍN BANQUETE (CORRECTO) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">

          <h2 className="text-5xl mb-8">Confirma tu asistencia</h2>

          <a
            
href="https://docs.google.com/forms/d/e/1FAIpQLSfV3q6yrUp8BhuTixLz4c7aXIvrpEFWUkypn4sYBjp3tythSQ/viewform?usp=header"
            className="px-10 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur inline-block hover:scale-105 transition"
          >
            Confirmar
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#e7dccd]">
        Diseñada por LuisAlbertoVG
      </footer>

    </main>
  )
}
