import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className="flex justify-between gap-x-8 gap-y-16 flex-wrap mt-12">      
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[44%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
              src="https://images.pexels.com/photos/816495/pexels-photo-816495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              fill 
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
          />        
          <Image 
              src="https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              fill 
              sizes="25vw"
              className="absolute object-cover rounded-md" 
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49.5</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max px-4 py-2 text-sm hover:bg-red-500 hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[44%] lg:w-[22%]">
          <div className="relative w-full h-80">
            <Image 
                src="https://images.pexels.com/photos/816495/pexels-photo-816495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                fill 
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
            />        
            <Image 
                src="https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                fill 
                sizes="25vw"
                className="absolute object-cover rounded-md" 
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49.5</span>
          </div>
          <div className="text-sm text-gray-500">Description</div>
          <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max px-4 py-2 text-sm hover:bg-red-500 hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[44%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
              src="https://images.pexels.com/photos/816495/pexels-photo-816495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              fill 
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
          />        
          <Image 
              src="https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              fill 
              sizes="25vw"
              className="absolute object-cover rounded-md" 
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49.5</span>
        </div>
        <div className="text-sm text-gray-500">Description</div>
        <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max px-4 py-2 text-sm hover:bg-red-500 hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[44%] lg:w-[22%]">
          <div className="relative w-full h-80">
            <Image 
                src="https://images.pexels.com/photos/816495/pexels-photo-816495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                fill 
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" 
            />        
            <Image 
                src="https://images.pexels.com/photos/3639806/pexels-photo-3639806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                fill 
                sizes="25vw"
                className="absolute object-cover rounded-md" 
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49.5</span>
          </div>
          <div className="text-sm text-gray-500">Description</div>
          <button className="rounded-2xl ring-1 ring-red-500 text-red-500 w-max px-4 py-2 text-sm hover:bg-red-500 hover:text-white">Add to Cart</button>
      </Link>       
    </div>
  )
}

export default ProductList