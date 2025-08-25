"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<button
				className="hover:bg-gray-200 xl rounded-lg transition-all duration-300"
				onClick={() => setOpen(prev => !prev)}>
				<svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="black">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H20M4 12H20M4 18H20" />
				</svg>
			</button>
			{/* <Image onClick={() => setOpen(prev => !prev)} src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" /> */}
			{
				open && <div className={`absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10`}>
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