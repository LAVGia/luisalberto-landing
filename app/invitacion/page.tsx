"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const gallery = [
    "https://images.unsplash.com/photo-1523438097201-512ae7d59c7a",
    "https://images.unsplash.com/photo-1521337706264-a414f153a5db",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
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

  // 🧠 FECHA REAL: 20 noviembre 2016 17:00
  const targetDate = new Date("2016-11-20T17:00:00")

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 
0),
        minutes: Math.max(Math.floor((distance / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((distance / 1000) % 60), 0)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-[#f6f1ea] text-[#1a1a1a]">

      {/* 1. VIDEO HERO */}
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
justify-center text-center text-white px-6">

          <p className="tracking-[0.4em] uppercase text-white/70 mb-6">
            Enlace Matrimonial
          </p>

          <h1 className="text-5xl md:text-7xl font-light">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h1>

          {/* BOTÓN RESTAURADO */}
          <button
            onClick={() => scrollTo(heroRef)}
            className="mt-10 px-10 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur hover:scale-105 transition"
          >
            Abrir Invitación
          </button>

        </div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL (FOTO NOVIOS + BOTONES ABAJO) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end 
text-white"
      >

        {/* fondo novios */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1523438097201-512ae7d59c7a?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* contenido inferior */}
        <div className="relative z-10 w-full pb-16 px-6 text-center">

          {/* BOTONES */}
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

          {/* COUNTDOWN (debajo botones) */}
          <div className="inline-flex gap-6 px-6 py-3 bg-black/30 
backdrop-blur rounded-2xl border border-white/10 text-sm">

            <div>{timeLeft.days} D</div>
            <div>{timeLeft.hours} H</div>
            <div>{timeLeft.minutes} M</div>
            <div>{timeLeft.seconds} S</div>

          </div>

        </div>
      </section>

      {/* 3. DETALLES */}
      <section ref={detailsRef} className="py-24 px-6 bg-[#efe6db]">

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div className="p-10 rounded-3xl bg-white/70 border 
backdrop-blur">
            ⛪ Ceremonia<br />
            Santuario de Tepalcingo<br />
            5:00 PM
          </div>

          <div className="p-10 rounded-3xl bg-white/70 border 
backdrop-blur">
            🍾 Recepción<br />
            Jardín Anrubio<br />
            6:00 PM
          </div>

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
                  opacity: i === activeIndex ? 1 : 0
                }}
              />
            ))}

          </div>

        </div>

      </section>

      {/* 5. RSVP */}
      <section ref={rsvpRef} className="relative py-40 text-center 
text-white">

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
border-white/30 backdrop-blur inline-block"
          >
            Confirmar
          </a>

        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-10 text-center bg-[#e7dccd]">
        Diseñada por LuisAlbertoVG
      </footer>

    </main>
  )
}
