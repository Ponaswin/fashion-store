import React from 'react'
import CustomButton from './customize-btn'

const BannerData = (props: any) => {

    const { title, heading1, heading2, content, icon } = props



    return (
        <div className="flex flex-col gap-8 absolute top-[200px] left-[200px] z-1 p-4  w-[30%]">
            <p className="text-[#e53637]  text-[14px] font-medium tracking-widest">{title}</p>
            <p className='text-[46px] text-black font-semibold' >{heading1} <br />{heading2 ? heading2 : ""}</p>
            <p className='text-[14px]'>{content}</p>
            <CustomButton btnName="SHOP NOW" icon={icon} btnStyle="w-[50%] py-[18px] flex items-center justify-center bg-black text-white  text-[14px]" />
        </div>
    )
}

export default BannerData
