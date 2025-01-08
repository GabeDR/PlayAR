import logo from "./logo.png"
import Image from "next/image"
import NavMenu from "./nav-menu"
import { ThemeToggle } from "./components/theme-toggle"

export default function Header() {
    return (
        <div className="flex justify-between items-center py-4 sticky top-0 border-b px-8" style={{ backgroundColor: 'hsl(var(--background))' }}>
            <a href="/">
                <Image src={logo} alt="logo" className="h-9 w-fit" />
            </a>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <NavMenu />
            </div>
        </div>
    );
}