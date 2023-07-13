import { sealData, unsealData } from 'iron-session'
import { ReadonlyRequestCookies } from 'next/dist/server/app-render'
import type { User } from './types'

export async function getSealedCookieValue(
    user: Object,
): Promise<any> {
    const session = JSON.stringify(user)
    const cookieValue = await sealData(session, {
        password: process.env.SECRET_COOKIE_PASSWORD as string
    })

    return cookieValue
}

export async function getRequestCookie(
    cookie: ReadonlyRequestCookies
): Promise<User | null> {
    const cookieName = process.env.SECRET_COOKIE_NAME as string
    const found = cookie.get(cookieName)

    if (!found) return null

    let user = await unsealData(found.value, {
        password: process.env.SECRET_COOKIE_PASSWORD as string
    })

    user = JSON.parse(user)

    return user as unknown as User
}
