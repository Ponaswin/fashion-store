"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/assets/images/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import hero1 from '../../../public/assets/images/hero1.jpg'
import hero2 from '../../../public/assets/images/hero2.jpg'
import Showcase from './showcase';
import BannerData from '@/components/banner-data';
import ProductList from './product-list';
import { useRouter } from 'next/navigation';
import ProductSale from './product-sale';
import InstagramSection from './instagram-section';
import NewTrends from './new-trends';
import style from './slider.module.css'
import NoResultFound from '@/components/no-result-found';

const Slider = () => {

    const router = useRouter()

    const [arrowClick, setArrowClick] = useState<boolean>(false)

    return (
        <div>

            <div id="animation-carousel" className="relative w-full " data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative overflow-hidden  ">
                    {/* <!-- Item 1 --> */}
                    <div className={` ${style.slider}w-full h-[100vh]`} data-carousel-item>
                        <div className=' bg-contain'>
                            <Image className='w-full' src={arrowClick ? hero1 : hero2} alt='...' />
                        </div>
                        <BannerData bannerStyle="absolute top-[200px] left-[200px] w-[30%] z-1" title={"SUMMER COLLECTION"} heading1={"Fall - Winter"} heading2={"Collection 2030"} content={"A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality."} contentStyle="text-[14px]" icon={<FaArrowRightLong />} />
                    </div>

                </div>
                {/* <!-- Slider controls --> */}
                <button onClick={() => setArrowClick(!arrowClick)} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 ">
                        <FaArrowLeftLong size={25} color='' />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={() => setArrowClick(!arrowClick)} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10  ">
                        <FaArrowRightLong size={25} color='' />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            {/* <Showcase /> */}
            <ProductList />
            <ProductSale />
            <InstagramSection />
            <NewTrends />
        </div>


    )
}

export default Slider
