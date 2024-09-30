import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px4 lg:px-8 xl:px-16 2xl:px-64 relative">
        {/* MOBILE */}
        <div className="h-full flex items-center justify-between md:hidden">
            <Link href="/">
                <div className="text-2xl tracking-wide">DOTdEV</div>
            </Link>
            <Menu/>
        </div>
        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-center h-full gap-8">
            {/* LEFT */}
            <div className="flex w-1/3 xl:w-1/2 justify-center gap-12">
                <Link href="/" className="flex gap-3 items-center">
                    <Image src="/logo.png" alt="" height={24} width={24} />
                    <div className="text-2xl tracking-wide">DOTDEV</div>
                </Link>
                <div className="hidden xl:flex items-center gap-4">
                    <Link href="/">HomePage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>                
            </div>
            {/* RIGHT */}
            <div className="flex w-2/3 xl:w-1/2 justify-between items-center gap-8">
                <SearchBar/>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar