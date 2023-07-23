import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getRequestCookie } from '@/lib/session'
import Map from '@/components/modules/map'
import type { Coordinate } from '@/lib/types'

export default async function Location() {
    const user = await getRequestCookie(cookies())

    if (!user) {
        redirect('/login')
    }

    const church: Coordinate = {
        lat: 14.0594363,
        lng: -87.2155593
    }

    const club: Coordinate = {
        lat: 14.073901,
        lng: -87.2055758
    }

    return (
        <main className="max-w-[1000px] container md:mx-auto">
            <div className="p-4 md:py-10 md:px-0">
                <h1 className="text-[1.8rem] mb-3">Eventos a realizar y locación</h1>
                <div className="mb-10">
                    <h2 className="text-lg font-bold">Ceremonia Eclesiastica</h2>
                    <p className="text-md mb-5">
                        Nuestra ceremonia se realizará en la Capilla San Judas Tadeo, Suyapa 
                        a las 5 de la tarde, puedes usar de referencia el siguiente mapa
                    </p>
                    <Map zoom={17} center={church} className="container min-h-[700px]" />
                </div>
                <div>
                    <h2 className="text-lg font-bold">Resepción</h2>
                    <p className="text-md mb-5">
                        El Club BCIE será el lugar donde realizaremos nuestra resepción, será a
                        partir de las 7 de la tarde
                    </p>
                    <Map zoom={17} center={club} className="container min-h-[700px]" />
                </div>
            </div>
        </main>
    )
}