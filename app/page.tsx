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
        className="min-h-screen snap-start flex items-center px-8 md:px-20 bg-[#141210] relative overflow-hidden"
      >

        {/* ATMOSPHERE */}

        <div className="absolute top-[10%] right-[-10%] w-[420px] h-[420px] bg-[#C6A77D]/[0.04] blur-[160px]" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[420px] h-[420px] bg-[#8E6F4E]/[0.04] blur-[160px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid xl:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm mb-8">

              Narrativa Visual

            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.08em]">

              Cada proyecto
              <br />
              tiene una
              <br />
              atmósfera distinta.

            </h2>

            <p className="text-[#A8A29E] text-lg md:text-xl max-w-2xl mt-12 leading-[1.9] font-light">

              La imagen correcta puede convertir un momento en memoria.

            </p>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-5">

            {/* ITEM */}

            <a
              href="#"
              className="group border border-white/10 bg-[#1B1816]/50 backdrop-blur-md rounded-[2rem] px-8 py-7 hover:border-[#C6A77D]/40 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">

                Portafolio

              </h3>

              <p className="text-[#A8A29E] mt-3 leading-[1.8]">

                Narrativa visual, documental y retrato.

              </p>

            </a>

            {/* ITEM */}

            <a
              href="/invitacion"
              className="group border border-white/10 bg-[#1B1816]/50 backdrop-blur-md rounded-[2rem] px-8 py-7 hover:border-[#C6A77D]/40 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">

                Invitaciones Luxury

              </h3>

              <p className="text-[#A8A29E] mt-3 leading-[1.8]">

                Experiencias digitales cinematográficas para momentos irrepetibles.

              </p>

            </a>

            {/* ITEM */}

            <a
              href="#"
              className="group border border-white/10 bg-[#1B1816]/50 backdrop-blur-md rounded-[2rem] px-8 py-7 hover:border-[#C6A77D]/40 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">

                Livestream

              </h3>

              <p className="text-[#A8A29E] mt-3 leading-[1.8]">

                Cobertura multicámara y producción en tiempo real.

              </p>

            </a>

            {/* ITEM */}

            <a
              href="https://luisalbertovg9.pixieset.com/"
              target="_blank"
              className="group border border-white/10 bg-[#1B1816]/50 backdrop-blur-md rounded-[2rem] px-8 py-7 hover:border-[#C6A77D]/40 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">

                Encuentra tu Foto

              </h3>

              <p className="text-[#A8A29E] mt-3 leading-[1.8]">

                Galerías actualizadas para bodas y eventos.

              </p>

            </a>

            {/* ITEM */}

            <a
              href="#"
              className="group border border-white/10 bg-[#1B1816]/50 backdrop-blur-md rounded-[2rem] px-8 py-7 hover:border-[#C6A77D]/40 transition-all duration-700"
            >

              <h3 className="text-2xl font-black tracking-[-0.04em] group-hover:text-[#C6A77D] transition-colors duration-700">

                Redes Sociales

              </h3>

              <p className="text-[#A8A29E] mt-3 leading-[1.8]">

                Coberturas, procesos visuales y narrativa diaria.

              </p>

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

          <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl mt-12 leading-[1.9] font-light">

            Galerías actualizadas en tiempo real para acceder a tus fotografías después de cada evento.

          </p>

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