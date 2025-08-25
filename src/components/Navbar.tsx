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
						<Image src="/eshop-logo.jpg" alt="" height={100} width={100} />
            </Link>
            <Menu/>
        </div>
        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-between h-full">
            {/* LEFT */}
            <div className="flex justify-center">
                <Link href="/" className="flex">
                    <Image src="/eshop-logo.jpg" alt="" height={100} width={100} />
                </Link>              
            </div>
            {/* RIGHT */}
            <div className="flex grow ml-20 justify-between items-center gap-8">
                <SearchBar/>
                <NavIcons/>
            </div>
        </div>
    </div>
  )
}

export default Navbar