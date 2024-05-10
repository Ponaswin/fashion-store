import Image from 'next/image'
import productSale from '../../../public/assets/images/product-sale.png'
import BannerData from '@/components/banner-data'
import { FaArrowRightLong } from 'react-icons/fa6'
import React, { useState, useEffect } from "react";
import hero2edit from '../../../public/assets/images/hero2edit.jpg'

const ProductSale = () => {

    const [timeLeft, setTimeLeft] = useState(1000000);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft === 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: any) => {
        const days = Math.floor(time / 86400);
        const hours = Math.floor((time % 86400) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${days < 10 ? '0' + days : days} : ${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
    };



    return (


        <div className='bg-[#f3f2ee] mt-[50px] flex flex-col md:flex-row items-center justify-around h-[180vh] md:h-[80vh]'>

            <div className='bg-white w-[300px] rounded flex gap-[20px] flex-col items-center justify-center h-[300px]'>
                <p className='text-[35px] text-gray-500 '>Clothings Hot</p>
                <p className='text-[35px] text-black '> Shoe Collection</p>
                <p className='text-[35px] text-gray-500 '>Accessories</p>
            </div>

            <Image src={productSale} alt="..." />

            <BannerData title={"DEAL OF THE WEEK"} heading1={"Multi-pocket Chest "} heading2={"Bag Black"}
                content={formatTime(timeLeft)} content2={`days : hrs : min  : sec`}
                contentStyle="text-[28px] font-bold"
            />

        </div>

    )
}

export default ProductSale
