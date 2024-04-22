
import React from 'react'
import TrendsCard from '@/components/trends-card'
import blog1 from "../../../public/assets/images/blog1.jpg"
import blog2 from "../../../public/assets/images/blog2.jpg"
import blog3 from "../../../public/assets/images/blog3.jpg"

const NewTrends = () => {
    return (

        <div id='blog' className='h-[250vh] md:h-[80vh]' >
            <div className='mb-[70px]'>
                <p className='text-center text-[14px] font-semibold text-[#e93637] mb-[10px]'>LATEST NEWS</p>
                <p className='text-center text-[34px] font-semibold'>Fashion New Trends</p>
            </div>

            <div className='h-[60vh] w-[78%] mx-auto flex flex-col md:flex-row'>
                <TrendsCard img={blog1} date={"27 june 2000"} content1={"What Curling Irons Are"} content2={"The Best one"} />
                <TrendsCard img={blog2} date={"27 june 2000"} content1={"What Curling Irons Are"} content2={"The Best one"} />
                <TrendsCard img={blog3} date={"27 june 2000"} content1={"What Curling Irons Are"} content2={"The Best one"} />
            </div>
        </div>
    )
}

export default NewTrends
