import Link from 'next/link'

import LogoIcon from '@/components/icons/logo'
import MobileMenu from './mobile-menu'
import { Menu } from '@/lib/types'

const menuItems = [
    { title: 'Home', path: '/home' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Services', path: '/services' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact Us', path: '/contact-use' }
]

export default function Navbar() {
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
                {menuItems.map((item: Menu) => (
                    <li key={item.title}>
                        <Link
                            href={item.path}
                            className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex w-1/3 md:hidden justify-end">
                <MobileMenu menu={menuItems} />
            </div>
        </nav>
    )
}