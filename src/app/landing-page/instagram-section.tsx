import Image from 'next/image'
import React from 'react'
import instragram1 from '../../../public/assets/images/instagram-1.jpg'
import instragram2 from '../../../public/assets/images/instagram-2.jpg'
import instragram3 from '../../../public/assets/images/instagram-3.jpg'
import instragram4 from '../../../public/assets/images/instagram-4.jpg'
import instragram5 from '../../../public/assets/images/instagram-5.jpg'
import instragram6 from '../../../public/assets/images/instagram-6.jpg'
const InstagramSection = () => {

    return (
        <div className='flex justify-center items-center w-[75%] my-[100px] gap-[40px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 w-[60%]'>
                <Image src={instragram1} alt="..." />
                <Image src={instragram2} alt="..." />
                <Image src={instragram3} alt="..." />
                <Image src={instragram4} alt="..." />
                <Image src={instragram5} alt="..." />
                <Image src={instragram6} alt="..." />
            </div>
            <div className='w-[40%] flex flex-col gap-5'>
                <p className='font-medium text-[35px]'>Instagram</p>
                <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error harum, nam et ex vitae exercitationem necessitatibus? Minus, dicta blanditiis ipsam .</p>
                <p className='text-[#e93637] mt-[30px] font-medium text-[35px]'>#Male_Fashion</p>
            </div>

        </div>
    )
}

export default InstagramSection
