"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const audioRef = useRef<HTMLAudioElement>(null)

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
    ref.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  // COUNTDOWN
  const weddingDate = new Date("2026-12-20T17:00:00").getTime()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = weddingDate - now

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const playMusic = () => {
    audioRef.current?.play()
  }

  return (
    <main className="bg-[#f6f1ea] text-[#1a1a1a] overflow-hidden">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        
src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=wedding-background-piano-110624.mp3"
      />

      {/* HERO VIDEO */}
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

          <h1 className="text-5xl md:text-8xl font-light">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h1>

          <div className="flex gap-4 mt-10 flex-wrap justify-center">

            <button
              onClick={() => scrollTo(heroRef)}
              className="px-10 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur hover:scale-105 transition"
            >
              Abrir Invitación
            </button>

            {/* PLAY MÚSICA */}
            <button
              onClick={playMusic}
              className="px-8 py-4 rounded-full bg-black/20 border 
border-white/20 backdrop-blur hover:scale-105 transition"
            >
              ♪ Música
            </button>

          </div>

        </div>
      </section>

      {/* HERO NOVIOS */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end 
text-white"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 w-full pb-16 px-6 text-center">

          <h2 className="text-5xl md:text-7xl font-light mb-6">
            Nuestra Boda
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 mb-10 text-lg">
            Acompáñanos a celebrar el inicio de nuestra nueva historia.
          </p>

          {/* BOTONES */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">

            <button
              onClick={() => scrollTo(detailsRef)}
              className="px-8 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur hover:scale-105 transition"
            >
              Detalles
            </button>

            <button
              onClick={() => scrollTo(rsvpRef)}
              className="px-8 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur hover:scale-105 transition"
            >
              RSVP
            </button>

          </div>

          {/* COUNTDOWN REDUCIDO */}
          <div className="inline-flex gap-3 px-5 py-3 rounded-2xl 
bg-black/25 border border-white/20 backdrop-blur text-white text-sm 
flex-wrap justify-center">

            <div className="text-center">
              <div className="text-lg font-light">{timeLeft.days}</div>
              <div className="text-[10px] uppercase tracking-[0.2em]">
                Días
              </div>
            </div>

            <div className="opacity-40">|</div>

            <div className="text-center">
              <div className="text-lg font-light">{timeLeft.hours}</div>
              <div className="text-[10px] uppercase tracking-[0.2em]">
                Horas
              </div>
            </div>

            <div className="opacity-40">|</div>

            <div className="text-center">
              <div className="text-lg font-light">{timeLeft.minutes}</div>
              <div className="text-[10px] uppercase tracking-[0.2em]">
                Min
              </div>
            </div>

            <div className="opacity-40">|</div>

            <div className="text-center">
              <div className="text-lg font-light">{timeLeft.seconds}</div>
              <div className="text-[10px] uppercase tracking-[0.2em]">
                Seg
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section
        ref={historyRef}
        className="py-28 bg-[#f3ece2]"
      >

        <div className="max-w-5xl mx-auto px-6 text-center mb-14">

          <h2 className="text-5xl font-light">
            Nuestra Historia
          </h2>

        </div>

        {/* VIMEO */}
        <div className="max-w-5xl mx-auto px-6 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              src="https://player.vimeo.com/video/1192713156"
              className="w-full aspect-video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

        {/* CARRUSEL */}
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative h-[450px] rounded-3xl overflow-hidden 
shadow-2xl">

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

      {/* DETALLES */}
      <section
        ref={detailsRef}
        className="relative py-28 px-6 bg-[#efe6db] overflow-hidden"
      >

        {/* TEXTURA */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              
"url('https://www.transparenttextures.com/patterns/white-diamond.png')"
          }}
        />

        <div className="relative z-10">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-light">
              Detalles del Evento
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            <a
              href="https://maps.app.goo.gl/pU5zycxGosdKi9MJA"
              target="_blank"
              className="p-10 rounded-3xl bg-white/70 backdrop-blur border 
hover:scale-[1.02] transition"
            >

              <div className="text-4xl mb-4">⛪</div>

              <h3 className="text-2xl mb-2">
                Ceremonia
              </h3>

              <p className="text-lg">
                Santuario de Tepalcingo
              </p>

              <p className="text-sm text-gray-600 mt-4">
                20 Diciembre 2026
              </p>

              <p className="text-sm text-gray-600">
                5:00 PM
              </p>

            </a>

            <a
              href="https://maps.app.goo.gl/bti7LF96Bd9bhAzZ9"
              target="_blank"
              className="p-10 rounded-3xl bg-white/70 backdrop-blur border 
hover:scale-[1.02] transition"
            >

              <div className="text-4xl mb-4">🍾</div>

              <h3 className="text-2xl mb-2">
                Recepción
              </h3>

              <p className="text-lg">
                Jardín Anrubio
              </p>

              <p className="text-sm text-gray-600 mt-4">
                20 Diciembre 2026
              </p>

              <p className="text-sm text-gray-600">
                6:00 PM
              </p>

            </a>

          </div>

        </div>
      </section>

      {/* RSVP */}
      <section
        ref={rsvpRef}
        className="relative py-40 text-center text-white"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10">

          <h2 className="text-5xl mb-8">
            Confirma tu asistencia
          </h2>

          <a
            
href="https://docs.google.com/forms/d/e/1FAIpQLSfV3q6yrUp8BhuTixLz4c7aXIvrpEFWUkypn4sYBjp3tythSQ/viewform?usp=header"
            className="px-10 py-4 rounded-full bg-white/10 border 
border-white/30 backdrop-blur hover:scale-105 transition inline-block"
          >
            Confirmar
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-[#e7dccd]">

        <a
          href="https://luisalberto.vg"
          target="_blank"
          className="hover:opacity-70 transition"
        >
          Diseñada por LuisAlbertoVG
        </a>

      </footer>

    </main>
  )
}
