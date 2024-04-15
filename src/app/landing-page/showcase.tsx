"use client"
import CustomButton from '@/components/customize-btn'
import React from 'react'
import banner2 from '../../../public/assets/images/banner2.jpg'
import banner3 from '../../../public/assets/images/banner3.jpg'
import banner1 from '../../../public/assets/images/banner1.jpg'
import Image from 'next/image'
import ShowcaseText from '../../components/showcase-text'

const Showcase = () => {
    return (

        <div className=' w-full h-[150vh] relative  '>

            <div className='absolute top-[100px] left-[770px]'>
                <div className='absolute z-10 top-[150px] left-[-210px]' ><ShowcaseText content1="Clothing" content2="Collections 2030" /></div>
                <div className='relative'><Image src={banner1} alt="..." /></div>
            </div>
            <div className='absolute top-[450px] left-[160px]'>
                <div className='absolute z-10 top-[480px]' ><ShowcaseText content1="Accessories" /></div>
                <div className='relative'><Image src={banner2} alt="..." /></div>
            </div>

            <div className='absolute top-[650px] left-[830px]'>
                <div className='absolute z-20 top-[130px] left-[-170px]'><ShowcaseText content1="Shoes Spring" content2="2030" /></div>
                <div className='relative'><Image src={banner3} alt="..." /></div>
            </div>

        </div >
    )
}

export default Showcase
