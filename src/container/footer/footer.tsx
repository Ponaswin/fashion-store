"use client"
import React from 'react'
import Image from 'next/image'
import footer from '../../../public/assets/images/footer.png'
import payment from '../../../public/assets/images/payment.png'
import { GoMail } from "react-icons/go";


const Footer = () => {
  return (
    <div className='bg-[#111111] w-full px-[150px] py-[60px] '>
      <div className='text-white text-center grid grid-cols-1 md:grid-cols-4  '>
        <div className='flex flex-col items-center gap-5 '>
          <Image src={footer} width={200} alt="Logo" />
          <p>The customer is at the heart of our unique business model, which includes design.</p>
          <div>
            <Image src={payment} width={200} alt="payment" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='h2'>SHOPPING</p>
          <p>Clothing Store</p>
          <p>Trending Shoes</p>
          <p>Accessories</p>
          <p>Sale</p>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='h2'>SHOPPING</p>
          <p>Contact Us</p>
          <p>Payment Methods</p>
          <p>Delivery</p>
          <p>Return & Exchanges</p>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='h2'>NEW LETTER</p>
          <p>Be the first to know about new arrivals, look books, sales & promos!</p>
          <div className='flex items-center border-b-4 justify-between pb-3 '>
            <input placeholder='Your email' type="text" className='border-none outline-none bg-transparent  text-white' />
            <GoMail />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
