import Image from 'next/image'
import productSale from '../../../public/assets/images/product-sale.png'
import BannerData from '@/components/banner-data'
import { FaArrowRightLong } from 'react-icons/fa6'
import React, { useState, useEffect } from "react";
import hero2edit from '../../../public/assets/images/hero2edit.jpg'

const ProductSale = () => {




    return (


        <div className='bg-[#f3f2ee] mt-[50px] flex flex-col md:flex-row items-center justify-around h-[180vh] md:h-[80vh]'>

            <div className='bg-white w-[300px] rounded flex gap-[20px] flex-col items-center justify-center h-[300px]'>
                <p className='text-[35px] text-gray-500 '>Clothings Hot</p>
                <p className='text-[35px] text-black '> Shoe Collection</p>
                <p className='text-[35px] text-gray-500 '>Accessories</p>
            </div>

            <Image src={productSale} alt="..." />

            <BannerData title={"DEAL OF THE WEEK"} heading1={"Multi-pocket Chest "} heading2={"Bag Black"} content={"29 : 15 : 52 : 39"} />

        </div>

    )
}

export default ProductSale
