"use client"

import { useEffect, useRef, useState } from "react"

export default function Invitacion() {

  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const rsvpRef = useRef<HTMLDivElement>(null)

  const audioRef = useRef<HTMLAudioElement>(null)
  const storyVideoRef = useRef<HTMLVideoElement>(null)

  const [musicPlaying, setMusicPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const musicPausedByVideoRef = useRef(false)

  const gallery = [
    "/images/isabelladanielsesion1.png",
    "/images/isabelladanielsesion2.png",
    "/images/isabelladanielsesion3.png",
    "/images/isabelladanielsesion4.png",
  ]

  const detailItems = [
    {
      title: "Ceremonia",
      place: "Santuario de Tepalcingo",
      date: "20 Diciembre 2026",
      hour: "5:00 PM",
      href: "https://maps.app.goo.gl/pU5zycxGosdKi9MJA",
      image:
        "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Recepción",
      place: "Jardín Anrubio",
      date: "20 Diciembre 2026",
      hour: "6:00 PM",
      href: "https://maps.app.goo.gl/bti7LF96Bd9bhAzZ9",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    },
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
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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
      behavior: "smooth",
      block: "start",
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

      if (musicPlaying && audioRef.current) {

        musicPausedByVideoRef.current = true
        audioRef.current.pause()
        setMusicPlaying(false)

      } else {

        musicPausedByVideoRef.current = false

      }

      if (document.fullscreenElement == null) {
        video.requestFullscreen?.()
      }
    }

    const onPause = () => {

      if (musicPausedByVideoRef.current && audioRef.current) {

        audioRef.current.play()
        setMusicPlaying(true)
        musicPausedByVideoRef.current = false

      }
    }

    const onEnded = () => {

      if (musicPausedByVideoRef.current && audioRef.current) {

        audioRef.current.play()
        setMusicPlaying(true)
        musicPausedByVideoRef.current = false

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
    <main className="relative min-h-screen overflow-hidden bg-[#090705] text-[#f5efe6]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_24%),linear-gradient(to_bottom,#090705,#120d09_45%,#1a130d)]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <a
        href="https://wa.me/527351210954?text=Quiero%20cotizar%20mi%20Luxury%20Experience%20por%20favor."
        target="_blank"
        className="fixed bottom-5 right-5 z-[9999] rounded-full border border-[#d4af37]/20 bg-[#1f1912]/85 px-6 py-4 text-[11px] uppercase tracking-[0.28em] text-white shadow-2xl backdrop-blur-xl transition duration-700 hover:scale-105 hover:bg-[#2a2118]"
      >
        Hagamos la tuya
      </a>

      {lightbox !== null && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/96">

          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/45 text-xl text-white/80 backdrop-blur-md transition duration-500 hover:bg-white/10 hover:text-white"
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
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-3 text-white/80 backdrop-blur-md transition duration-500 hover:bg-white/10 hover:text-white"
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
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-3 text-white/80 backdrop-blur-md transition duration-500 hover:bg-white/10 hover:text-white"
          >
            →
          </button>

          <img
            src={gallery[lightbox]}
            alt="Galería"
            className="max-h-[90vh] max-w-[94vw] object-contain"
          />

        </div>

      )}

      {showIntro && (

        <section className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#070503]">

          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

          <button
            onClick={() => setShowIntro(false)}
            className="group flex flex-col items-center gap-8"
          >

            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#c6a46c]/30 backdrop-blur-sm transition duration-700 group-hover:scale-105 group-hover:border-[#d4af37]/60">

              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c6a46c]/20">

                <div className="h-2 w-2 animate-pulse rounded-full bg-[#d4af37]/70" />

              </div>

            </div>

            <span className="tracking-[0.35em] uppercase text-[11px] text-[#d8c5a0] transition duration-700 group-hover:text-white">
              Abrir invitación
            </span>

          </button>

        </section>

      )}

      <audio
        ref={audioRef}
        loop
        src="/audio/music.mp3"
      />

      <div className="mx-auto w-full max-w-[460px] px-4 py-6 sm:py-8 md:py-10">

        <div className="overflow-hidden rounded-[42px] border border-[#d4af37]/12 bg-[#0b0806]/88 shadow-[0_40px_120px_rgba(0,0,0,0.85)] backdrop-blur-xl">

          <section
            className="relative min-h-[88vh] overflow-hidden"
            ref={heroRef}
          >

            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/65" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-[#0b0806]" />

            <div className="relative z-10 flex min-h-[88vh] flex-col justify-end px-6 pb-10 text-center">

              <h1 className="text-[48px] font-light leading-none tracking-tight text-white md:text-[54px]">
                Isabella <span className="text-[#d4af37]">&</span> Daniel
              </h1>

              <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-white/60">
                20 Diciembre 2026
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">

                <button
                  onClick={() => scrollTo(storyRef)}
                  className="rounded-full border border-[#d4af37]/18 bg-white/[0.03] px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white/90 transition duration-700 hover:bg-white/[0.08]"
                >
                  Explorar
                </button>

                <button
                  onClick={toggleMusic}
                  className="rounded-full border border-[#d4af37]/18 bg-black/25 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-white/90 transition duration-700 hover:bg-white/[0.08]"
                >
                  {musicPlaying ? "Pausar música" : "Música"}
                </button>

              </div>

            </div>

          </section>

          <section className="px-4 pt-4">

            <div className="rounded-[30px] border border-[#d4af37]/12 bg-white/[0.03] px-6 py-7 text-center backdrop-blur-xl">

              <p className="text-[10px] uppercase tracking-[0.38em] text-white/45">
                Nuestra boda
              </p>

              <h2 className="mt-3 text-[42px] font-light leading-[0.92] text-white">
                Acompáñanos
              </h2>

              <p className="mt-3 text-white/68">
                a compartir este momento.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-3">

                <button
                  onClick={() => scrollTo(detailsRef)}
                  className="rounded-full border border-[#d4af37]/18 bg-white/[0.03] px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition duration-700 hover:bg-white/[0.08]"
                >
                  Detalles
                </button>

                <button
                  onClick={() => scrollTo(rsvpRef)}
                  className="rounded-full border border-[#d4af37]/18 bg-white/[0.03] px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition duration-700 hover:bg-white/[0.08]"
                >
                  RSVP
                </button>

              </div>

              {mounted && (

                <div className="mt-6 rounded-[18px] border border-[#d4af37]/18 bg-black/25 px-4 py-4 text-center text-[11px] uppercase tracking-[0.28em] text-[#e8c57a]">

                  <span>{timeLeft.days} D</span>

                  <span className="px-2 text-white/35">/</span>

                  <span>{timeLeft.hours} H</span>

                  <span className="px-2 text-white/35">/</span>

                  <span>{timeLeft.minutes} M</span>

                  <span className="px-2 text-white/35">/</span>

                  <span>{timeLeft.seconds} S</span>

                </div>

              )}

            </div>

          </section>

          <div
            ref={storyRef}
            className="space-y-4 px-4 pb-4 pt-4"
          >

            <section className="rounded-[30px] border border-[#d4af37]/12 bg-white/[0.03] p-4 backdrop-blur-xl">

              <div className="mb-4 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Nuestra historia
                </p>

                <div className="mx-auto mt-3 h-px w-16 bg-[#d4af37]/20" />

              </div>

              <div className="overflow-hidden rounded-[24px] border border-white/8 bg-black">

                <video
                  ref={storyVideoRef}
                  controls
                  playsInline
                  className="aspect-video w-full object-cover"
                >
                  <source
                    src="/videos/historiaisabelladaniel.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>

            </section>

            <section className="rounded-[30px] border border-[#d4af37]/12 bg-white/[0.03] p-4 backdrop-blur-xl">

              <div className="mb-4 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Galería
                </p>

                <div className="mx-auto mt-3 h-px w-16 bg-[#d4af37]/20" />

              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-black/25">

                <div className="relative h-[420px] w-full sm:h-[460px]">

                  {gallery.map((img, i) => (

                    <button
                      key={img}
                      onClick={() => setLightbox(i)}
                      className="absolute inset-0 transition-all duration-[2000ms] ease-out"
                      style={{
                        opacity: i === activeSlide ? 1 : 0,
                        transform:
                          i === activeSlide
                            ? "scale(1)"
                            : "scale(1.03)",
                      }}
                    >

                      <img
                        src={img}
                        alt={`Galería ${i + 1}`}
                        className="h-full w-full object-contain bg-black/25"
                      />

                    </button>

                  ))}

                </div>

              </div>

              <div className="mt-4 flex justify-center gap-3">

                {gallery.map((_, i) => (

                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-[2px] rounded-full transition-all duration-700 ${
                      activeSlide === i
                        ? "w-10 bg-[#d4af37]"
                        : "w-5 bg-white/20"
                    }`}
                  />

                ))}

              </div>

            </section>

          </div>

          <section
            ref={detailsRef}
            className="space-y-4 px-4 pb-4 pt-0"
          >

            <div className="rounded-[30px] border border-[#d4af37]/12 bg-white/[0.03] p-4 backdrop-blur-xl">

              <div className="mb-4 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Detalles del evento
                </p>

                <div className="mx-auto mt-3 h-px w-16 bg-[#d4af37]/20" />

              </div>

              <div className="space-y-3">

                {detailItems.map((item) => (

                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-black/18 p-3 transition duration-700 hover:border-[#d4af37]/22 hover:bg-black/25"
                  >

                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[#d4af37]/15">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                    </div>

                    <div className="min-w-0 flex-1 pr-2">

                      <h3 className="text-[22px] font-light text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-white/65">
                        {item.place}
                      </p>

                      <div className="mt-3 space-y-1 text-[11px] uppercase tracking-[0.22em] text-white/42">

                        <p>{item.date}</p>

                        <p>{item.hour}</p>

                      </div>

                    </div>

                  </a>

                ))}

              </div>

            </div>

          </section>

          <section
            ref={rsvpRef}
            className="space-y-4 px-4 pb-5 pt-0"
          >

            <div className="rounded-[30px] border border-[#d4af37]/12 bg-white/[0.03] p-4 backdrop-blur-xl">

              <div className="mb-4 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  RSVP
                </p>

                <div className="mx-auto mt-3 h-px w-16 bg-[#d4af37]/20" />

              </div>

              <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr] md:items-center">

                <div className="overflow-hidden rounded-[24px] border border-white/10">

                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                    alt="Ramo floral"
                    className="h-full w-full object-cover"
                  />

                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-4 text-center md:text-left">

                  <h3 className="text-[24px] font-light text-white">
                    Confirma tu asistencia
                  </h3>

                  <p className="mt-2 text-sm text-white/65">
                    Queremos compartir este momento contigo.
                  </p>

                  <div className="mt-4 flex flex-col gap-3">

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfV3q6yrUp8BhuTixLz4c7aXIvrpEFWUkypn4sYBjp3tythSQ/viewform?usp=header"
                      className="rounded-full border border-[#d4af37]/18 bg-[#d4af37] px-5 py-3 text-center text-[11px] uppercase tracking-[0.25em] text-[#1d160f] transition duration-700 hover:brightness-110"
                    >
                      Confirmar
                    </a>

                    <button
                      onClick={addToCalendar}
                      className="rounded-full border border-[#d4af37]/18 bg-transparent px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-[#f0d28f] transition duration-700 hover:bg-white/[0.05]"
                    >
                      Agendar
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </section>

          <footer className="px-4 pb-8 pt-2 text-center">

            <a
              href="https://luisalberto.vg"
              target="_blank"
              className="relative inline-block overflow-hidden text-[11px] uppercase tracking-[0.38em] text-white/35 transition duration-700 hover:text-white/70"
            >

              <span className="relative z-10">
                Diseñada por LuisAlbertoVG
              </span>

              <span className="absolute inset-y-0 left-[-120%] w-[40%] animate-[shine_5s_linear_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md" />

            </a>

            <div className="mx-auto mt-5 h-px w-16 bg-[#d4af37]/15" />

          </footer>

        </div>

      </div>

      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -120%;
          }

          100% {
            left: 140%;
          }
        }
      `}</style>

    </main>
  )
}