"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
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
      setActiveIndex((prev) => (prev + 1) % gallery.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-[#f7f2ea] text-[#1a1a1a] overflow-hidden">

      {/* HERO VIDEO INTRO */}
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

        <div className="relative z-10 h-full flex flex-col justify-center 
items-center text-center px-6">

          <p className="tracking-[0.4em] text-white/70 uppercase text-sm 
mb-6">
            Enlace Matrimonial
          </p>

          <h1 className="text-white text-5xl md:text-8xl font-light">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h1>

          <button
            onClick={() => scrollTo(heroRef)}
            className="mt-12 relative overflow-hidden px-10 py-5 
rounded-full border border-white/30 bg-white/10 backdrop-blur text-white 
group"
          >
            <span className="absolute inset-0 bg-gradient-to-r 
from-transparent via-white/40 to-transparent -translate-x-full 
group-hover:translate-x-full transition duration-1000"></span>
            <span className="relative">Abrir Invitación</span>
          </button>

        </div>
      </section>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex 
items-center justify-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gallery[0]})` }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-6">

          <h2 className="text-5xl md:text-7xl font-light">
            Nuestra Boda
          </h2>

          <div className="flex gap-4 justify-center mt-10 flex-wrap">

            <button className="px-8 py-3 rounded-full bg-white/10 
backdrop-blur border border-white/20">
              Detalles
            </button>

            <button className="px-8 py-3 rounded-full bg-white/10 
backdrop-blur border border-white/20">
              RSVP
            </button>

            <button className="px-8 py-3 rounded-full bg-white/10 
backdrop-blur border border-white/20">
              Historia
            </button>

          </div>

        </div>
      </section>

      {/* COUNTDOWN SUTIL */}
      <div className="flex justify-center -mt-16 mb-10">
        <div className="bg-white/10 backdrop-blur border border-white/20 
px-8 py-4 rounded-full flex gap-8 text-white text-sm">
          <span>120 Días</span>
          <span>08 Hrs</span>
          <span>24 Min</span>
          <span>12 Seg</span>
        </div>
      </div>

      {/* VIMEO SECTION */}
      <section className="px-6 py-20 bg-[#f3ece2]">

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden 
shadow-xl">

          <iframe
            
src="https://player.vimeo.com/video/1192713156?h=0&autoplay=0&muted=0"
            className="w-full aspect-video"
            allow="autoplay; fullscreen; picture-in-picture"
          />

        </div>

      </section>

      {/* DETAILS */}
      <section ref={detailsRef} className="py-24 px-6 bg-[#efe7db]">

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <a className="p-10 rounded-3xl bg-white/60 backdrop-blur border 
border-black/5">
            <h3 className="text-2xl mb-3">Ceremonia</h3>
            <p>Hacienda Santa Lucía</p>
          </a>

          <a className="p-10 rounded-3xl bg-white/60 backdrop-blur border 
border-black/5">
            <h3 className="text-2xl mb-3">Recepción</h3>
            <p>Jardines Bellavista</p>
          </a>

        </div>

      </section>

      {/* HISTORIA CARRUSEL */}
      <section ref={historyRef} className="py-28 bg-[#f7f2ea] 
text-center">

        <h2 className="text-4xl mb-10">Nuestra Historia</h2>

        <div className="relative max-w-4xl mx-auto h-[450px] rounded-3xl 
overflow-hidden">

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

      </section>

      {/* RSVP */}
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
border-white/30 backdrop-blur inline-block hover:scale-105 transition"
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
