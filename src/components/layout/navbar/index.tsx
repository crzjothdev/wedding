'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MobileMenu from './mobile-menu'
import type { Menu } from '@/lib/types'
import useUser from '@/lib/useUser'
import fetchJson from '@/lib/fetchJson'

const userOptions = [
    { title: 'Obsequiar', path: '/gifts' },
    { title: 'Galería', path: '/gallery' },
    { title: 'Locación', path: '/location' }
]

export default function Navbar() {
    const { user, mutateUser, isLoading } = useUser()
    const router = useRouter()

    return (
        <nav className="relative z-[1] flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
            <div className="md:mr-4">
                <Link href="/" aria-label="Go back home">
                    <img
                        src="/wedding-logo.webp"
                        alt="Wedding Logo"
                        className="h-[3.8rem]"
                    />
                </Link>
            </div>
            <ul className="hidden grow w-1/3 md:flex justify-end">
                {!isLoading && (
                    user?.isLoggedIn ? (
                        <>
                            {userOptions.map((item: Menu) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.path}
                                        className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                                    href="/api/logout"
                                    onClick={async (e) => {
                                        e.preventDefault()
                                        mutateUser(
                                            await fetchJson('/api/logout', { method: 'POST' }),
                                            false
                                        )
                                        router.push('/')
                                    }}
                                >
                                    Cerrar Sesión
                                </a>
                            </li>
                        </>
                    ) : (
                        <Link
                            href="/login"
                            className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                        >
                            Iniciar Sesión
                        </Link>
                    )
                )}
            </ul>
            <div className="flex w-1/3 md:hidden justify-end">
                <MobileMenu menu={userOptions} />
            </div>
        </nav>
    )
}