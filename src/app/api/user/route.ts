import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getRequestCookie } from '@/lib/session'

export async function GET() {
    const user = await getRequestCookie(cookies())

    if (user) {
        return NextResponse.json({
            ...user,
            isLoggedIn: true
        })
    } else {
        return NextResponse.json({
            login: '',
            isLoggedIn: false,
            hasConfirmed: false
        })
    }
}
