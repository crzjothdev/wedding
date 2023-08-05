import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import useSWR from 'swr'
import fetchJson from './fetchJson'

export default function useUser({
    redirectTo = '',
    redirectIfFound = false
} = {}) {
    const { data: user, isLoading, mutate: mutateUser } = useSWR('/api/user', fetchJson)

    useEffect(() => {
        if (!redirectTo || !user) return
        if (
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            (redirectIfFound && user?.isLoggedIn)
        ) {
            redirect(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo])

    return { user, isLoading, mutateUser }
}