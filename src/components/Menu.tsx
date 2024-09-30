"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Image onClick={()=>setOpen(prev=>!prev)} src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" />
      {
      open && <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                <Link href="/">HomePage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Login</Link>
                <Link href="/">Cart(1)</Link>
              </div>
      }
    </div>
  )
}

export default Menu