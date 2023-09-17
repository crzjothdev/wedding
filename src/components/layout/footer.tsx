import InstagramIcon from '@/components/icons/instagram'
import TwitterIcon from '@/components/icons/twitter'

export default function Footer() {
    return (
        <footer className="flex flex-col p-4 md:flex-row md:px-8 md:py-[4rem] text-white dark:bg-black">
            <div className="grow flex items-center py-4 md:py-0">
            </div>
            <hr className="h-[2px] border-0 bg-gray-700 my-4" />
            <div className="flex">
                <a
                    className="block p-2 hover:bg-gray-700 rounded"
                    href="#"
                >

                    <InstagramIcon className="h-7 text-white" />
                </a>
                <a
                    className="block p-2 hover:bg-gray-700 rounded"
                    href="#"
                >

                    <TwitterIcon className="h-7 text-white" />
                </a>
            </div>
        </footer>
    )
}