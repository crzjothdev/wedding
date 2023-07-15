import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getRequestCookie } from '@/lib/session'
import type { User } from '@/lib/types'

export default async function Location() {
    const user = await getRequestCookie(cookies())

    if (!user) {
        redirect('/login')
    }

    return (
        <div>Información del usuario {user.login}</div>
    )
}