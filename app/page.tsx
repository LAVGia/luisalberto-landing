export const metadata = {
  title: "LuisAlbertoVG",
}

export default function Home() {
  return (
    <main className="bg-[#141210] text-[#F5F2ED] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden">

      {/* HERO CINEMATIC */}

      <section className="relative h-screen snap-start overflow-hidden flex items-center justify-center bg-[#141210]">

        {/* BACKGROUND LIGHT */}

        <div className="absolute left-[-10%] top-0 w-[40%] h-full bg-[#C6A77D]/[0.08] blur-[180px]" />

        <div className="absolute right-[-10%] top-0 w-[40%] h-full bg-[#8E6F4E]/[0.08] blur-[180px]" />

        {/* BLURRED VIDEO BACKGROUND */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-3xl scale-110"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* MAIN VIDEO */}

        <div className="relative z-10 h-full w-full flex items-center justify-center px-8">

          <div className="relative h-full flex items-center justify-center">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-auto object-contain"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/40 via-transparent to-[#141210]/70" />

            <div className="absolute inset-0 bg-black/20" />

          </div>

        </div>

        {/* TOP TEXT */}

        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 text-center">

          <p className="uppercase tracking-[0.45em] text-[#D2CCC4] text-[11px] md:text-sm">

            Productor Audiovisual

          </p>

        </div>

        {/* BOTTOM TITLE */}

        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 text-center px-6 w-full">

          <h1 className="text-[2.3rem] md:text-[5.5rem] xl:text-[7rem] font-black leading-[0.9] tracking-[-0.08em] whitespace-nowrap">

            Luis Alberto
            <span className="text-[#C6A77D] ml-3">
              VG
            </span>

          </h1>

        </div>

        {/* CTA */}

        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-[#A8A29E] hover:text-[#C6A77D] transition-all duration-700 group"
        >

          <span className="text-3xl group-hover:translate-y-1 transition-transform duration-700">
            ↓
          </span>

          <span className="uppercase tracking-[0.35em] text-xs mt-3">
            Explorar
          </span>

        </a>

      </section>

      {/* VISUAL INDEX */}

      <section
        id="services"
        className="h-screen snap-start flex items-center px-8 md:px-20 bg-[#141210] relative overflow-hidden"
      >

        {/* ATMOSPHERE */}

        <div className="absolute top-[10%] right-[-10%] w-[420px] h-[420px] bg-[#C6A77D]/[0.04] blur-[160px]" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[420px] h-[420px] bg-[#8E6F4E]/[0.04] blur-[160px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm mb-8">

            Narrativa Visual

          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.08em] max-w-4xl mb-20">

            No todas las
            <br />
            historias se
            <br />
            cuentan igual.

          </h2>

          {/* BUTTONS */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

            <a
              href="/invitacion"
              className="group flex items-center justify-between border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-7 py-5 rounded-full hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="tracking-[0.08em]">
                Invitaciones Luxury
              </span>

              <span className="opacity-50 group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </a>

            <a
              href="#"
              className="group flex items-center justify-between border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-7 py-5 rounded-full hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="tracking-[0.08em]">
                Bodas y XV años
              </span>

              <span className="opacity-50 group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </a>

            <a
              href="#"
              className="group flex items-center justify-between border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-7 py-5 rounded-full hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="tracking-[0.08em]">
                Documentales y eventos
              </span>

              <span className="opacity-50 group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </a>

            <a
              href="https://luisalbertovg9.pixieset.com/"
              target="_blank"
              className="group flex items-center justify-between border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-7 py-5 rounded-full hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="tracking-[0.08em]">
                Encuentra tu foto
              </span>

              <span className="opacity-50 group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </a>

            <a
              href="#"
              className="group flex items-center justify-between border border-white/10 bg-[#1B1816]/60 backdrop-blur-xl px-7 py-5 rounded-full hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
            >

              <span className="tracking-[0.08em]">
                Redes Sociales
              </span>

              <span className="opacity-50 group-hover:translate-x-1 transition-transform duration-700">
                →
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="h-screen snap-start flex items-center px-8 md:px-20 bg-[#141210]"
      >

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm mb-8">
            Encuentra tu historia
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.08em]">

            Tal vez esta
            <br />
            imagen sea tuya.

          </h2>

          <div className="mt-16">

            <a
              href="https://luisalbertovg9.pixieset.com/"
              target="_blank"
              className="inline-flex border border-white/10 bg-[#1B1816]/70 backdrop-blur-md px-8 py-4 rounded-full text-sm tracking-[0.18em] uppercase hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all duration-700"
            >
              Buscar Fotografías
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}