import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getRequestCookie } from '@/lib/session'

export default async function Gallery() {
    const user = await getRequestCookie(cookies())

    if (!user) {
        redirect('/login')
    }

    return (
        <main className="max-w-[1000px] container md:mx-auto">
            <div className="p-4 md:py-10 md:px-0">
                <h1 className="text-[1.5rem] md:text-[2.5rem] mb-3">Eventos a realizar y locación</h1>
                <h4 className="text-lg font-bold">Ceremonia Eclesiastica</h4>
                <p className="text-md">
                    Nuestra ceremonia se realizará en la Capilla San Judas Tadeo, Suyapa 
                    a las 5 de la tarde, puedes usar de referencia el siguiente mapa
                </p>
            </div>
        </main>
    )
}