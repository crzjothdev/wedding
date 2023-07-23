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
    </main>
  )
}