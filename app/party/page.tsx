"use client"

import { useEffect, useState } from "react"

export default function PartyInvite() {
  useEffect(() => {
    document.title = "putiglowfest"
  }, [])

  const targetDate = new Date("2026-05-23T19:00:00").getTime()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const countdownItems = [
    { label: "DÍAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEG", value: timeLeft.seconds },
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes neonPulse {
          0%, 100% {
            box-shadow:
              0 0 5px rgba(255,255,255,0.9),
              0 0 10px rgba(255,255,255,0.9),
              0 0 20px rgba(255,255,255,0.9),
              0 0 40px rgba(255,255,255,0.7);
          }

          50% {
            box-shadow:
              0 0 2px rgba(255,255,255,0.4),
              0 0 6px rgba(255,255,255,0.4),
              0 0 12px rgba(255,255,255,0.4),
              0 0 24px rgba(255,255,255,0.2);
          }
        }

        @keyframes neonGreen {
          0%, 100% {
            box-shadow:
              0 0 5px rgba(34,197,94,0.9),
              0 0 10px rgba(34,197,94,0.9),
              0 0 20px rgba(34,197,94,0.8),
              0 0 40px rgba(34,197,94,0.6);
          }

          50% {
            box-shadow:
              0 0 2px rgba(34,197,94,0.5),
              0 0 6px rgba(34,197,94,0.5),
              0 0 12px rgba(34,197,94,0.4),
              0 0 24px rgba(34,197,94,0.3);
          }
        }

        .neon-box {
          animation: neonPulse 1.8s infinite ease-in-out;
          border: 1px solid rgba(255,255,255,0.95);
        }

        .countdown-circle {
          animation: neonPulse 2s infinite ease-in-out;
          border: 1px solid rgba(255,255,255,0.9);
          backdrop-filter: blur(12px);
        }

        .whatsapp-neon {
          animation: neonGreen 1.8s infinite ease-in-out;
          border: 1px solid rgba(34,197,94,0.9);
          color: white;
        }
      `}</style>

      <main className="bg-black text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

        {/* HERO */}

        <section className="relative h-screen snap-start flex items-end px-6 pb-20 overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/putoglowfest.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#ffffff22,transparent_40%)]" />

          <div className="absolute top-[10%] right-[10%] w-[220px] h-[220px] rounded-full bg-white/10 blur-[100px]" />

          <div className="relative z-10 w-full">

            <h1 className="text-7xl md:text-9xl font-black leading-[0.82] tracking-[-0.08em]">
              MAYO
              <br />
              23
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://maps.app.goo.gl/E9zAtUE5LhnTwZaA9"
                target="_blank"
                className="bg-white text-black px-7 py-4 rounded-full font-bold"
              >
                📍 Ubicación
              </a>

              <a
                href="#cover"
                className="border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full font-bold"
              >
                🎟️ Cover
              </a>

            </div>

          </div>

        </section>

        {/* INFO */}

        <section
          id="cover"
          className="relative h-screen snap-start flex items-center justify-center px-6 overflow-hidden"
        >

          <img
            src="/images/putiglowfestdetalles.png"
            alt="Glow Fest"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15,transparent_60%)]" />

          <div className="absolute top-[20%] left-[10%] w-[260px] h-[260px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

          <div className="absolute bottom-[10%] right-[10%] w-[260px] h-[260px] rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="relative z-10 text-center max-w-2xl">

            {/* COUNTDOWN */}

            <div className="flex justify-center gap-4 md:gap-6 mb-16">

              {countdownItems.map((item, index) => (
                <div
                  key={index}
                  className="countdown-circle w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/30 flex flex-col items-center justify-center"
                >
                  <span className="text-2xl md:text-4xl font-black leading-none">
                    {String(item.value).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/70 mt-2">
                    {item.label}
                  </span>
                </div>
              ))}

            </div>

            <div className="inline-block bg-black/20 backdrop-blur-md px-8 py-4 rounded-full mb-8 neon-box">

              <p className="uppercase tracking-[0.25em] text-sm text-white">
                Mayo 23 - Jonacatepec
              </p>

            </div>

            <p className="text-white text-2xl mt-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              Jonacatepec, Mor.
            </p>

            <div className="mt-10 inline-block bg-black/20 backdrop-blur-md px-8 py-5 rounded-[2rem] neon-box">

              <p className="uppercase tracking-[0.4em] text-xs text-white mb-2">
                Preventa
              </p>

              <h3 className="text-5xl font-black text-white">
                $80
              </h3>

            </div>

            <div className="mt-8">

              <a
                href="https://wa.me/527351210954"
                target="_blank"
                className="whatsapp-neon inline-block bg-green-500/20 backdrop-blur-md px-8 py-4 rounded-full font-bold"
              >
                💚 WhatsApp Reserva
              </a>

            </div>

          </div>

        </section>

        {/* PLAYLIST */}

        <section className="h-screen snap-start px-6 flex flex-col justify-center relative overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10,transparent_60%)]" />

          <div className="absolute top-[20%] left-[10%] w-[260px] h-[260px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

          <div className="absolute bottom-[10%] right-[10%] w-[260px] h-[260px] rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="relative z-10">

            <p className="uppercase tracking-[0.5em] text-sm text-white/50 mb-6">
              Playlist
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-[0.85] tracking-[-0.08em] mb-14">
              LA VIBRA
              <br />
              EMPIEZA AQUÍ
            </h2>

            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/30 backdrop-blur-md">

              <iframe
                style={{ borderRadius: "24px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0BcQWzuB7ZO?utm_source=generator"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />

            </div>

          </div>

        </section>

        {/* FINAL */}

        <section className="relative h-screen snap-start overflow-hidden flex items-end px-6 pb-20 text-white">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/putiglowfestfirma.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff22,transparent_40%)]" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[260px] h-[260px] rounded-full bg-white/10 blur-[120px]" />

          <div className="relative z-10 max-w-lg">

            <p className="uppercase tracking-[0.5em] text-sm text-white/60 mb-5">
              Invitación web diseñada por
            </p>

            <h2 className="text-7xl md:text-8xl font-black leading-[0.82] tracking-[-0.08em]">
              Luis
              <br />
              Alberto VG
            </h2>

            <a
              href="https://luisalberto.vg/"
              target="_blank"
              className="inline-block mt-12 bg-white text-black px-10 py-5 rounded-full font-black text-lg"
            >
              Hagamos la tuya
            </a>

          </div>

        </section>

      </main>
    </>
  )
}