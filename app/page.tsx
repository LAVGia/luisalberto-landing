export const metadata = {
  title: "LuisAlbertoVG",
}

export default function Home() {
  return (
    <main className="bg-[#141210] text-[#F5F2ED] h-screen 
overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[#141210]" />

        <div className="absolute top-[-15%] right-[-10%] w-[700px] 
h-[700px] bg-[#C6A77D]/[0.08] rounded-full blur-[160px]" />

        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] 
h-[600px] bg-[#8E6F4E]/[0.08] rounded-full blur-[160px]" />

      </div>

      {/* HERO */}

      <section className="h-screen snap-start flex items-center px-8 
md:px-20 relative overflow-hidden">

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
              className="border border-white/10 bg-[#1B1816]/70 
backdrop-blur-md px-8 py-4 rounded-full text-sm tracking-[0.18em] 
uppercase hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all 
duration-700"
            >
              Narrativa Visual
            </a>

            <a
              href="#gallery"
              className="border border-white/10 bg-[#1B1816]/50 
backdrop-blur-md px-8 py-4 rounded-full text-sm tracking-[0.18em] 
uppercase hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all 
duration-700"
            >
              Tu Foto
            </a>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="h-screen snap-start flex items-center px-8 md:px-20 
relative overflow-hidden"
      >

        <div className="absolute top-[10%] right-[5%] w-[340px] h-[340px] 
rounded-full bg-[#C6A77D]/[0.05] blur-[140px]" />

        <div className="max-w-6xl w-full">

          <div className="max-w-4xl mb-20">

            <p className="uppercase tracking-[0.45em] text-[#A8A29E] 
text-sm mb-8">
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

            <p className="text-[#A8A29E] text-lg md:text-xl max-w-3xl 
mt-12 leading-[1.9] font-light">

              La imagen correcta puede convertir un momento en memoria.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            <div className="border border-white/10 bg-[#1B1816]/70 
backdrop-blur-md rounded-[2rem] p-8 hover:border-[#C6A77D]/30 
transition-all duration-700">

              <h3 className="text-2xl font-black mb-6">
                Bodas Cinemáticas
              </h3>

              <p className="text-[#A8A29E] leading-[1.8]">
                Historias íntimas contadas con emoción y sensibilidad 
documental.
              </p>

            </div>

            <div className="border border-white/10 bg-[#1B1816]/70 
backdrop-blur-md rounded-[2rem] p-8 hover:border-[#C6A77D]/30 
transition-all duration-700">

              <h3 className="text-2xl font-black mb-6">
                Retrato Editorial
              </h3>

              <p className="text-[#A8A29E] leading-[1.8]">
                Imagen personal con estética cinematográfica y dirección 
visual cuidada.
              </p>

            </div>

            <div className="border border-white/10 bg-[#1B1816]/70 
backdrop-blur-md rounded-[2rem] p-8 hover:border-[#C6A77D]/30 
transition-all duration-700">

              <h3 className="text-2xl font-black mb-6">
                Documental Humano
              </h3>

              <p className="text-[#A8A29E] leading-[1.8]">
                Momentos reales observados desde una narrativa visual 
auténtica.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="h-screen snap-start flex items-center px-8 md:px-20 
relative overflow-hidden"
      >

        <div className="absolute bottom-[0%] left-[0%] w-[400px] h-[400px] 
rounded-full bg-[#8E6F4E]/[0.05] blur-[160px]" />

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

      {/* CONTACT */}

      <section className="h-screen snap-start flex items-center 
justify-center px-8 md:px-20 text-center relative overflow-hidden">

        <div className="absolute top-[20%] left-[15%] w-[320px] h-[320px] 
rounded-full bg-[#C6A77D]/[0.05] blur-[140px]" />

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
              className="border border-white/10 bg-[#1B1816]/70 
backdrop-blur-md px-8 py-4 rounded-full text-sm tracking-[0.18em] 
uppercase hover:border-[#C6A77D]/50 hover:text-[#C6A77D] transition-all 
duration-700"
            >
              Iniciar Proyecto
            </a>

          </div>

          <p className="text-[#6B6762] text-sm tracking-[0.25em] uppercase 
mt-20">

            Diseñado para perdurar.

          </p>

        </div>

      </section>

    </main>
  )
}
