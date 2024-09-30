'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isLogged = true;
  const router = useRouter();
  const handleProfile = () => {
    if (!isLogged) {
      router.push('/login');
    } else {
        setIsProfileOpen(prev=>!prev);  
    }
  }

  const handleCart = () => {
    if (!isLogged) {
        router.push("/login");
    } else {
        setIsCartOpen(prev=>!prev);
    }
  }

  return (
    <div className="flex gap-4 xl:gap-6 relative">
        <Image onClick={handleProfile} alt="" src="/profile.png" width={22} height={22} className="cursor-pointer" />
        {isProfileOpen && (
        <div className="absolute top-8 text-sm p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="cursor-pointer">Logout</div>
        </div>
        )}
        <Image alt="" src="/notification.png" width={22} height={22} className="cursor-pointer" />
        <div onClick={handleCart} className="relative cursor-pointer">            
            <Image alt="" src="/cart.png" width={22} height={22}  />
            <div className="absolute -top-4 -right-4 rounded-full w-6 h-6  bg-badgeRed text-white text-sm flex items-center justify-center">
                22
            </div>
        </div>

        {isCartOpen && (
                <CartModal/>
            
        )}
    </div>
  )
}

export default NavIcons