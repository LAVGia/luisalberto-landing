export const metadata = {
  title: "LuisAlbertoVG",
}

export default function Home() {
  return (
    <main className="bg-[#0F0F10] text-[#F5F2ED] overflow-x-hidden 
min-h-screen">

      <section className="min-h-screen flex items-center px-8 md:px-20 
py-32">

        <div className="max-w-6xl">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm 
mb-10">
            Productor Audiovisual
          </p>

          <h1 className="text-6xl md:text-[8rem] xl:text-[10rem] 
font-black leading-[0.85] tracking-[-0.08em]">

            Luis Alberto
            <br />

            <span className="text-[#C6A77D]">
              VG
            </span>

          </h1>

          <h2 className="text-2xl md:text-4xl text-[#F5F2ED] font-light 
mt-14 max-w-4xl leading-relaxed">

            Narrativa visual para historias que merecen permanecer.

          </h2>

          <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl mt-10 
leading-[1.9] font-light">

            Bodas, documental, retrato y producción audiovisual con una 
estética cinematográfica y emocional.

          </p>

          <div className="flex flex-wrap gap-4 mt-16">

            <a
              href="#services"
              className="border border-white/10 bg-[#171719]/70 px-8 py-4 
rounded-full text-sm tracking-[0.18em] uppercase hover:border-[#C6A77D]/50 
hover:text-[#C6A77D] transition-all duration-500"
            >
              Narrativa Visual
            </a>

            <a
              href="#gallery"
              className="border border-white/10 px-8 py-4 rounded-full 
text-sm tracking-[0.18em] uppercase hover:border-[#C6A77D]/50 
hover:text-[#C6A77D] transition-all duration-500"
            >
              Tu Foto
            </a>

          </div>

        </div>

      </section>

      <section
        id="services"
        className="px-8 md:px-20 py-40"
      >

        <div className="max-w-4xl mb-24">

          <p className="uppercase tracking-[0.45em] text-[#A8A29E] text-sm 
mb-8">
            Narrativa Visual
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] 
tracking-[-0.08em]">

            Cada proyecto
            <br />
            tiene una
            <br />
            atmósfera distinta.

          </h2>

          <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl mt-12 
leading-[1.9] font-light">

            La imagen correcta puede convertir un momento en memoria.

          </p>

        </div>

      </section>

      <section
        id="gallery"
        className="px-8 md:px-20 py-44"
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
            imagen también
            <br />
            sea tuya.

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
bg-[#171719]/70 px-8 py-4 rounded-full text-sm tracking-[0.18em] uppercase 
hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all 
duration-500"
            >
              Buscar Fotografías
            </a>

          </div>

        </div>

      </section>

      <section className="px-8 md:px-20 py-52 text-center">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] 
tracking-[-0.08em]">

            ¿Tienes una
            <br />
            historia que contar?

          </h2>

          <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl 
mx-auto mt-12 leading-[1.9] font-light">

            Producción visual cinematográfica para proyectos, eventos y 
personas con identidad propia.

          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-16">

            <a
              href="https://wa.me/527351210954"
              target="_blank"
              className="border border-white/10 bg-[#171719]/70 px-8 py-4 
rounded-full text-sm tracking-[0.18em] uppercase hover:border-[#C6A77D]/50 
hover:text-[#C6A77D] transition-all duration-500"
            >
              Iniciar Proyecto
            </a>

          </div>

          <p className="text-[#6B6762] text-sm tracking-[0.25em] uppercase 
mt-20">

            Diseñado para permanecer en el tiempo.

          </p>

        </div>

      </section>

    </main>
  )
}
