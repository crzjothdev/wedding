import Image from 'next/image'
import localFont from 'next/font/local'

const font = localFont({ src: './agathiasstenchy.ttf' })

export default function Home() {
  return (
    <main className={`${font.className} max-w-[1000px] container md:mx-auto`}>
      <div className="text-center p-2 md:py-[15rem] md:px-0 relative bg-white/[0.7]">
        <Image
          src="/background.png"
          alt="background"
          fill={true}
          className="object-contain"
          style={{ zIndex: -1 }}
        />
        <div className="mb-11">
          <h1 className="text-[6rem]">
            Jeffry <span className="text-[4rem]">&</span> Andrea
          </h1>
          <p className="text-xl">
            Tenemos el honor de invitarle a nuestro enlace matrimonial
          </p>
          <p className="text-[4rem]">
            23 | SEP | 23
          </p>
        </div>
        <div className="mb-11">
          <p className="font-bold text-xl mb-4">
            En compañia de nuestros padres
          </p>
          <p>Joel Zacarías / Rosa Gutiérrez</p>
          <p>Carlos Chavarría / Verónica Zavala</p>
          <p className="font-bold text-xl mt-4">
            Queremos compartir la alegría de nuestra unión
          </p>
        </div>
        <div>
          <p className="text-xl">Ceremonia Eclesiastica</p>
          <p className="text-[1.5rem]">Capilla San Judas Tadeo, Suyapa | 5:00 pm</p>
          <p className="text-xl">Resepción</p>
          <p className="text-[1.5rem]">Club BCIE | 7:00 pm</p>
        </div>
      </div>

      {/* <section className="px-4 md:px-0 mb-6 md:mb-10">
        <div className="relative flex justify-center items-center h-[30rem] md:h-screen bg-center bg-cover bg-[url('https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2019/11/weeding-bg.jpg')]">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#29334a]/60"/>
          <div className="relative text-center">
            <h1 className="text-[3rem] md:text-[7rem] text-slate-50">WEDDING</h1>
            <h2 className="text-2xl md:text-4xl text-slate-200">Zacarias Valladares</h2>
          </div>
        </div>
      </section>
      <section className="px-4 mb-6 md:mb-10 md:px-0">
        <div className="bg-zinc-50 py-10 md:py-20">
          <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto">
            <div>
              <Image
                src="https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2017/11/pic12-free-img.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="mt-10 md:ml-20 md:mt-0 grow">
              <h3 className="text-2xl mb-3">We are excite to invite you to our wedding</h3>
              <p>
                It will be on Sep 15, 2023 and you are invited. We'll be happy to have
                you in oune of our most special day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-0 mb-6 md:mb-10">
        <div className="flex flex-col md:flex-row justify-center h-[30rem] bg-center bg-cover bg-[url('https://websitedemos.net/wedding-planner-04/wp-content/uploads/sites/147/2019/11/hero.jpg')]">
          <div className="grow-1/2">
          </div>
        </div>
      </section> */}
    </main>
  )
}