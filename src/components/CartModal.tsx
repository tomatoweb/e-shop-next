import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
  <div className="absolute w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-12 right-0 flex flex-col gap-6 z-20 bg-white">
    {!cartItems ? (
      <div>Cart is empty</div>
    ) : (
      <>
        <h2 className="text-xl">Shopping Cart</h2>
        {/* LIST */}
        <div className="flex flex-col gap-8">
          {/* ITEM */}
          <div className="flex gap-4">
            <Image 
              src="https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-cafe-et-the-turcs-sur-un-plateau-traditionnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              width={72} height={96} 
              alt=""
              className="object-cover rounded-md"
              />
            {/* TOP */}
            <div className="flex flex-col justify-between w-full">
              <div>
                {/* TITLE */}
                <div className="flex justify-between items-center gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49.5</div>
                </div>
                <div className="text-sm text-gray-500">
                  available
                </div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
          {/* ITEM */}
          <div className="flex gap-4">
            <Image 
              src="https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-cafe-et-the-turcs-sur-un-plateau-traditionnel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
              width={72} height={96} 
              alt=""
              className="object-cover rounded-md"
              />
            {/* TOP */}
            <div className="flex flex-col justify-between w-full">
              <div>
                {/* TITLE */}
                <div className="flex justify-between items-center gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49.5</div>
                </div>
                <div className="text-sm text-gray-500">
                  available
                </div>
              </div>
              {/* BOTTOM */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty. 2</span>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div>
          <div className="flex justify-between items-center font-semibold">
            <span>SubTotal</span>
            <span>$49.5</span>
          </div>
          <div className="text-gray-500 text-sm mt-2 mb-4">
            Shipping and taxes calculated at checkout.
          </div>
          <div className="flex justify-between items-center text-sm">
            <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">View Cart</button>
            <button className="rounded-md bg-black text-white px-4 py-3">Checkout</button>
          </div>
        </div>
      </>
    )}
  </div>
  )
}

export default CartModal