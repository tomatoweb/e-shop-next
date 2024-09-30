'use client';

import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id:1, 
        url:"https://images.pexels.com/photos/20620511/pexels-photo-20620511/free-photo-of-blanc-sucre-boite-gateau-d-anniversaire.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        id:2, 
        url:"https://images.pexels.com/photos/28536693/pexels-photo-28536693/free-photo-of-chambre-minimaliste-avec-oreillers-moelleux.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        id:3, 
        url:"https://images.pexels.com/photos/17477234/pexels-photo-17477234/free-photo-of-table-blanc-verres-lunettes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
    {
        id:4, 
        url:"https://images.pexels.com/photos/28259729/pexels-photo-28259729/free-photo-of-gateau-de-mariage-elegant-a-trois-etages-avec-motif-floral.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    },
]

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image 
                    alt="" 
                    src={images[index].url} 
                    fill 
                    sizes="50vw" 
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex gap-4 ">
                {images.map((img, index) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(index)}>
                    <Image 
                        alt="" 
                        src={img.url} 
                        fill 
                        sizes="30vw" 
                        className="object-cover rounded-md"
                    />
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default ProductImages