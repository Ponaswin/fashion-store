"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import hero2edit from '../../../public/assets/images/hero2edit.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '@/redux/slices/cart-popup-slice';

const Slider = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        dispatch(closePopup())
    }, [])


    const [arrowClick, setArrowClick] = useState<boolean>(false)



    return (
        <div>







            <div id="animation-carousel" className="relative w-full " data-carousel="static">
                <div className="relative overflow-hidden  ">
                    <div className={` hidden md:block ${style.slider}w-full h-[100vh]`} data-carousel-item>
                        <div className=' md:bg-contain'>
                            <Image className='w-full' src={arrowClick ? hero1 : hero2} alt='...' />
                        </div>
                        <div className='md:block hidden'>
                            <BannerData bannerStyle="absolute top-[200px] left-[200px] w-[30%] z-1" title={"SUMMER COLLECTION"} heading1={"Fall - Winter"} heading2={"Collection 2030"} content={"A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality."} contentStyle="text-[14px]" icon={<FaArrowRightLong />} />
                        </div>
                    </div>

                    <div className={` ${style.slider}w-full h-[100vh] block md:hidden`} data-carousel-item>
                        <div className=' block md:hidden md:bg-contain'>
                            <Image className='w-full h-full' src={hero2edit} alt='...' />
                        </div>

                    </div>


                </div>

            </div>


            <ProductList />
            <ProductSale />
            <InstagramSection />
            <NewTrends />

        </div>


    )
}

export default Slider
