"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    Vimeo: any
  }
}

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const audioRef = useRef<HTMLAudioElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [musicPlaying, setMusicPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const gallery = [
    
"https://images.unsplash.com/photo-1523438097201-512ae7d59c7a?q=80&w=1600&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1521337706264-a414f153a5db?q=80&w=1600&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1600&auto=format&fit=crop",
    
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
  ]

  // AUTO SLIDER
  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSlide((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      )

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  // SCROLL
  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  // CALENDAR
  const addToCalendar = () => {

    const event = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20261220T230000Z
DTEND:20261221T050000Z
SUMMARY:Boda Isabella y Daniel
DESCRIPTION:Nos encantará compartir este momento contigo.
LOCATION:Santuario de Tepalcingo
END:VEVENT
END:VCALENDAR
`

    const blob = new Blob(
      [event],
      { type: "text/calendar;charset=utf-8" }
    )

    const url = window.URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.setAttribute("download", "boda-isabella-daniel.ics")

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
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

  // MUSIC
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

  // AUDIO FADE
  const fadeAudio = (target: number) => {

    if (!audioRef.current) return

    const audio = audioRef.current

    const interval = setInterval(() => {

      if (audio.volume > target) {

        audio.volume = Math.max(audio.volume - 0.05, target)

      } else {

        clearInterval(interval)

        if (target === 0) {
          audio.pause()
          setMusicPlaying(false)
        }
      }

    }, 60)
  }

  const restoreAudio = () => {

    if (!audioRef.current) return

    const audio = audioRef.current

    audio.volume = 0

    audio.play()
    setMusicPlaying(true)

    const interval = setInterval(() => {

      if (audio.volume < 1) {

        audio.volume = Math.min(audio.volume + 0.05, 1)

      } else {

        clearInterval(interval)

      }

    }, 60)
  }

  // VIMEO API
  useEffect(() => {

    const script = document.createElement("script")

    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {

      if (!iframeRef.current) return

      const player = new window.Vimeo.Player(iframeRef.current)

      player.on("play", () => {
        fadeAudio(0)
      })

      player.on("pause", () => {
        restoreAudio()
      })

      player.on("ended", () => {
        restoreAudio()
      })

    }

  }, [])

  return (
    <main className="bg-[#f6f1ea] text-[#1a1a1a] overflow-hidden">

      {/* LIGHTBOX */}
      {lightbox && (

        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center 
justify-center p-6"
          onClick={() => setLightbox(null)}
        >

          <img
            src={lightbox}
            className="max-w-full max-h-full rounded-3xl shadow-2xl"
          />

        </div>

      )}

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        src="/audio/music.mp3"
      />

      {/* FLOAT BUTTONS */}
      {showTop && (

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

          <button
            onClick={toggleMusic}
            className="w-14 h-14 rounded-full bg-black/70 text-white 
backdrop-blur border border-white/20 hover:scale-110 animate-pulse 
transition"
          >
            {musicPlaying ? "♫" : "▶"}
          </button>

          <button
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}
            className="w-14 h-14 rounded-full bg-white/80 backdrop-blur 
border hover:scale-110 animate-pulse transition"
          >
            ↑
          </button>

        </div>

      )}

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        {/* GLOW PARTICLES */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">

          <div className="absolute top-20 left-20 w-64 h-64 bg-white 
rounded-full blur-3xl animate-pulse" />

          <div className="absolute bottom-20 right-20 w-72 h-72 
bg-[#d4af37] rounded-full blur-3xl animate-pulse" />

          <div className="absolute top-1/2 left-1/2 w-96 h-96 
bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse" />

        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover 
scale-105"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex flex-col items-center 
justify-center text-center text-white px-6">

          <p className="tracking-[0.5em] uppercase text-white/70 mb-6 
animate-pulse">
            Enlace Matrimonial
          </p>

          <h1 className="text-5xl md:text-8xl font-light mb-4 
drop-shadow-2xl">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h1>

          <div className="w-40 h-[1px] bg-gradient-to-r from-transparent 
via-white to-transparent mb-10" />

          <div className="flex gap-4 mt-6 flex-wrap justify-center">

            <button
              onClick={() => scrollTo(heroRef)}
              className="group relative overflow-hidden px-10 py-4 
rounded-full bg-white/10 border border-white/30 backdrop-blur 
hover:scale-105 animate-[pulse_4s_infinite] transition"
            >

              <span className="relative z-10">
                Abrir Invitación
              </span>

              <div className="absolute inset-0 -translate-x-full 
group-hover:translate-x-full transition duration-1000 bg-gradient-to-r 
from-transparent via-white/30 to-transparent" />

            </button>

            <button
              onClick={toggleMusic}
              className="group relative overflow-hidden px-8 py-4 
rounded-full bg-black/20 border border-white/20 backdrop-blur 
hover:scale-105 animate-[pulse_5s_infinite] transition"
            >

              <span className="relative z-10">
                {musicPlaying ? "❚❚ Pausar Música" : "▶ Música"}
              </span>

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
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              
"url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" 
/>

        <div className="relative z-10 w-full pb-16 px-6 text-center">

          <h2 className="text-5xl md:text-7xl font-light mb-6">
            Nuestra Boda
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 mb-10 text-lg">
            Acompáñanos a celebrar el inicio de nuestra nueva historia.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-8">

            <button
              onClick={() => scrollTo(detailsRef)}
              className="group relative overflow-hidden px-8 py-4 
rounded-full bg-white/10 border border-white/30 backdrop-blur 
hover:scale-105 animate-[pulse_6s_infinite] transition"
            >
              <span className="relative z-10">
                Detalles
              </span>
            </button>

            <button
              onClick={() => scrollTo(rsvpRef)}
              className="group relative overflow-hidden px-8 py-4 
rounded-full bg-white/10 border border-white/30 backdrop-blur 
hover:scale-105 animate-[pulse_7s_infinite] transition"
            >
              <span className="relative z-10">
                RSVP
              </span>
            </button>

          </div>

          {mounted && (

            <div className="inline-flex gap-3 px-5 py-3 rounded-2xl 
bg-black/25 border border-white/20 backdrop-blur text-white text-sm 
flex-wrap justify-center shadow-2xl">

              <div className="text-center">
                <div className="text-lg font-light">
                  {timeLeft.days}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  Días
                </div>
              </div>

              <div className="opacity-40">|</div>

              <div className="text-center">
                <div className="text-lg font-light">
                  {timeLeft.hours}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  Horas
                </div>
              </div>

              <div className="opacity-40">|</div>

              <div className="text-center">
                <div className="text-lg font-light">
                  {timeLeft.minutes}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  Min
                </div>
              </div>

              <div className="opacity-40">|</div>

              <div className="text-center">
                <div className="text-lg font-light">
                  {timeLeft.seconds}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em]">
                  Seg
                </div>
              </div>

            </div>

          )}

        </div>

      </section>

      {/* HISTORIA */}
      <section className="py-28 bg-gradient-to-b from-[#f3ece2] 
to-[#efe5d8]">

        <div className="max-w-5xl mx-auto px-6 text-center mb-14">

          <h2 className="text-5xl font-light mb-4">
            Nuestra Historia
          </h2>

          <div className="w-32 h-[1px] mx-auto bg-gradient-to-r 
from-transparent via-[#d4af37] to-transparent" />

        </div>

        {/* VIMEO */}
        <div className="max-w-5xl mx-auto px-6 mb-12">

          <div className="rounded-3xl overflow-hidden shadow-2xl 
hover:scale-[1.01] transition duration-700">

            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1192743985"
              className="w-full aspect-video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>

        {/* PREMIUM SLIDER */}
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative h-[500px] rounded-3xl overflow-hidden 
shadow-2xl">

            {gallery.map((img, i) => (

              <div
                key={i}
                onClick={() => setLightbox(img)}
                className="absolute inset-0 transition-all duration-1000 
cursor-pointer"
                style={{
                  opacity: i === activeSlide ? 1 : 0,
                  transform:
                    i === activeSlide
                      ? "scale(1)"
                      : "scale(1.05)"
                }}
              >

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img})`
                  }}
                />

                <div className="absolute inset-0 bg-black/20" />

              </div>

            ))}

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">

            {gallery.map((_, i) => (

              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full transition ${
                  activeSlide === i
                    ? "bg-[#d4af37] scale-125"
                    : "bg-black/20"
                }`}
              />

            ))}

          </div>

        </div>

      </section>

      {/* DETAILS */}
      <section
        ref={detailsRef}
        className="relative py-28 px-6 bg-[#efe6db] overflow-hidden"
      >

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              
"url('https://www.transparenttextures.com/patterns/white-diamond.png')"
          }}
        />

        <div className="relative z-10">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-light mb-4">
              Detalles del Evento
            </h2>

            <div className="w-32 h-[1px] mx-auto bg-gradient-to-r 
from-transparent via-[#d4af37] to-transparent" />

          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            <a
              href="https://maps.app.goo.gl/pU5zycxGosdKi9MJA"
              target="_blank"
              className="group p-10 rounded-3xl bg-white/70 backdrop-blur 
border hover:scale-[1.02] animate-[pulse_8s_infinite] transition 
duration-500 shadow-xl"
            >

              <div className="text-4xl mb-4">
                ⛪
              </div>

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
              className="group p-10 rounded-3xl bg-white/70 backdrop-blur 
border hover:scale-[1.02] animate-[pulse_9s_infinite] transition 
duration-500 shadow-xl"
            >

              <div className="text-4xl mb-4">
                🍾
              </div>

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
        className="relative py-40 text-center text-white overflow-hidden"
      >

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
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
            className="group relative overflow-hidden px-10 py-4 
rounded-full bg-white/10 border border-white/30 backdrop-blur 
hover:scale-105 animate-[pulse_7s_infinite] transition inline-block"
          >

            <span className="relative z-10">
              Confirmar
            </span>

          </a>

          <div className="mt-8">

            <button
              onClick={addToCalendar}
              className="group relative overflow-hidden px-8 py-3 
rounded-full bg-black/20 border border-white/20 backdrop-blur 
hover:scale-105 animate-[pulse_8s_infinite] transition inline-block"
            >

              <span className="relative z-10">
                📅 Agregar a mi agenda
              </span>

            </button>

          </div>

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
