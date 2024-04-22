"use client"

import React, { useEffect, useState } from 'react'
import CustomButton from './customize-btn'
import { useRouter } from 'next/navigation'
const BannerData = (props: any) => {



   
    const { title, heading1, heading2, content, icon, bannerStyle, contentStyle, onClick } = props


    const router = useRouter()


    return (
        <div className={`flex flex-col gap-8 ${bannerStyle} p-4  `}>
            <p className="text-[#e53637]  text-[14px] font-medium tracking-widest">{title}</p>
            <p className='text-[46px] text-black font-semibold' >{heading1} <br />{heading2 ? heading2 : ""}</p>
            <div className={`${contentStyle}`}>29 : 17 : 18 : 39</div>
            <div onClick={() =>
                router.push("/all-products")
            }><CustomButton btnName="SHOP NOW" icon={icon} btnStyle="w-[50%] py-[18px] flex items-center justify-center bg-black text-white  text-[14px]" /></div>
        </div>
    )
}

export default BannerData
