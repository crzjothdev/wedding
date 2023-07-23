import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const cookieName = process.env.SECRET_COOKIE_NAME as string

    const response = NextResponse.json({ isLoggedIn: false, login: '', avatarUrl: ''})

    response.cookies.delete(cookieName)

    return response
}