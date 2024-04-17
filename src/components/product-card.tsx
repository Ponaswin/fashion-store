"use client"
import React from 'react'
import Image from 'next/image'
import banner1 from "../../public/assets/images/banner1.jpg"

const ProductCard = (props: any) => {



    const { productName, rating, productPrice, productImg } = props


    return (
        <div className='flex flex-col w-full gap-2 cursor-pointer  '>
            <Image width={200} height={200} src={productImg} alt="..." className='w-full' />
            <p className='text-[14px] capitalize font-semibold'>{productName}</p>
            <p className='text-[18px] font-bold'>${productPrice}</p>
           
        </div>
    )
}

export default ProductCard
