import { NextRequest, NextResponse } from 'next/server'
import { getSealedCookieValue } from '@/lib/session'
import type { User } from '@/lib/types'


import { getUser } from '@/lib/firebase/users'

export async function POST(request: NextRequest) {
    const { username, password } = await request.json()

    try {        
        const { name, secret } = await getUser(username)

        if (secret !== password) {
            return NextResponse.json(
                { message: 'Incorrect password' },
                { status: 504 }
            )
        }

        const user = { isLoggedIn: true, login: name, avatarUrl: '' } as User

        const response = NextResponse.json(user)
        
        const cookieValue = await getSealedCookieValue(user)
        const cookieName = process.env.SECRET_COOKIE_NAME as string

        response.cookies.set(cookieName, cookieValue)

        return response
    } catch (error) {
        return NextResponse.json({}, { status: 500 })
    }
}