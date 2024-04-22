"use client"
import React from 'react'
import Image from 'next/image'
import footer from '../../../public/assets/images/footer.png'
import payment from '../../../public/assets/images/payment.png'
import { GoMail } from "react-icons/go";


const Footer = () => {
  return (
    <div id='contact' className='bg-[#111111] w-full p-5 md:px-[150px] md:py-[60px] '>
      <div className='text-white  text-center grid grid-cols-1 md:grid-cols-4  '>
        <div className='flex w-[100%] p-5 md:border-none border-b border-gray-400 flex-col items-center gap-5 '>
          <Image src={footer} width={200} alt="Logo" />
          <p>The customer is at the heart of our unique business model, which includes design.</p>
          <div>
            <Image className='cursor-pointer' src={payment} width={200} alt="payment" />
          </div>
        </div>
        <div className='flex w-[100%] p-5 md:border-none border-b border-gray-400 flex-col items-center gap-5'>
          <p className='h2'>SHOPPING</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Clothing Store</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Trending Shoes</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Accessories</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Sale</p>
        </div>
        <div className='flex w-[100%] p-5 md:border-none border-b border-gray-400 flex-col items-center gap-5'>
          <p className='h2'>SHOPPING</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Contact Us</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Payment Methods</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Delivery</p>
          <p className='cursor-pointer text-gray-300 hover:text-gray-500'>Return & Exchanges</p>
        </div>
        <div className='flex w-[100%] p-5  flex-col items-center gap-5'>
          <p className='h2'>NEW LETTER</p>
          <p>Be the first to know about new arrivals, look books, sales & promos!</p>
          <div className='flex items-center border-b-2 justify-between pb-2 '>
            <input placeholder='Your email' type="text" className='border-none outline-none bg-transparent  text-white' />
            <GoMail />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
