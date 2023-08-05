'use client'

import { useState, useRef, useEffect } from 'react'
import useUser from '@/lib/useUser'
import fetchJson from '@/lib/fetchJson'
import Spinner from '../icons/spinner'

export default function Message() {
    const { user, mutateUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)
    const [cssClass, setCssClass] = useState('h-0')
    const preValue = useRef(true)

    useEffect(() => {
        // don't do anything until the data is loaded
        if (!user || !user.isLoggedIn) return

        // run the animation if the user hadn't confirmed
        if (!user.hasConfirmed) {
            preValue.current = false
            setCssClass('animate-[growin_0.2s_ease-out] py-2')
        } else if (preValue.current == false) {
            const timer = setTimeout(() => {
                setCssClass('animate-[growout_0.2s_forwards] py-2')
            }, 2000)
            const extra = setTimeout(() => setCssClass('h-0 py-0'), 2500)
    
            return () => {
                clearTimeout(timer)
                clearTimeout(extra)
            }
        }
    }, [user])

    const handleConfirm = async () => {
        try {
            setIsLoading(true)
            mutateUser(await fetchJson('/api/confirm'))
        } catch (error) {
            console.log('error')
        } finally {
            setIsLoading(false)
        }
    }

    if (!user?.isLoggedIn) {
        return <></>
    }

    return (
        <div className={`flex items-center px-2 md:px-0 overflow-hidden justify-center bg-yellow-500/50 ${cssClass}`}>
            <span>
                {isLoading ? (
                    'Confirmando...'
                ) : (
                    user.hasConfirmed ? (
                        '¡Gracias por confirmar! Te esperamos'
                    ) : (
                        'Aún no has confirmado tu asistencia a nuestra boda'
                    )
                )}
            </span>
            {!user.hasConfirmed ? (
                <button 
                    onClick={handleConfirm}
                    className="text-center py-1 px-3 ml-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner className="h-4 w-4" /> : 'Confirmar'}
                </button>
            ) : ''}
        </div>
    )
}