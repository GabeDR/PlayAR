import logo from "./logo.png"
import Image from "next/image"
import NavMenu from "./nav-menu"

export default function Header() {
    return (
        <div className="flex justify-center items-center py-4 sticky top-0 px-8 z-50 bg-white/80 backdrop-blur-sm">
            <div className="bg-white shadow-md rounded-full px-8 py-2 flex items-center justify-between w-full max-w-2xl">
                <a href="/" className="flex-shrink-0">
                    <Image src={logo} alt="logo" className="h-9 w-fit" />
                </a>
                <div className="flex items-center gap-4">
                    <NavMenu />
                    <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-2xl transition-colors">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
}