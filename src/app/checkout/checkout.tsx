"use client"


import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Product from "../../../public/assets/images/blog1.jpg"
import style from './checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal, addToCart, decrease, increase, remove, clearCart } from "../../redux/slices/cart-slice";
import toast from 'react-hot-toast'

const Checkout = () => {
    const dispatch = useDispatch()

    const { totalCount, totalAmount, items } = useSelector((state: any) => state.cart)

    useEffect(() => {
        dispatch(getCartTotal())
        console.log(items[0], "items")
    }, [items])


    const handlePlaceOrder = () => {
        dispatch(clearCart())
        toast.success("Order Placed Successfully")
    }




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
                        <p className="mb-2">Billing details</p>
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
                    <textarea placeholder='Enter your comments' className='w-full ps-2 my-5 text-[20px] border h-[50px] ' />
                    <p className='text-[14px] w-fit hover:text-gray-600 mb-2 cursor-pointer text-blue-500'>have a coupon?</p>
                    <p className='border-b-[1px] border-gray-500 pb-4 '>Payment</p>
                    <p className='my-5'>Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    <div onClick={() => handlePlaceOrder()} className='flex items-center justify-center border-2 border-[#00ab84]  text-[18px] font-medium cursor-pointer w-[100%] h-[80px] bg-[#00ab84] text-white hover:bg-white hover:text-[#00ab84]'>Place order {totalAmount ? `$${totalAmount.toFixed(2)}` : ""}</div>
                </div>
            </div>

            {items?.length ? <div className={`w-[40%]   h-[350px] mt-10 `}>
                <p className='text-[25px] font-medium'>Your order</p>
                <div className='border-[3px] mt-5 rounded'>
                    <div className='flex items-center border-b-2 justify-between font-bold py-4 text-[18px] px-2 '><p>Product</p><p>Subtotal</p></div>
                    <div className='overflow-y-scroll min-h-[200px] max-h-[700px] '>

                        {items?.map((item: any) => {
                            return <div key={item.id} className='flex items-center py-4 border-b-2 justify-between px-2'>
                                <div className='flex items-center gap-2'><Image src={item?.img} width={50} height={50} alt="..."></Image><p>{item.name}</p>
                                    <p> x {item.amount}</p>
                                </div>

                                <p>${item?.price}</p>
                            </div>
                        })}
                    </div>

                    <div className='flex items-center border-b-2 justify-between px-2 py-4'><p>Subtotal </p>
                        <p>${totalAmount.toFixed(2)}</p></div>
                    <div className='flex text-[23px] font-semibold items-center justify-between px-2 py-4'>
                        <p>Total</p>
                        <p>${totalAmount.toFixed(2)}</p>
                    </div>
                </div>
            </div> :

                <div className={`w-[40%]   h-[350px] mt-10 `}>
                    <p className='text-[25px] font-medium'>Your order</p>
                    <div className='border-[3px] mt-5 rounded'>
                        <p className='text-center my-10'>Your cart is empty</p>
                    </div>
                </div>

            }



        </div>
    )
}

export default Checkout
