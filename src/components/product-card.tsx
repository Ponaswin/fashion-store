import React from 'react'
import Image from 'next/image'
import banner1 from "../../public/assets/images/banner1.jpg"

const ProductCard = (props: any) => {


    return (
        <div className='flex flex-col w-full gap-2 cursor-pointer  '>
            <Image src={banner1} alt="..." className='w-full' />
            <p>title</p>
            <div>star rating</div>
            <div><p>$00.00</p> <div><span></span><span></span><span></span></div></div>
        </div>
    )
}

export default ProductCard
