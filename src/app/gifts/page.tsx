import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getRequestCookie } from '@/lib/session'
import Banks from '@/components/modules/banks'

export default async function Gifts() {
    const user = await getRequestCookie(cookies())

    if (!user) {
        redirect('/login')
    }

    return (
        <main className="max-w-[1000px] container md:mx-auto">
            <div className="px-4 py-[3rem] md:px-0 md:py-10 min-h-screen">
                <h1 className="text-[1.8rem] md:text-[2.5rem] mb-3">
                    Información de regalos y obsequios
                </h1>
                <h2 className="mb-5">
                    Por facilidad y conveniencia decidimos aceptar regalos en efectivo,
                    para ello puedes elegir entre una de nuestras siguientes cuentas bancarias:
                </h2>
                <Banks />
            </div>
        </main>
    )
}