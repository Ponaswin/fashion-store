"use client"
import React from 'react'
import Image from 'next/image'
import TrendsCard from '@/components/trends-card'
import blog1 from '../../../public/assets/images/blog1.jpg'
import blog2 from '../../../public/assets/images/blog2.jpg'
import blog3 from '../../../public/assets/images/blog3.jpg'

const blog = () => {
    return (

        <div>



            <div className='relative mb-2'>
                <Image className='' src='https://themewagon.github.io/malefashion/img/breadcrumb-bg.jpg' width={1920} height={500} alt="..."></Image>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-3xl font-bold text-white">OUR BLOG</h1>
                </div>
            </div>

            <div className='h-[60vh] w-[78%] mx-auto mt-[100px] flex flex-col md:flex-row'>
                <TrendsCard img={blog1} date={"27 june 2000"} content1={"What Curling Irons Are"} content2={"The Best one"} />
                <TrendsCard img={blog2} date={"27 june 2000"} content1={"What Curling Irons Are"} content2={"The Best one"} />
                <TrendsCard img={blog3} date={"27 june 2000"} content1={"What Curling Irons Are"} content2={"The Best one"} />
            </div>

        </div>
    )
}

export default blog
