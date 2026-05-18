"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const gallery = [
  "/images/valentina-hernandez/story-1.jpg",
  "/images/valentina-hernandez/story-2.jpg",
  "/images/valentina-hernandez/story-3.jpg",
];

const timeline = [
  {
    hour: "06:00 PM",
    title: "Recepción",
    desc: "Cóctel de bienvenida",
    icon: "🍸",
  },
  {
    hour: "07:00 PM",
    title: "Ceremonia",
    desc: "Vals & protocolo",
    icon: "👑",
  },
  {
    hour: "08:00 PM",
    title: "Cena",
    desc: "Cena servida",
    icon: "🍽️",
  },
  {
    hour: "09:30 PM",
    title: "Fiesta",
    desc: "¡Que comience la celebración!",
    icon: "🎵",
  },
  {
    hour: "12:00 AM",
    title: "Gran sorpresa",
    desc: "Pastel y show especial",
    icon: "✨",
  },
];

export default function ValentinaHernandezInvitation() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const targetDate = useMemo(
    () => new Date("2025-08-24T18:00:00"),
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === gallery.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      );
      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setMusicPlaying(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  if (!mounted) return null;

  return (
    <main className="bg-[#120f1d] text-white overflow-hidden">
      <audio
        ref={audioRef}
        src="/audio/valentina-hernandez/music.mp3"
        loop
      />

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/valentina-hernandez/hero.jpg"
            alt="Valentina"
            fill
            className="object-cover scale-105"
            priority
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0714]/50 via-transparent to-[#120f1d]" />
        </div>

        <button
          onClick={toggleMusic}
          className="absolute top-6 left-6 z-30 w-12 h-12 rounded-full border border-[#d6b27a]/50 bg-black/30 backdrop-blur-xl flex items-center justify-center text-sm"
        >
          {musicPlaying ? "❚❚" : "♫"}
        </button>

        <button className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full border border-[#d6b27a]/50 bg-black/30 backdrop-blur-xl flex items-center justify-center text-xl">
          ☰
        </button>

        <div className="relative z-20 text-center max-w-xl">
          <div className="mb-6">
            <div className="w-28 h-28 mx-auto rounded-full border border-[#d6b27a]/40 flex items-center justify-center backdrop-blur-xl bg-black/20">
              <span className="text-5xl text-[#e7c38c] font-light">
                V
              </span>
            </div>
          </div>

          <p className="uppercase tracking-[0.4em] text-[#d8c0a0] text-sm mb-4">
            Mis XV Años
          </p>

          <h1 className="text-6xl leading-none font-light text-[#f4d9ae]">
            Valentina
          </h1>

          <h2 className="text-5xl italic font-light text-[#f4d9ae] mt-2">
            Hernández
          </h2>

          <div className="w-44 h-px bg-[#d6b27a]/50 mx-auto my-8" />

          <p className="tracking-[0.3em] uppercase text-[#e7c38c]">
            24 · Agosto · 2025
          </p>

          <p className="mt-8 text-lg text-[#f7efe5] leading-relaxed max-w-sm mx-auto">
            Te invito a celebrar uno de los días más
            importantes de mi vida.
          </p>

          <div className="mt-16 animate-bounce text-[#d6b27a] text-2xl">
            ↓
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="relative bg-[#f8f1ef] text-[#4e2e39] py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#f3c7d5,transparent_30%)]" />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#aa7a8f] mb-6">
            Mi Historia
          </p>

          <h2 className="text-5xl italic font-light mb-10">
            Un sueño
            <br />
            hecho realidad
          </h2>

          <p className="leading-9 text-lg text-[#6d4c59]">
            Hoy miro hacia atrás y veo un camino lleno
            de momentos inolvidables, personas que me
            han acompañado y sueños que me han traído
            hasta aquí.
          </p>

          <p className="leading-9 text-lg text-[#6d4c59] mt-6">
            Este nuevo capítulo merece ser celebrado
            junto a quienes más quiero.
          </p>

          {/* SLIDER */}

          <div className="relative mt-14">
            <div className="flex justify-center gap-4">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-28 h-40 rounded-3xl overflow-hidden transition-all duration-700 ${
                    currentSlide === index
                      ? "scale-105 opacity-100"
                      : "opacity-60 scale-95"
                  }`}
                >
                  <Image
                    src={item}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {gallery.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index
                      ? "bg-[#8a5668]"
                      : "bg-[#d5b8c2]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* EVENT DATA */}

          <div className="grid grid-cols-3 gap-6 mt-20 text-center">
            <div>
              <div className="text-4xl mb-4">📅</div>
              <p className="uppercase text-xs tracking-[0.3em]">
                Agosto
              </p>
              <p className="text-2xl mt-2">24</p>
              <p className="text-sm mt-1">2025</p>
            </div>

            <div>
              <div className="text-4xl mb-4">🕰️</div>
              <p className="uppercase text-xs tracking-[0.3em]">
                Hora
              </p>
              <p className="text-2xl mt-2">06:00</p>
              <p className="text-sm mt-1">PM</p>
            </div>

            <div>
              <div className="text-4xl mb-4">📍</div>
              <p className="uppercase text-xs tracking-[0.3em]">
                Lugar
              </p>
              <p className="text-lg mt-2 leading-6">
                Hacienda
                <br />
                Santa Lucía
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}

      <section className="py-24 px-6 bg-[#171225]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-5xl font-light text-[#f4d9ae] mb-16">
            Falta muy poco
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                label: "Días",
                value: timeLeft.days,
              },
              {
                label: "Horas",
                value: timeLeft.hours,
              },
              {
                label: "Minutos",
                value: timeLeft.minutes,
              },
              {
                label: "Segundos",
                value: timeLeft.seconds,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-[#d6b27a]/20 bg-white/5 backdrop-blur-xl p-10 text-center"
              >
                <div className="text-5xl text-[#f4d9ae] font-light">
                  {item.value}
                </div>

                <div className="mt-4 uppercase tracking-[0.3em] text-xs text-[#c6a97b]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="relative py-28 px-6 overflow-hidden bg-[#120f1d]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-[#cba56d] text-sm">
              Itinerario
            </p>

            <h2 className="text-5xl mt-6 font-light text-[#f3d8a8]">
              Mi Gran Día
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-[#caa36a]/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start"
                >
                  <div className="relative z-10 min-w-[64px] w-16 h-16 rounded-full border border-[#d6b27a]/30 bg-[#1e1830] flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[#cba56d] tracking-[0.2em] text-sm uppercase">
                      {item.hour}
                    </p>

                    <h3 className="text-3xl text-[#f3d8a8] mt-2 font-light">
                      {item.title}
                    </h3>

                    <p className="text-[#c8c0d4] mt-2 text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DRESS CODE */}

          <div className="mt-24 border border-[#d6b27a]/20 rounded-[2rem] p-10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-center text-3xl text-[#f4d9ae] italic">
              Código de Vestimenta
            </h3>

            <p className="text-center mt-4 text-[#d8d0df]">
              Formal / Etiqueta
            </p>

            <div className="flex justify-center gap-4 mt-8">
              {[
                "#f6d5df",
                "#d99cb5",
                "#8d6cb3",
                "#243b79",
                "#d9b26f",
              ].map((color) => (
                <div
                  key={color}
                  className="w-12 h-12 rounded-full border border-white/20"
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}

      <section className="relative py-28 px-6 bg-[#f8f1ef] overflow-hidden">
        <div className="max-w-xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#aa7a8f]">
            Confirma tu
          </p>

          <h2 className="text-6xl italic font-light text-[#7a4d5f] mt-4">
            Asistencia
          </h2>

          <p className="mt-10 text-[#6d4c59] leading-8 text-lg">
            Tu presencia hará este día aún más especial.
            Por favor confirma antes del 10 de agosto
            del 2025.
          </p>

          <form className="mt-14 space-y-5">
            <input
              type="text"
              placeholder="NOMBRE COMPLETO"
              className="w-full h-16 rounded-2xl border border-[#d8b8c2] bg-white/70 px-6 outline-none uppercase tracking-[0.15em] text-sm"
            />

            <select className="w-full h-16 rounded-2xl border border-[#d8b8c2] bg-white/70 px-6 outline-none uppercase tracking-[0.15em] text-sm">
              <option>NÚMERO DE ASISTENTES</option>
              <option>1 Asistente</option>
              <option>2 Asistentes</option>
              <option>3 Asistentes</option>
            </select>

            <input
              type="text"
              placeholder="WHATSAPP O TELÉFONO"
              className="w-full h-16 rounded-2xl border border-[#d8b8c2] bg-white/70 px-6 outline-none uppercase tracking-[0.15em] text-sm"
            />

            <textarea
              placeholder="MENSAJE PARA VALENTINA (OPCIONAL)"
              className="w-full h-40 rounded-2xl border border-[#d8b8c2] bg-white/70 p-6 outline-none uppercase tracking-[0.15em] text-sm"
            />

            <button
              type="button"
              className="w-full h-16 rounded-2xl bg-[#cf91a5] text-white uppercase tracking-[0.25em] text-sm transition hover:scale-[1.02]"
            >
              Confirmar asistencia
            </button>
          </form>

          <div className="mt-24">
            <h3 className="text-6xl italic font-light text-[#b26b83]">
              ¡Gracias!
            </h3>

            <p className="mt-6 text-[#7f5d69] tracking-[0.2em] uppercase text-sm">
              Por ser parte de mi sueño
            </p>
          </div>
        </div>
      </section>

      {/* MAP */}

      <section className="relative h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15044.941952525934!2d-103.423408!3d20.673777"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0 grayscale contrast-125 brightness-75"
        />

        <div className="absolute inset-0 bg-[#120f1d]/30 pointer-events-none" />
      </section>

      {/* FOOTER */}

      <footer className="py-20 px-6 bg-[#0f0b17] text-center">
        <h3 className="text-4xl font-light text-[#f3d8a8]">
          Valentina Hernández
        </h3>

        <p className="mt-6 text-[#b8a8c7]">
          Gracias por acompañarme en esta noche
          inolvidable.
        </p>

        <div className="mt-10 text-[#cba56d] text-sm tracking-[0.4em] uppercase">
          XV Años 2025
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/5217770000000"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-3xl shadow-2xl"
      >
        ✆
      </a>
    </main>
  );
}