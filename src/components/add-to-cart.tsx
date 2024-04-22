"use client"

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/redux/slices/cart-slice'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { SidePopup } from './side-model'
import { getCartTotal } from '@/redux/slices/cart-slice'


const AddToCart = (props: any) => {

    const dispatch = useDispatch()
    const getUser = useSelector((state: any) => state.createUser?.token)
    const loggedUser = useSelector((state: any) => state.loginUser?.access_token)
    const { items, totalAmount, totalCount } = useSelector((state: any) => state.cart)
    const router = useRouter()
    const [added, setAdded] = React.useState(false)

    const { product } = props


    const handleAddToCart = (item: any) => {
        if (getUser || loggedUser) {
            dispatch(addToCart(item))
            toast.success("Added successfully")
            setAdded(true)
        } else {
            router.push('/signin')
        }
    }


    const handleGoToCart = () => {
        // setShow(true)
        console.log("popup")
    }


    return (
        <div>

        
            <div onClick={() => {
                if (added) {
                    handleGoToCart()
                } else {
                    handleAddToCart(product)
                }
            }

            } className='text-white bg-[#47bb66] mt-2 cursor-pointer border-[#47bb66] text-[12px] hover:bg-white  hover:text-green-600 font-bold rounded w-[fit-content] border py-2 px-3'>{added ? "Go to Cart" : "+Add to cart"}
            </div>


        </div>
    )
}

export default AddToCart
