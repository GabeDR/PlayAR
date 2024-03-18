import logo from "./logo.png"
import Image from "next/image"
import NavMenu from "./nav-menu"

export default function Header() {
    return (<div className="flex justify-between py-4 sticky top-0 bg-white"><Image src={logo} alt="logo" className="h-8 w-fit" /><NavMenu /></div>)
}