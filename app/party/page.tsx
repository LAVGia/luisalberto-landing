export const metadata = {
  title: "Shine Party",
}

export default function PartyInvite() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}

      <section className="relative h-screen flex items-end px-6 pb-20 
overflow-hidden">

        <img
          
src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 
via-black/40 to-black" />

        <div className="absolute top-0 left-0 w-full h-full 
bg-[radial-gradient(circle_at_top,#ffffff22,transparent_40%)]" />

        <div className="relative z-10 w-full">

          <p className="uppercase tracking-[0.5em] text-sm text-white/60 
mb-5">
            Jonacatepec • May 23
          </p>

          <h1 className="text-7xl md:text-9xl font-black leading-[0.82] 
tracking-[-0.08em]">

            SHINE
            <br />

            NIGHT

          </h1>

          <p className="text-white/70 text-xl mt-8 max-w-md 
leading-relaxed">
            Glitter. Mirrors. Flash lights. Night vibes.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://maps.google.com"
              target="_blank"
              className="bg-white text-black px-7 py-4 rounded-full 
font-bold"
            >
              📍 Location
            </a>

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="border border-white/20 bg-white/10 
backdrop-blur-md px-7 py-4 rounded-full font-bold"
            >
              💬 RSVP
            </a>

          </div>

        </div>

      </section>

      {/* INFO BLOCK */}

      <section className="px-6 py-20">

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6">

            <p className="text-white/40 uppercase tracking-[0.3em] text-xs 
mb-3">
              Date
            </p>

            <h2 className="text-3xl font-black leading-none">
              MAY 23
            </h2>

          </div>

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6">

            <p className="text-white/40 uppercase tracking-[0.3em] text-xs 
mb-3">
              Time
            </p>

            <h2 className="text-3xl font-black leading-none">
              9 PM
            </h2>

          </div>

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6">

            <p className="text-white/40 uppercase tracking-[0.3em] text-xs 
mb-3">
              Place
            </p>

            <h2 className="text-3xl font-black leading-none">
              JONA
            </h2>

          </div>

          <div className="bg-white/10 border border-white/10 
rounded-[2rem] p-6">

            <p className="text-white/40 uppercase tracking-[0.3em] text-xs 
mb-3">
              Cover
            </p>

            <h2 className="text-3xl font-black leading-none">
              $150
            </h2>

          </div>

        </div>

      </section>

      {/* DRESS CODE */}

      <section className="px-6 py-10">

        <div className="relative rounded-[3rem] overflow-hidden 
min-h-[520px]">

          <img
            
src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 
bg-[radial-gradient(circle_at_top,#ffffff33,transparent_40%)]" />

          <div className="relative z-10 p-10 flex flex-col justify-end 
h-full">

            <p className="uppercase tracking-[0.5em] text-sm text-white/60 
mb-5">
              Dress Code
            </p>

            <h2 className="text-6xl font-black leading-[0.85] 
tracking-[-0.08em]">

              SHINE
              <br />

              LOOK

            </h2>

            <p className="text-white/75 text-lg mt-8 max-w-sm 
leading-relaxed">
              Mirrors, glitter, silver outfits and flash aesthetics.
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY STYLE */}

      <section className="px-6 py-24">

        <p className="uppercase tracking-[0.5em] text-sm text-white/50 
mb-6">
          The Mood
        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-[0.85] 
tracking-[-0.08em] mb-16">

          Flash lights.
          <br />

          Mirror vibes.

        </h2>

        <div className="grid grid-cols-2 gap-4">

          <img
            
src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[2rem] aspect-[4/5] object-cover"
          />

          <img
            
src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[2rem] aspect-[4/5] object-cover mt-10"
          />

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-32 text-center">

        <p className="uppercase tracking-[0.5em] text-sm text-white/50 
mb-6">
          Limited Access
        </p>

        <h2 className="text-7xl md:text-9xl font-black leading-[0.82] 
tracking-[-0.08em]">

          SEE YOU
          <br />

          THERE

        </h2>

        <p className="text-white/60 text-xl mt-8">
          RSVP required.
        </p>

        <a
          href="https://wa.me/527351210954"
          target="_blank"
          className="inline-block mt-12 bg-white text-black px-10 py-5 
rounded-full font-black text-lg"
        >
          CONFIRMAR
        </a>

      </section>

    </main>
  )
}
