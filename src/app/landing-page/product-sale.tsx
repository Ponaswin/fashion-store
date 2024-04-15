import Image from 'next/image'
import React from 'react'
import productSale from '../../../public/assets/images/product-sale.png'
import BannerData from '@/components/banner-data'
import { FaArrowRightLong } from 'react-icons/fa6'

const ProductSale = () => {


    // const daysLeft = () => {
    //     const date = new Date();
    //     const expireDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 29);
    //     const diffTime = Math.abs(expireDate.getTime() - date.getTime());
    //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    //     return diffDays;
    // };




    return (

        <div className='bg-[#f3f2ee] relative h-[80vh] mt-[50px] justify-between flex items-center '>
            <div className='bg-white w-[300px] h-[300px] relative' ></div>
            <div className='absolute left-[200px] flex flex-col gap-[30px]'>
                <p className='text-[30px] font-medium text-gray-400 '>Clothings Hot</p>
                <p className='text-[30px] font-medium '>Shoe Collection</p>
                <p className='text-[30px] font-medium text-gray-400 '>Accessories</p>
            </div>

            <div>
                <Image src={productSale} alt='...' />
                <div className='bg-[#111111] text-white top-[120px] right-[670px] flex flex-col items-center justify-center absolute w-[100px] h-[100px] rounded-full'>
                    <p>sale of</p>
                    <p>$29.99</p>
                </div>
            </div>

            <div>
                <BannerData title="DEAL OF THE WEEK" heading1="Multi-pocket Chest" heading2="Bag Black" />
            </div>


        </div>
    )
}

export default ProductSale
