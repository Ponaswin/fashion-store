import React from 'react'
import CustomButton from './customize-btn'
import style from './showcase.module.css'
const ShowcaseText = (props: any) => {

    const { content1, content2 } = props


    return (
        <div className={`${style.showcase} w-[350px]`} >
            <p className='text-[35px] font-semibold'>{content1}</p>
            <p className='text-[35px] font-semibold'>{content2 ? content2 : ""}</p>
            <div className='ps-1'>
                <CustomButton />
                <div className='w-[90px]  h-[1px] bg-black '>
                </div>
            </div>

        </div>
    )
}

export default ShowcaseText
