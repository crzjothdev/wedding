import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { getRequestCookie } from '@/lib/session'
import { User } from '@/lib/types'

export async function GET(req: NextRequest) {
    const user = await getRequestCookie(cookies())

    console.log(user?.isLoggedIn)

    if (user) {
        return NextResponse.json({
            ...user,
            isLoggedIn: true
        })
    } else {
        return NextResponse.json({
            login: '',
            isLoggedIn: false,
            avatarUrl: ''
        })
    }
}
