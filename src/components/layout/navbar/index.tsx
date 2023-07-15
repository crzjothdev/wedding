import Link from 'next/link'

import MobileMenu from './mobile-menu'
import type { Menu, User } from '@/lib/types'

const userOptions = [
    { title: 'Obsequiar', path: '/gifts' },
    { title: 'Galería', path: '/gallery' },
    { title: 'Locación', path: '/location' }
]

export default function Navbar({ user }: { user: User | null }) {
    return (
        <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6">
            <div className="md:mr-4">
                <Link href="/" aria-label="Go back home">
                    <img
                        src="/wedding-logo.webp"
                        alt="Wedding Logo"
                        className="h-[3.8rem]"
                    />
                </Link>
            </div>
            <ul className="hidden w-1/3 md:flex justify-end">
                {user?.isLoggedIn ? (
                    userOptions.map((item: Menu) => (
                        <li key={item.title}>
                            <Link
                                href={item.path}
                                className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <Link
                        href="/login"
                        className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    >
                        Iniciar Sessión
                    </Link>
                )}
            </ul>
            <div className="flex w-1/3 md:hidden justify-end">
                <MobileMenu menu={userOptions} />
            </div>
        </nav>
    )
}