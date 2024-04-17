"use client"
import ProductCard from '@/components/product-card'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import AddToCart from '@/components/add-to-cart'
import Axios from 'axios'
import { fetchAllProducts } from '@/redux/slices/all-products-slice'
import toast from 'react-hot-toast'

const ProductList = () => {
    const [allProducts, setAllProducts] = useState<any>([])

    const reversedProducts = allProducts?.slice(0).reverse().slice(0, 8)
    const sortedProducts = reversedProducts?.sort((a: any, b: any) => (a?.id > b?.id) ? 1 : -1)
    const descProduct = sortedProducts?.slice().reverse()

    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts()).then((res: any) => {
            setAllProducts(res?.payload)
            console.log(res?.payload, "list")
        })
    }, [])

    const handleIndividualProduct = (id: any) => {
        router.push(`/product/${id}`)
    }

    const handleAddToCart = () => {
        toast.success("Added successfully")
    }


    return (
        <div>

            <div className='flex items-center gap-[90px] justify-center text-[25px] font-bold '>
                <p className={``}>Best Sellers</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-[75%] mx-auto mt-[30px]' >
                {descProduct && descProduct?.map((product: any) => {
                    return (
                        <div>

                            <div onClick={() => handleIndividualProduct(product?.id)}><ProductCard id={product?.id} key={product.id} productName={product?.name} productPrice={product?.price} productImg={product?.img} /></div>
                            <div onClick={() => handleAddToCart()} className='mt-2 cursor-pointer w-[50%]'><AddToCart /></div>

                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default ProductList
