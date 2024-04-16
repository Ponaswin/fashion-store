"use client"
import ProductCard from '@/components/product-card'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Axios from 'axios'
import { fetchAllProducts } from '@/redux/slices/all-products-slice'

const ProductList = () => {
    const [allProducts, setAllProducts] = useState<any>([])

    const details = useSelector((state: any) => state?.products?.data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts({})).then((res: any) => {
            setAllProducts(res)

            console.log(res, "state")
        })
    }, [])


    console.log("allProducts", allProducts)








    return (
        <div>

            <div className='flex items-center gap-[90px] justify-center text-[25px] font-bold '>
                <p className={``}>Best Sellers</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-[75%] mx-auto mt-[30px]' >
                {allProducts > 0 && allProducts?.map((product: any) => {
                    return (

                        <ProductCard key={product.id} productName={product?.name} productPrice={product?.price} productImg={product?.img} />
                    )
                })}
            </div>


        </div>
    )
}

export default ProductList
