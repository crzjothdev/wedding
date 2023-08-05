'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import fetchJson from '@/lib/fetchJson'
import { Menu } from '@/lib/types'
import MenuIcon from '@/components/icons/menu'
import CloseIcon from '@/components/icons/close'
import useUser from '@/lib/useUser'

export default function MobileMenu({ menu }: { menu: Menu[] }) {
    const { user, isLoading, mutateUser } = useUser()
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const openMobileMenu = () => setIsOpen(true)
    const closeMobileMenu = () => setIsOpen(false)

    return (
        <>
            <button
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                data-testid="open-mobile-menu"
            >
                <MenuIcon className="h-6 text-white"/>
            </button>
            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-[100%]"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-[100%]"
                    >
                        <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6 dark:bg-black">
                            <div className="p-4">
                                <button
                                    className='mb-4'
                                    onClick={closeMobileMenu}
                                    aria-label="Close mobile menu"

                                >
                                    <CloseIcon className="h-6 text-white" />
                                </button>
                                <ul className="flex flex-col">
                                    {!isLoading && (
                                        user?.isLoggedIn ? (
                                            <>
                                                {menu.map((item: Menu) => (
                                                    <li key={item.title}>
                                                        <Link
                                                            href={item.path}
                                                            className="rounded-lg py-1 text-xl text-black transition-colors hover:text-gray-500 dark:text-white"
                                                            onClick={closeMobileMenu}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <a
                                                        className="rounded-lg py-1 text-xl text-black transition-colors hover:text-gray-500 dark:text-white"
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
                                                className="rounded-lg py-1 text-xl text-black transition-colors hover:text-gray-500 dark:text-white"
                                                onClick={closeMobileMenu}
                                            >
                                                Iniciar Sesión
                                            </Link>
                                        )
                                    )}
                                </ul>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}