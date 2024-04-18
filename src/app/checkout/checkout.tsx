"use client"


import Image from 'next/image'
import React from 'react'
import Product from "../../../public/assets/images/blog1.jpg"
import style from './checkout.module.css'

const Checkout = () => {
    return (





        <div className='w-[80%] flex gap-4  p-5 mx-auto bg-gray-100 rounded  my-5'>

            <div className='w-[60%] px-[25px]'>

                <div className='border-b-[1px] border-gray-500 flex gap-5 pb-5 flex-col'>
                    <p className='text-[30px] font-semibold '>Checkout</p>
                    <p className='underline underline-offset-[10px]'>Customer information</p>
                    <input type="text" className='w-full ps-2 border h-[50px] text-[20px]' placeholder='username or email address*' />
                </div>

                <div className='flex flex-col border-b-[1px] border-gray-500 pb-5 my-[30px] gap-5'>
                    <div className=''>
                        <div><p>Billing details</p></div>
                        <div className='flex gap-2 items-center'><input placeholder='first name' className='w-[50%] ps-2 border h-[50px] text-[20px]' type="text" />
                            <input type="text" placeholder='last name' className='w-[50%] ps-2 border h-[50px] text-[20px]' /></div>
                    </div>
                    <input placeholder='company name(optional)' type="text" className='w-[100%] ps-2 text-[20px] border h-[50px] ' />
                    <input type="text" placeholder='Country / Region' className='w-[100%] ps-2 text-[20px] border h-[50px] ' />
                    <div className='flex gap-2 items-center'><input placeholder='street address' className='w-[50%] ps-2 border h-[50px] text-[20px]' type="text" /><input placeholder='apartment, suite, etc. (optional)' type="text" className='w-[50%] ps-2 border h-[50px] text-[20px]' /></div>
                    <div className='flex gap-2 items-center justify-around'><input placeholder='town / city' className='h-[50px] w-[32%] ps-2 ' type="text" /><input className='h-[50px] ps-2 w-[32%] ' type="text" /><input placeholder='postcode / zip' className='h-[50px] ps-2 w-[32%] ' type="text" /></div>
                    <input placeholder='Phone' type="text" className='w-[100%] ps-2 text-[20px] border h-[50px] ' />
                </div>

                <div>
                    <p>Additional Information</p>
                    <textarea className='w-full my-5 text-[20px] border h-[50px] ' />
                    <p>have a coupon?</p>
                    <p className='border-b-[1px] border-gray-500 pb-4 '>Payment</p>
                    <p className='my-5'>Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <div className='flex items-center justify-center border-2 border-[#00ab84]  text-[18px] font-medium cursor-pointer w-[100%] h-[80px] bg-[#00ab84] text-white hover:bg-white hover:text-[#00ab84]'>Place order</div>
                </div>
            </div>

            <div className={`w-[40%]  sticky top-5  h-[350px] mt-10 `}>
                <p className='text-[25px] font-medium'>Your order</p>
                <div className='border-[3px] mt-5 rounded'>
                    <div className='flex items-center border-b-2 justify-between py-4 px-2 '><p>Product</p><p>Subtotal</p></div>
                    <div className='flex items-center py-4 border-b-2 justify-between px-2'>
                        <div className='flex items-center gap-2'><Image src={Product} width={100} height={100} alt="..."></Image><p>Product Name</p></div>
                        <p>$45.00</p>
                    </div>
                    <div className='flex items-center border-b-2 justify-between px-2 py-4'><p>Subtotal </p>
                        <p>$45.00</p></div>
                    <div className='flex text-[23px] font-semibold items-center justify-between px-2 py-4'>
                        <p>Total</p>
                        <p>$45.00</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout
