import Image from 'next/image'
import React from 'react'
import logo from '../../../public/assets/images/logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import hero1 from '../../../public/assets/images/hero1.jpg'
import hero2 from '../../../public/assets/images/hero2.jpg'
import CustomButton from '@/components/customize-btn';
import Showcase from './showcase';
import BannerData from '@/components/banner-data';
import ProductList from './product-list';
import ProductSale from './product-sale';
import InstagramSection from './instagram-section';


const Slider = () => {
    return (
        <div>

            <div id="animation-carousel" className="relative w-full " data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative overflow-hidden  ">
                    {/* <!-- Item 1 --> */}
                    <div className="w-full h-[100vh] transition duration-200 ease-linear" data-carousel-item>
                        <div className=' bg-contain'>
                            <Image className='w-full' src={hero1} alt='...' />
                        </div>
                        <BannerData bannerStyle="absolute top-[200px] left-[200px] w-[30%] z-1" title={"SUMMER COLLECTION"} heading1={"Fall - Winter"} heading2={"Collection 2030"} content={"A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality."} icon={<FaArrowRightLong />} />
                    </div>

                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 ">
                        <FaArrowLeftLong size={25} color='' />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10  ">
                        <FaArrowRightLong size={25} color='' />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <Showcase />
            <ProductList />
            <ProductSale />
            <InstagramSection />
        </div>


    )
}

export default Slider
