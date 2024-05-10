"use client"

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cart-slice'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { SidePopup } from './side-model'
import { getCartTotal } from '@/redux/slices/cart-slice'
import { openPopup } from '@/redux/slices/cart-popup-slice'


const AddToCart = (props: any) => {

    const dispatch = useDispatch()
    const getUser = useSelector((state: any) => state.createUser?.token)
    const loggedUser = useSelector((state: any) => state.loginUser?.access_token)
    const { items, totalAmount, totalCount } = useSelector((state: any) => state.cart)
    const [context, setContext] = React.useState<any>("+Add to cart")
    const router = useRouter()
    const { product } = props



    useEffect(() => {
        if (items?.length) {
            items?.map((item: any) => {
                if (item?.id === product?.id) {
                    setContext("Go to cart")
                }
            })
        } else {
            setContext("+Add to cart")
        }
    }, [items, product?.id])


    const handleAddToCart = (item: any) => {
        dispatch(addToCart(item))
        toast.success("Added successfully")

    }

    const handleGoToCart = () => {
        dispatch(openPopup())
    }

    return (
        <div>
            <div onClick={() => {
                if (context === "Go to cart") {
                    handleGoToCart()
                } else {
                    handleAddToCart(product)
                }
            }

            } className='text-white bg-[#47bb66] mt-2 cursor-pointer border-[#47bb66] text-[12px] hover:bg-white  hover:text-green-600 font-bold rounded w-[fit-content] border py-2 px-3'>{
                    context
                }
            </div>


        </div>
    )
}

export default AddToCart
