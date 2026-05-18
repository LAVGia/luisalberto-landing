"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const audioRef = useRef<HTMLAudioElement>(null)
  const storyVideoRef = useRef<HTMLVideoElement>(null)

  const [musicPlaying, setMusicPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const gallery = [
    "/images/isabelladanielsesion1.png",
    "/images/isabelladanielsesion2.png",
    "/images/isabelladanielsesion3.png",
    "/images/isabelladanielsesion4.png"
  ]

  // SLIDER
  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSlide((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [])

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

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

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

  // VIDEO EVENTS
  useEffect(() => {

    const video = storyVideoRef.current

    if (!video) return

    const onPlay = () => {

      if (audioRef.current && musicPlaying) {
        audioRef.current.pause()
      }

      if (document.fullscreenElement == null) {
        video.requestFullscreen?.()
      }
    }

    const onPause = () => {

      if (audioRef.current && musicPlaying) {
        audioRef.current.play()
      }
    }

    const onEnded = () => {

      if (audioRef.current && musicPlaying) {
        audioRef.current.play()
      }
    }

    video.addEventListener("play", onPlay)
    video.addEventListener("pause", onPause)
    video.addEventListener("ended", onEnded)

    return () => {

      video.removeEventListener("play", onPlay)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("ended", onEnded)

    }

  }, [musicPlaying])

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

  return (
    <main className="bg-[#16120d] text-[#f5f2ed] overflow-hidden">

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/527351210954?text=Quiero%20cotizar%20mi%20Luxury%20Experience%20por%20favor."
        target="_blank"
        className="fixed bottom-6 right-6 z-[9999] px-6 py-4 rounded-full border border-[#d4af37]/20 bg-[#1f1912]/80 backdrop-blur-xl text-white text-[11px] uppercase tracking-[0.25em] hover:bg-[#2a2118] hover:scale-105 transition duration-700 shadow-2xl"
      >
        Hagamos la tuya
      </a>

      {/* LIGHTBOX */}
      {lightbox !== null && (

        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/10 transition duration-500 text-xl"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={() =>
              setLightbox(
                lightbox === 0
                  ? gallery.length - 1
                  : lightbox - 1
              )
            }
            className="absolute left-4 md:left-8 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/10 transition duration-500"
          >
            ←
          </button>

          {/* NEXT */}
          <button
            onClick={() =>
              setLightbox(
                lightbox === gallery.length - 1
                  ? 0
                  : lightbox + 1
              )
            }
            className="absolute right-4 md:right-8 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/10 transition duration-500"
          >
            →
          </button>

          {/* IMAGE */}
          <img
            src={gallery[lightbox]}
            className="max-w-[95vw] max-h-[90vh] object-contain"
          />

        </div>

      )}

      {/* INTRO */}
      {showIntro && (

        <section className="fixed inset-0 z-[99999] bg-[#0c0907] flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

          <div className="text-center px-8">

            <button
              onClick={() => setShowIntro(false)}
              className="group flex flex-col items-center"
            >

              <div className="w-32 h-32 rounded-full border border-[#c6a46c]/30 flex items-center justify-center backdrop-blur-sm transition duration-700 group-hover:border-[#d4af37]/60 group-hover:scale-105">

                <div className="w-20 h-20 rounded-full border border-[#c6a46c]/20 flex items-center justify-center">

                  <div className="w-2 h-2 rounded-full bg-[#d4af37]/70 animate-pulse" />

                </div>

              </div>

              <span className="mt-10 tracking-[0.35em] uppercase text-[11px] text-[#d8c5a0] group-hover:text-white transition duration-700">
                Abrir Invitación
              </span>

            </button>

          </div>

        </section>

      )}

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        src="/audio/music.mp3"
      />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#16120d]/20 to-[#16120d]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">

          <p className="tracking-[0.5em] uppercase text-[11px] text-white/50 mb-8">
            Enlace Matrimonial
          </p>

          <h1 className="text-[52px] md:text-[92px] font-extralight leading-none tracking-tight mb-6">
            Isabella <span className="text-[#d4af37]">&</span> Daniel
          </h1>

          <div className="w-24 h-[1px] bg-[#d4af37]/30 mb-10" />

          <p className="text-white/60 text-sm tracking-[0.25em] uppercase">
            20 Diciembre 2026
          </p>

          <div className="mt-16 flex flex-wrap gap-4 justify-center">

            <button
              onClick={() => scrollTo(heroRef)}
              className="px-8 py-4 rounded-full border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition duration-700 text-[12px] uppercase tracking-[0.25em]"
            >
              Explorar
            </button>

            <button
              onClick={toggleMusic}
              className="px-8 py-4 rounded-full border border-[#d4af37]/10 bg-black/20 backdrop-blur-md hover:bg-white/[0.05] transition duration-700 text-[12px] uppercase tracking-[0.25em]"
            >
              {musicPlaying ? "Pausar Música" : "Música"}
            </button>

          </div>

        </div>

      </section>

      {/* MAIN */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end text-white overflow-hidden"
      >

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-8 pb-20">

          <h2 className="text-5xl md:text-7xl font-extralight mb-8">
            Nuestra Boda
          </h2>

          <p className="max-w-xl mx-auto text-white/65 text-sm tracking-wide leading-relaxed mb-14">
            Acompáñanos a compartir este momento.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">

            <button
              onClick={() => scrollTo(detailsRef)}
              className="px-8 py-4 rounded-full border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition duration-700 text-[11px] uppercase tracking-[0.25em]"
            >
              Detalles
            </button>

            <button
              onClick={() => scrollTo(rsvpRef)}
              className="px-8 py-4 rounded-full border border-[#d4af37]/15 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition duration-700 text-[11px] uppercase tracking-[0.25em]"
            >
              RSVP
            </button>

          </div>

          {mounted && (

            <div className="inline-flex gap-4 px-6 py-4 rounded-full border border-[#d4af37]/10 bg-black/25 backdrop-blur-md text-white/80 text-xs tracking-[0.2em] uppercase">

              <span>{timeLeft.days} D</span>
              <span className="opacity-30">/</span>

              <span>{timeLeft.hours} H</span>
              <span className="opacity-30">/</span>

              <span>{timeLeft.minutes} M</span>
              <span className="opacity-30">/</span>

              <span>{timeLeft.seconds} S</span>

            </div>

          )}

        </div>

      </section>

      {/* STORY */}
      <section className="relative py-36 bg-[#1a1510] overflow-hidden">

        <div className="max-w-5xl mx-auto px-6 text-center mb-16">

          <p className="text-[11px] tracking-[0.45em] uppercase text-white/40 mb-6">
            Nuestra Historia
          </p>

          <div className="w-20 h-[1px] bg-[#d4af37]/20 mx-auto" />

        </div>

        {/* VIDEO */}
        <div className="max-w-5xl mx-auto px-6 mb-20">

          <div className="overflow-hidden rounded-[36px] shadow-2xl bg-black">

            <video
              ref={storyVideoRef}
              controls
              playsInline
              className="w-full aspect-video"
            >
              <source
                src="/videos/historiaisabelladaniel.mp4"
                type="video/mp4"
              />
            </video>

          </div>

        </div>

        {/* SLIDER */}
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative rounded-[36px] overflow-hidden bg-black/20">

            <div className="relative w-full h-[70vh] md:h-[720px]">

              {gallery.map((img, i) => (

                <div
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="absolute inset-0 transition-all duration-[2200ms] ease-out cursor-pointer"
                  style={{
                    opacity: i === activeSlide ? 1 : 0,
                    transform:
                      i === activeSlide
                        ? "scale(1)"
                        : "scale(1.04)"
                  }}
                >

                  <img
                    src={img}
                    className="absolute inset-0 w-full h-full object-contain md:object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                </div>

              ))}

            </div>

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">

            {gallery.map((_, i) => (

              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`transition-all duration-700 rounded-full ${
                  activeSlide === i
                    ? "w-10 h-[2px] bg-[#d4af37]"
                    : "w-5 h-[1px] bg-white/20"
                }`}
              />

            ))}

          </div>

        </div>

      </section>

      {/* DETAILS */}
      <section
        ref={detailsRef}
        className="relative py-36 overflow-hidden"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525258946800-98cfd641d0de?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-[#16120d]/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-[11px] tracking-[0.45em] uppercase text-white/40 mb-6">
              Detalles del Evento
            </p>

            <div className="w-20 h-[1px] bg-[#d4af37]/20 mx-auto" />

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <a
              href="https://maps.app.goo.gl/pU5zycxGosdKi9MJA"
              target="_blank"
              className="p-12 rounded-[36px] border border-[#d4af37]/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition duration-700"
            >

              <div className="text-3xl mb-8 opacity-80">
                ⛪
              </div>

              <h3 className="text-3xl font-extralight mb-6">
                Ceremonia
              </h3>

              <p className="text-white/65 mb-8">
                Santuario de Tepalcingo
              </p>

              <div className="text-white/40 text-sm space-y-2">

                <p>20 Diciembre 2026</p>
                <p>5:00 PM</p>

              </div>

            </a>

            <a
              href="https://maps.app.goo.gl/bti7LF96Bd9bhAzZ9"
              target="_blank"
              className="p-12 rounded-[36px] border border-[#d4af37]/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition duration-700"
            >

              <div className="text-3xl mb-8 opacity-80">
                🍾
              </div>

              <h3 className="text-3xl font-extralight mb-6">
                Recepción
              </h3>

              <p className="text-white/65 mb-8">
                Jardín Anrubio
              </p>

              <div className="text-white/40 text-sm space-y-2">

                <p>20 Diciembre 2026</p>
                <p>6:00 PM</p>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* RSVP */}
      <section
        ref={rsvpRef}
        className="relative py-40 overflow-hidden"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop')"
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-8">

          <p className="text-[11px] tracking-[0.45em] uppercase text-white/40 mb-6">
            RSVP
          </p>

          <h2 className="text-5xl md:text-6xl font-extralight mb-10">
            Confirma tu asistencia
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfV3q6yrUp8BhuTixLz4c7aXIvrpEFWUkypn4sYBjp3tythSQ/viewform?usp=header"
              className="px-10 py-4 rounded-full border border-[#d4af37]/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] transition duration-700 text-[11px] uppercase tracking-[0.25em]"
            >
              Confirmar
            </a>

            <button
              onClick={addToCalendar}
              className="px-10 py-4 rounded-full border border-[#d4af37]/10 bg-black/20 backdrop-blur-md hover:bg-white/[0.05] transition duration-700 text-[11px] uppercase tracking-[0.25em]"
            >
              Agendar
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center bg-[#120f0b] border-t border-[#d4af37]/5">

        <a
          href="https://luisalberto.vg"
          target="_blank"
          className="text-white/35 hover:text-white/60 transition duration-700 text-sm tracking-wide"
        >
          Diseñada por LuisAlbertoVG
        </a>

      </footer>

    </main>
  )
}