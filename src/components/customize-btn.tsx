import React from 'react'

const CustomButton = (props?: any) => {

    const { btnName, icon, btnStyle } = props

    return (

        <button className={`flex items-center  text-[14px] gap-2 font-bold tracking-widest ${btnStyle}`}>
            {btnName ? btnName : "SHOP NOW"} {icon ? icon : ""}
        </button>

    )
}

export default CustomButton
