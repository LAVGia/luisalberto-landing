export const metadata = {
  title: "Shine Night",
}

export default function PartyInvite() {
  return (
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black" />

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#ffffff33,transparent_40%)]" />

        <div className="absolute top-[10%] right-[10%] w-[220px] h-[220px] rounded-full bg-white/10 blur-[100px]" />

        <div className="relative z-10 w-full">

          <p className="uppercase tracking-[0.5em] text-sm text-white/60 mb-5">
            Jonacatepec • Mayo 23
          </p>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.82] tracking-[-0.08em]">
            SHINE
            <br />
            NIGHT
          </h1>

          <p className="text-white/70 text-xl mt-8 max-w-md leading-relaxed">
            Luces, reflejos, glitter y energía nocturna.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://maps.google.com"
              target="_blank"
              className="bg-white text-black px-7 py-4 rounded-full font-bold"
            >
              📍 Ubicación
            </a>

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="border border-white/20 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full font-bold"
            >
              💬 Reserva
            </a>

          </div>

        </div>

      </section>

      {/* INFO */}

      <section className="h-screen snap-start flex items-center justify-center px-6 relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff22,transparent_60%)]" />

        <div className="absolute top-[20%] left-[10%] w-[260px] h-[260px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] w-[260px] h-[260px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="relative z-10 text-center max-w-lg">

          <div className="inline-block border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full mb-8">

            <p className="uppercase tracking-[0.4em] text-sm text-white/70">
              Mayo 23
            </p>

          </div>

          <h2 className="text-7xl md:text-9xl font-black leading-[0.82] tracking-[-0.08em]">
            JONA
            <br />
            NIGHT
          </h2>

          <p className="text-white/70 text-2xl mt-8">
            Jonacatepec, Mor.
          </p>

          <div className="mt-10 inline-block border border-white/20 bg-white/10 backdrop-blur-md px-8 py-5 rounded-[2rem]">

            <p className="uppercase tracking-[0.4em] text-xs text-white/50 mb-2">
              Cover
            </p>

            <h3 className="text-5xl font-black">
              $150
            </h3>

          </div>

        </div>

      </section>

      {/* THE MOOD */}

      <section className="relative h-screen snap-start overflow-hidden flex items-end px-6 pb-20">

        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff33,transparent_40%)]" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[260px] h-[260px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="relative z-10 max-w-lg">

          <p className="uppercase tracking-[0.5em] text-sm text-white/60 mb-5">
            Dress Code
          </p>

          <h2 className="text-7xl md:text-8xl font-black leading-[0.82] tracking-[-0.08em]">
            THE
            <br />
            MOOD
          </h2>

          <p className="text-white/75 text-xl mt-8 leading-relaxed">
            Glitter, reflejos, ropa brillante, fotografía con flash y estética nightlife.
          </p>

        </div>

      </section>

      {/* PLAYLIST */}

      <section className="h-screen snap-start px-6 flex flex-col justify-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10,transparent_60%)]" />

        <div className="relative z-10">

          <p className="uppercase tracking-[0.5em] text-sm text-white/50 mb-6">
            Playlist
          </p>

          <h2 className="text-6xl md:text-7xl font-black leading-[0.85] tracking-[-0.08em] mb-14">
            LA VIBRA
            <br />
            EMPIEZA AQUÍ
          </h2>

          <div className="rounded-[2rem] overflow-hidden border border-white/10">

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

      {/* CTA */}

      <section className="h-screen snap-start px-6 flex flex-col justify-center items-center text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff12,transparent_60%)]" />

        <div className="absolute top-[20%] left-[20%] w-[220px] h-[220px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

        <div className="relative z-10">

          <p className="uppercase tracking-[0.5em] text-sm text-white/50 mb-6">
            Limited Access
          </p>

          <h2 className="text-7xl md:text-9xl font-black leading-[0.82] tracking-[-0.08em]">
            NOS VEMOS
            <br />
            AHÍ
          </h2>

          <p className="text-white/60 text-xl mt-8">
            Acceso limitado.
          </p>

          <a
            href="https://wa.me/527351210954"
            target="_blank"
            className="inline-block mt-12 bg-white text-black px-10 py-5 rounded-full font-black text-lg"
          >
            RESERVAR
          </a>

        </div>

      </section>

    </main>
  )
}