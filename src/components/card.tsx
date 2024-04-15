import React from 'react'

const Card = (props: any) => {


    const { btnStyle, img } = props



    return (
        <div className={`bg-[#ebecf1] ${btnStyle}`}  >
            {img}
        </div>
    )
}

export default Card
