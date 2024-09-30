'use client';

const Filter = () => {


    
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="type" className=" bg-[#EBEDED] px-4 py-2 rounded-2xl text-sm font-medium"  id="">
                    <option>Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <input 
                    type="text" 
                    name="min"
                    placeholder="min price"
                    className="ring-1 ring-gray-400 rounded-2xl pl-2 w-24 text-xs"
                />
                <input 
                    type="text" 
                    name="max"
                    placeholder="max price"
                    className="ring-1 ring-gray-400 rounded-2xl pl-2 w-24 text-xs"
                />
                <select name="size" className=" bg-[#EBEDED] px-4 py-2 rounded-2xl text-sm font-medium"  id="">
                    <option>Size</option>
                    <option value="physical">Size</option>
                </select>
                <select name="color" className=" bg-[#EBEDED] px-4 py-2 rounded-2xl text-sm font-medium"  id="">
                    <option>Color</option>
                    <option value="physical">Color</option>
                </select>
                <select 
                    name="cat" 
                    className="bg-[#EBEDED] py-2 px-4 rounded-2xl text-sm font-medium"
                >
                    <option>Category</option>
                    <option value="">New Arrival</option>
                    <option value="">Popular</option>
                </select>
                <select 
                    name="" 
                    id=""
                    className="bg-[#EBEDED] py-2 px-4 rounded-2xl text-sm font-medium"
                >
                    <option>All Filters</option>
                </select>
            </div>
            <div>
                <select 
                    name="sort" 
                    id=""
                    className="ring-1 ring-gray-400 rounded-2xl bg-white py-2 px-4 text-sm font-medium"
                >
                    <option>Sort By</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter