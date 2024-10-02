import Add from "@/components/Add"
import CustomizeProduct from "@/components/CustomizeProduct"
import ProductImages from "@/components/ProductImages"

const SinglePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='px-4 md:px4 lg:px-8 xl:px-16 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
            <ProductImages/>
        </div>
        {/* TEXTS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-medium">Product Name</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo, quaerat facere suscipit veniam culpa aperiam incidunt dolorem voluptate. Maiores assumenda quaerat tenetur, quas reiciendis dolor nemo voluptatum. Accusamus, harum!</p>
            <div className="h-[3px] bg-gray-100" />
            <div className="flex items-center gap-4">
                <h3 className="text-lg text-gray-500 line-through">$59</h3>
                <h2 className="font-medium text-2xl">$49</h2>
            </div>
            <div className="h-[3px] bg-gray-100" />
            <CustomizeProduct/>
            <Add/>
            <div className="h-[3px] bg-gray-100" />
            <div className="text-sm">
                <h4 className="font-medium mb-4">Title</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nobis mollitia quam iste similique delectus, non perferendis veritatis, dolorum totam exercitationem, tempora reiciendis rem error quis reprehenderit tempore beatae saepe.
                </p>
            </div>
            <div className="text-sm">
                <h4 className="font-medium mb-4">Title</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nobis mollitia quam iste similique delectus, non perferendis veritatis, dolorum totam exercitationem, tempora reiciendis rem error quis reprehenderit tempore beatae saepe.
                </p>
            </div>
            <div className="text-sm">
                <h4 className="font-medium mb-4">Title</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nobis mollitia quam iste similique delectus, non perferendis veritatis, dolorum totam exercitationem, tempora reiciendis rem error quis reprehenderit tempore beatae saepe.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SinglePage