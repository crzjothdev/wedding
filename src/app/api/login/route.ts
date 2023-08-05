import { NextRequest, NextResponse } from 'next/server'
import { getSealedCookieValue } from '@/lib/session'
import type { User } from '@/lib/types'


import { getUser } from '@/lib/firebase/users'

export async function POST(request: NextRequest) {
    const { username, password } = await request.json()

    try {        
        const { secret, hasConfirmed } = await getUser(username)

        if (secret !== password) {
            return NextResponse.json(
                { message: 'Contraseña incorrecta' },
                { status: 400 }
            )
        }

        const user = { isLoggedIn: true, login: username, hasConfirmed } as User

        const response = NextResponse.json(user)
        
        const cookieValue = await getSealedCookieValue(user)
        const cookieName = process.env.SECRET_COOKIE_NAME as string

        response.cookies.set(cookieName, cookieValue)

        return response
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 })
    }
}