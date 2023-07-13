import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import useSWR from 'swr'
import { User } from '@/lib/types'

export default function useUser({
    redirectTo = '',
    redirectIfFound = false
} = {}) {
    const fetcher = (...args: any) => fetch(...args).then(res => res.json())

    const { data: user, mutate: mutateUser } = useSWR<User>('/api/user', fetcher)

    useEffect(() => {
        if (!redirectTo || !user) return
        if (
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            (redirectIfFound && user?.isLoggedIn)
        ) {
            redirect(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo])

    return { user, mutateUser }
}