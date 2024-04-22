import Image from 'next/image'
import React from 'react'
import Magnifier from '../../public/assets/images/magnifier.png'

const NoResultFound = () => {
    return (
        <div className='flex-col items-center  justify-center'>
            <Image src={Magnifier} alt="..."></Image>
            <p className='text-[30px] text-gray-500 font-semibold'>No result found</p>
        </div>
    )
}

export default NoResultFound