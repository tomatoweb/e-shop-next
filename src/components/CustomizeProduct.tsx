const CustomizeProduct = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
          <li className="h-8 w-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </li>
          <li className="h-8 w-8 ring-1 ring-gray-300 bg-purple-500 rounded-full cursor-pointer"></li>
          <li className="relative h-8 w-8 ring-1 ring-gray-300 bg-fuchsia-500 rounded-full cursor-not-allowed">
            <div className="absolute h-[2px] w-10 bg-red-400 top-1/2 left-1/2 rotate-45 transform -translate-x-1/2 -translate-y-1/2"/>
          </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-red-400 rounded-md px-4 py-1 text-red-400 cursor-pointer">Small</li>
        <li className="ring-1 ring-red-400 rounded-md px-4 py-1 text-white bg-red-400 cursor-pointer">Medium</li>
        <li className="ring-1 ring-pink-200 rounded-md px-4 py-1 text-white bg-pink-200 cursor-not-allowed">Large</li>
      </ul>
    </div>
  )
}

export default CustomizeProduct