import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getRequestCookie, getSealedCookieValue } from '@/lib/session'
import { confirmAttendance } from '@/lib/firebase/users'

export async function GET() {
    const user = await getRequestCookie(cookies())

    try {
        if (!user) {
            throw new Error('There is no session data')
        }

        await confirmAttendance(user.login)

        user.hasConfirmed = true

        const response = NextResponse.json(user)

        const cookieValue = await getSealedCookieValue(user)
        const cookieName = process.env.SECRET_COOKIE_NAME as string

        response.cookies.set(cookieName, cookieValue)

        return response
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 400 })
    }
}