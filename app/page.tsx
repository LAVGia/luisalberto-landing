export const metadata = {
  title: "LuisAlbertoVG",
}

export default function Home() {
  return (
    <main className="bg-[#141210] text-[#F5F2ED] h-screen 
overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden">

      {/* HERO CINEMATIC */}

      <section className="relative h-screen snap-start overflow-hidden 
flex items-center justify-center bg-[#141210]">

        {/* BACKGROUND LIGHT */}

        <div className="absolute left-[-10%] top-0 w-[40%] h-full 
bg-[#C6A77D]/[0.08] blur-[180px]" />

        <div className="absolute right-[-10%] top-0 w-[40%] h-full 
bg-[#8E6F4E]/[0.08] blur-[180px]" />

        {/* BLURRED VIDEO BACKGROUND */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover 
opacity-20 blur-3xl scale-110"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* MAIN VIDEO */}

        <div className="relative z-10 h-full w-full flex items-center 
justify-center px-8">

          <div className="relative h-full flex items-center 
justify-center">

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

            <div className="absolute inset-0 bg-gradient-to-b 
from-[#141210]/40 via-transparent to-[#141210]/70" />

            <div className="absolute inset-0 bg-black/20" />

          </div>

        </div>

        {/* TOP TEXT */}

        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 
text-center">

          <p className="uppercase tracking-[0.45em] text-[#D2CCC4] 
text-[11px] md:text-sm">

            Productor Audiovisual

          </p>

        </div>

        {/* BOTTOM TITLE */}

        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 
text-center px-6 w-full">

          <h1 className="text-[2.9rem] md:text-[6rem] xl:text-[8rem] 
font-black leading-[0.9] tracking-[-0.08em] whitespace-nowrap">

            Luis Alberto
            <span className="text-[#C6A77D] ml-3">
              VG
            </span>

          </h1>

        </div>

        {/* CTA */}

        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 
flex flex-col items-center text-[#A8A29E] hover:text-[#C6A77D] 
transition-all duration-700 group"
        >

          <span className="text-3xl group-hover:translate-y-1 
transition-transform duration-700">
            ↓
          </span>

          <span className="uppercase tracking-[0.35em] text-xs mt-3">
            Explorar
          </span>

        </a>

      </section>

      {/* SERVICES */}

            {/* VISUAL INDEX */}

      <section
        id="services"
        className="min-h-screen snap-start px-8 md:px-20 py-24 bg-[#141210] relative overflow-hidden"
      >

        {/* ATMOSPHERE */}

        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#C6A77D]/[0.04] blur-[180px]" />

        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8E6F4E]/[0.04] blur-[180px]" />

        {/* HEADER */}

        <div className="relative z-10 max-w-5xl mb-24">

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

          <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl mt-12 leading-[1.9] font-light">

            La imagen correcta puede convertir un momento en memoria.

          </p>

        </div>

        {/* EDITORIAL GRID */}

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 auto-rows-[280px]">

          {/* HISTORIAS */}

          <a
            href="#"
            className="group xl:col-span-5 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-md"
          >

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#141210]" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10">

              <p className="uppercase tracking-[0.3em] text-[#D2CCC4]/70 text-xs mb-4">
                Archivo Visual
              </p>

              <h3 className="text-4xl font-black tracking-[-0.05em]">
                Historias
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.8] max-w-md">
                Cine, retrato, documental y narrativa visual.
              </p>

            </div>

          </a>

          {/* EXPERIENCIAS */}

          <a
            href="/invitacion"
            className="group xl:col-span-7 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-md"
          >

            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#141210]" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10">

              <p className="uppercase tracking-[0.3em] text-[#D2CCC4]/70 text-xs mb-4">
                Luxury Experience
              </p>

              <h3 className="text-4xl font-black tracking-[-0.05em]">
                Experiencias
                <br />
                Digitales
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.8] max-w-xl">
                Invitaciones web cinematográficas y experiencias visuales diseñadas para permanecer.
              </p>

            </div>

          </a>

          {/* LIVE */}

          <a
            href="#"
            className="group xl:col-span-4 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-md"
          >

            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#141210]" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10">

              <h3 className="text-3xl font-black tracking-[-0.05em]">
                Cobertura
                <br />
                en Vivo
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.8]">
                Producción multicámara y transmisión profesional para eventos e instituciones.
              </p>

            </div>

          </a>

          {/* GALERIAS */}

          <a
            href="https://luisalbertovg9.pixieset.com/"
            target="_blank"
            className="group xl:col-span-4 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-md"
          >

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#141210]" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10">

              <h3 className="text-3xl font-black tracking-[-0.05em]">
                Encuentra
                <br />
                tu historia
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.8]">
                Accede a galerías actualizadas y revive momentos capturados durante cada evento.
              </p>

            </div>

          </a>

          {/* SOCIAL */}

          <a
            href="#"
            className="group xl:col-span-4 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1B1816]/50 backdrop-blur-md"
          >

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#141210]" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10">

              <h3 className="text-3xl font-black tracking-[-0.05em]">
                Detrás de
                <br />
                la narrativa
              </h3>

              <p className="text-[#D2CCC4] mt-6 leading-[1.8]">
                Coberturas, procesos visuales y momentos compartidos en tiempo real.
              </p>

            </div>

          </a>

        </div>

      </section>
      {/* GALLERY */}

      <section
        id="gallery"
        className="h-screen snap-start flex items-center px-8 md:px-20 
bg-[#141210]"
      >

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm 
mb-8">
            Encuentra tu historia
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] 
tracking-[-0.08em]">

            Tal vez esta
            <br />
            imagen sea tuya.

          </h2>

          <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl mt-12 
leading-[1.9] font-light">

            Galerías actualizadas en tiempo real para acceder a tus 
fotografías después de cada evento.

          </p>

          <div className="mt-16">

            <a
              href="https://luisalbertovg9.pixieset.com/"
              target="_blank"
              className="inline-flex border border-white/10 
bg-[#1B1816]/70 backdrop-blur-md px-8 py-4 rounded-full text-sm 
tracking-[0.18em] uppercase hover:border-[#C6A77D]/50 hover:text-[#C6A77D] 
transition-all duration-700"
            >
              Buscar Fotografías
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}
