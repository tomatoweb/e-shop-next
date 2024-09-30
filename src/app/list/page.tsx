import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import Image from "next/image"

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* CAMPAIGN */}
        <div className="hidden sm:flex justify-between bg-pink-50 h-64">
            <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
                    Grab up to 50% off on
                    <br /> Selected Products
                </h1>
                <button className="rounded-3xl bg-red-500 text-white w-max py-3 px-5 text-sm">
                    Buy Now
                </button>
            </div>
            <div className="w-1/3 relative">
                <Image src="/woman.png" alt="" fill className="object-contain" />
            </div>
        </div>
        {/* FILTER */}
        <Filter/>
        {/* PRODUCTS */}
        <h1 className="mt-12 font-semibold text-lg">Shoes For You!</h1>
        <ProductList/>
    </div>
  )
}

export default ListPage