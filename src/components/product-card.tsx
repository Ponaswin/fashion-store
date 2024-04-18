"use client"
import React from 'react'
import Image from 'next/image'
import banner1 from "../../public/assets/images/banner1.jpg"
import style from './showcase.module.css'
import addToCart from './add-to-cart'

const ProductCard = (props: any) => {



    const { productName, rating, productPrice, productImg } = props


    return (
        <div className='flex flex-col  w-full gap-2 cursor-pointer  '>
            <div className=' overflow-hidden'> <Image width={400} height={400} src={productImg} alt="..." className={`  ${style.card} `} /></div>
            <p className='text-[14px] capitalize font-semibold'>{productName}</p>
            <p className='text-[18px] font-bold'>${productPrice}</p>

        </div>
    )
}

export default ProductCard
