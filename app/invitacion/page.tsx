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
            src="/videos/intro.mp4"
            type="video/mp4"
          />
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
px-8 py-32"
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

      {/* COUNTDOWN */}

      <div className="relative z-20 -mt-32 px-6">

        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-xl 
border border-white/10 rounded-full px-8 py-5 shadow-2xl">

          <div className="flex justify-center gap-10 flex-wrap">

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

                <h3 className="text-xl md:text-2xl font-light text-white">
                  {item[0]}
                </h3>

                <p className="text-[10px] uppercase tracking-[0.2em] 
text-white/60 mt-2">
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
        className="relative py-24 px-8 md:px-20 overflow-hidden"
      >

        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        <div className="absolute inset-0 bg-[#f1ebe1
