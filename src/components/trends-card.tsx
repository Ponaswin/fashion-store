import React from 'react'

import { IoCalendarNumberOutline } from "react-icons/io5";

import Image from 'next/image'
import CustomButton from './customize-btn';
import style from './showcase.module.css'


const TrendsCard = (props: any) => {

  const { content1, content2, img, date } = props



  return (

    


    <div className={`relative flex flex-col justify-center items-center w-[400px] mb-[250px] `}>
      <div className=''>
        <Image src={img} alt="..." />
      </div>

      <div className={`bg-white w-[300px]  ${style.shadow} flex gap-2 flex-col ps-[25px] py-5  absolute top-[230px] `}>
        <div className={`flex items-center mb-[5px] gap-4`}><IoCalendarNumberOutline /> <p className='text-[13px]'>{date}</p></div>
        <div><div className={`text-[18px] margin-0 font-medium tracking-wide leading-tight`}>{content1}</div>
          <div className={`text-[18px] margin-0 font-medium tracking-wide leading-tight`}>{content2}</div></div>

        <div className='mt-2'><CustomButton btnName="READ MORE" btnStyle="w-[50%] " />
          <div className={` ${style.horizontal}`}></div></div>

      </div>

    </div>
  )
}

export default TrendsCard
