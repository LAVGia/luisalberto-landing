export const metadata = {
  title: "Party Invite",
}

export default function PartyInvite() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}

      <section className="relative h-screen flex items-end px-6 pb-20 
overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            
src="https://cdn.coverr.co/videos/coverr-friends-dancing-at-a-party-1564843721772?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full">

          <p className="uppercase tracking-[0.4em] text-sm text-white/70 
mb-4">
            Summer 2026
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] 
tracking-[-0.08em]">

            POOL
            <br />

            PARTY

          </h1>

          <p className="text-xl text-white/80 mt-6 max-w-md">
            Music • Drinks • Friends • Night Vibes
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://maps.google.com"
              target="_blank"
              className="bg-white text-black px-6 py-4 rounded-full 
font-semibold"
            >
              📍 Cómo llegar
            </a>

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="bg-[#25D366] text-white px-6 py-4 rounded-full 
font-semibold"
            >
              💬 Reservar Spot
            </a>

          </div>

        </div>

      </section>

      {/* DETAILS */}

      <section className="px-6 py-24">

        <div className="grid gap-5">

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6 backdrop-blur-md">

            <p className="text-white/50 text-sm uppercase tracking-[0.3em] 
mb-3">
              Date
            </p>

            <h2 className="text-3xl font-black">
              Saturday — June 28
            </h2>

          </div>

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6 backdrop-blur-md">

            <p className="text-white/50 text-sm uppercase tracking-[0.3em] 
mb-3">
              Time
            </p>

            <h2 className="text-3xl font-black">
              9:00 PM
            </h2>

          </div>

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6 backdrop-blur-md">

            <p className="text-white/50 text-sm uppercase tracking-[0.3em] 
mb-3">
              Location
            </p>

            <h2 className="text-3xl font-black">
              Casa Magnolia
            </h2>

          </div>

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6 backdrop-blur-md">

            <p className="text-white/50 text-sm uppercase tracking-[0.3em] 
mb-3">
              Cover
            </p>

            <h2 className="text-3xl font-black">
              $150 MXN
            </h2>

          </div>

        </div>

      </section>

      {/* DRESS CODE */}

      <section className="px-6 py-10">

        <div className="rounded-[3rem] overflow-hidden relative 
min-h-[500px]">

          <img
            
src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 p-10 flex flex-col justify-end 
h-full">

            <p className="uppercase tracking-[0.4em] text-sm text-white/70 
mb-4">
              Dress Code
            </p>

            <h2 className="text-5xl font-black leading-[0.9] 
tracking-[-0.08em]">

              WHITE
              <br />

              NIGHT

            </h2>

            <p className="text-white/80 mt-6 max-w-sm text-lg">
              Summer outfits, white clothes and pool vibes.
            </p>

          </div>

        </div>

      </section>

      {/* MUSIC */}

      <section className="px-6 py-24">

        <p className="uppercase tracking-[0.4em] text-sm text-white/50 
mb-6">
          Playlist
        </p>

        <h2 className="text-5xl font-black leading-[0.9] 
tracking-[-0.08em] mb-12">

          The vibe
          <br />

          starts here.

        </h2>

        <div className="rounded-[2rem] overflow-hidden border 
border-white/10">

          <iframe
            style={{ borderRadius: "24px" }}
            
src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0BcQWzuB7ZO?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; 
picture-in-picture"
            loading="lazy"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-32 text-center">

        <h2 className="text-6xl md:text-8xl font-black leading-[0.85] 
tracking-[-0.08em]">

          SEE YOU
          <br />

          THERE

        </h2>

        <p className="text-white/60 text-xl mt-8">
          Limited spots available.
        </p>

        <a
          href="https://wa.me/527351210954"
          target="_blank"
          className="inline-block mt-12 bg-white text-black px-10 py-5 
rounded-full font-bold text-lg"
        >
          CONFIRMAR ASISTENCIA
        </a>

      </section>

    </main>
  )
}
