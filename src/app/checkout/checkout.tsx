"use client"


import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Product from "../../../public/assets/images/blog1.jpg"
import { useFormik } from 'formik'
import style from './checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal, addToCart, decrease, increase, remove, clearCart } from "../../redux/slices/cart-slice";
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'

const Checkout = () => {
    const dispatch = useDispatch()

    const { totalCount, totalAmount, items } = useSelector((state: any) => state.cart)

    useEffect(() => {
        dispatch(getCartTotal())
        console.log(items[0], "items")
    }, [items])

    const router = useRouter()


    const handlePlaceOrder = () => {
        dispatch(clearCart())
        toast.success("Order Placed Successfully")
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            fName: '',
            lName: '',
            cmyName: '',
            country: '',
            street: '',
            apartment: '',
            town: '',
            postcode: '',

            phone: '',

        },
        validationSchema: yup.object({
            email: yup.string().required('Required'),
            fName: yup.string().required('Required'),
            lName: yup.string().required('Required'),
            cmyName: yup.string().required('Required'),
            country: yup.string().required('Required'),
            street: yup.string().required('Required'),
            apartment: yup.string().required('Required'),
            town: yup.string().required('Required'),
            postcode: yup.string().required('Required'),
            phone: yup.string().required('Required'),
        }),

        onSubmit: (values) => {
            console.log(values, " values")
            handlePlaceOrder()
            router.push('/all-products')
        }
    })


    return (





        <div className='w-[80%] flex gap-4  p-5 mx-auto bg-gray-100 rounded  my-5'>

            <form className='w-[60%] px-[25px]'
                onSubmit={formik.handleSubmit}
            ><div >

                    <div className='border-b-[1px] border-gray-500 flex gap-5 pb-5 flex-col'>
                        <p className='text-[30px] font-semibold '>Checkout</p>
                        <p className='underline underline-offset-[10px]'>Customer information</p>
                        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="text"
                            className={`${formik.errors.email && formik.touched.email ? 'border-red-500' : ''} w-full ps-2 border h-[50px]`} placeholder='username or email address*' />
                    </div>

                    <div className='flex flex-col border-b-[1px] border-gray-500 pb-5 my-[30px] gap-5'>
                        <div className=''>
                            <p className="mb-2">Billing details</p>
                            <div className='flex gap-2 items-center'>
                                <input value={formik.values.fName} onChange={formik.handleChange} name="fName" placeholder='first name' className={` ${formik.errors.fName && formik.touched.fName ? 'border-red-500' : ''} w-[50%] ps-2 border h-[50px]`} type="text" />
                                <input value={formik.values.lName} onChange={formik.handleChange} name="lName" type="text" placeholder='last name' className={`${formik.errors.lName && formik.touched.lName ? 'border-red-500' : ''} w-[50%] ps-2 border h-[50px]`} /></div>
                        </div>
                        <input value={formik.values.cmyName} onChange={formik.handleChange} name="cmyName" placeholder='company name(optional)' type="text" className={`${formik.errors.cmyName && formik.touched.cmyName ? 'border-red-500' : ''} w-[100%] ps-2  border h-[50px]`} />
                        <input value={formik.values.country} onChange={formik.handleChange} name="country" type="text" placeholder='Country / Region' className={` ${formik.errors.country && formik.touched.country ? 'border-red-500' : ''} w-[100%] ps-2  border h-[50px]`} />
                        <div className='flex gap-2 items-center'><input value={formik.values.street} onChange={formik.handleChange} name="street" placeholder='street address' className={`w-[50%] ps-2 border h-[50px] ${formik.errors.street && formik.touched.street ? 'border-red-500' : ''} `} type="text" />
                            <input value={formik.values.apartment} onChange={formik.handleChange} name="apartment" placeholder='apartment, suite, etc. (optional)' type="text" className={`w-[50%] ps-2 border h-[50px] ${formik.errors.apartment && formik.touched.apartment ? 'border-red-500' : ''} `} /></div>

                        <div className='flex gap-2 items-center justify-around'>
                            <input
                                value={formik.values.town}
                                onChange={formik.handleChange}
                                name="town"
                                placeholder='town / city'
                                className={`${formik.errors.town && formik.touched.town ? 'border-red-500' : ''}  h-[50px] w-[50%] ps-2`}
                                type="text" />

                            <input value={formik.values.postcode} onChange={formik.handleChange} name="postcode" placeholder='postcode / zip' className={`h-[50px] ps-2 w-[50%] ${formik.errors.postcode && formik.touched.postcode ? 'border-red-500' : ''} `} type="text" />
                        </div>
                        <input value={formik.values.phone} onChange={formik.handleChange} name="phone" placeholder='Phone' type="text" className={`w-[100%] ps-2  border h-[50px] ${formik.errors.phone && formik.touched.phone ? 'border-red-500' : ''} `} />
                    </div>

                    <div>
                        <p>Additional Information</p>
                        <textarea placeholder='Enter your comments(Optional)' className='w-full ps-2 my-5  border h-[50px] ' />
                        <p className='text-[14px] w-fit hover:text-gray-600 mb-2 cursor-pointer text-blue-500'>have a coupon?</p>
                        <p className='border-b-[1px] border-gray-500 pb-4 '>Payment</p>
                        <p className='my-5'>Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.</p>


                    </div>
                </div>

                <button type="submit" className='flex items-center justify-center border-2 border-[#00ab84]  text-[18px] font-medium cursor-pointer w-[100%] h-[80px] bg-[#00ab84] text-white hover:bg-white hover:text-[#00ab84]'>Place order {totalAmount ? `$${totalAmount.toFixed(2)}` : ""}</button>

            </form>

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
