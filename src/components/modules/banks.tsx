'use client'

import Image from 'next/image'
import CopyIcon from '@/components/icons/copy'

export default function Banks() {

    const toClipboard = (account: string) => {
        navigator.clipboard.writeText(account)
    }

    return (
        <ul className="py-2">
            <li className="">
                <div className="py-2 px-4 flex bg-gray-500/10 rounded-md">
                    <div className="relative aspect-square  my-auto w-10 md:w-20 mr-2">
                        <Image src="/logo-bac.webp" alt="Bac Logo" fill={true} />
                    </div>
                    <div className="flex grow relative items-center my-2">
                        <div className="">
                            <h3 className="font-bold text-lg mb-0">4444 4444 4444 4444</h3>
                            <span className="text-sm">BAC Credomatic</span>
                        </div>
                        <button
                            className="absolute right-0 font-medium focus:ring-4 focus:outline-none rounded-lg text-sm p-2.5 text-center inline-flex items-center"
                            onClick={() => toClipboard('4444 4444 4444 4444')}
                        >
                            <CopyIcon className="h-6 text-white" />
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    )
}