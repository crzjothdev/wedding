'use client'

import React, { useState } from 'react'
import useUser from '@/lib/useUser'
import Form from '@/components/modules/login-frm'
import fetchJson, { FetchError } from '@/lib/fetchJson'

export default function Login() {
    const { mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true
    })

    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="flex min-h-[100vh] items-center">
            <div className="max-w-20 mx-auto">
                <Form
                    errorMessage={errorMsg}
                    isLoading={isLoading}
                    onSubmit={async function handleSubmit({ username, password }) {
                        const body = { username, password }

                        try {
                            setIsLoading(true)
                            mutateUser(
                                await fetchJson('/api/login', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(body)
                                })
                            )
                        } catch (error) {
                            if (error instanceof FetchError) {
                                setErrorMsg(error.data.message)
                            } else {
                                console.error('An unexpected error happened:', error)
                            }
                        } finally {
                            setIsLoading(false)
                        }
                    }}
                />
            </div>
        </div>
    )
}