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

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSlide((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [])

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

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/10 transition duration-500 text-xl"
          >
            ✕
          </button>

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

    </main>
  )
}