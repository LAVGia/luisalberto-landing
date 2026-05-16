"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const audioRef = useRef<HTMLAudioElement>(null)

  const [musicPlaying, setMusicPlaying] = useState(false)

  const [activeIndex, setActiveIndex] = useState(0)

  const [mounted, setMounted] = useState(false)

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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {

    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  // PLAY / PAUSE MUSIC
  const toggleMusic = () => {

    if (!audioRef.current) return

    if (musicPlaying) {

      audioRef.current.pause()
      setMusicPlaying(false)

    } else {

      audioRef.current.play()
      setMusicPlaying(true)

    }
  }

  // PAUSAR MÚSICA SI USAN VIMEO
  const pauseMusicForVideo = () => {

    if (!audioRef.current) return

    audioRef.current.pause()
    setMusicPlaying(false)
  }

  return (
    <main className="bg-[#f6f1ea] text-[#1a1a1a] overflow-hidden">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        src="/audio/music.mp3"
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

            {/* BOTÓN MÚSICA */}
            <button
              onClick={toggleMusic}
              className="px-8 py-4 rounded-full bg-black/20 border 
border-white/20 backdrop-blur hover:scale-105 transition"
            >
              {musicPlaying ? "❚❚ Pausar Música" : "▶ Música"}
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

          {/* COUNTDOWN */}
          {mounted && (

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
                <div className="text-lg 
font-light">{timeLeft.minutes}</div>
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  Min
                </div>
              </div>

              <div className="opacity-40">|</div>

              <div className="text-center">
                <div className="text-lg 
font-light">{timeLeft.seconds}</div>
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  Seg
                </div>
              </div>

            </div>

          )}

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

          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            onClick={pauseMusicForVideo}
          >

            <iframe
              src="https://player.vimeo.com/video/1192713156"
              className="w-full aspect-video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

      </section>

    </main>
  )
}
