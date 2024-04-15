"use client"
import ProductCard from '@/components/product-card'
import React from 'react'
import { useState } from 'react'

const ProductList = () => {


    const [tab, setTab] = useState(1)

    return (
        <div>

            <div className='flex items-center gap-[90px] justify-center text-[25px] font-bold '>
                <p onClick={() => setTab(1)} className={`cursor-pointer ${tab === 1 ? "text-black" : "text-gray-400"}`}>Best Sellers</p>
                <p onClick={() => setTab(2)} className={` cursor-pointer ${tab === 2 ? "text-black" : "text-gray-400"}`}>New Arrivals</p>
                <p onClick={() => setTab(3)} className={`cursor-pointer ${tab === 3 ? "text-black" : "text-gray-400"}`}>Hot Sales</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-[75%] mx-auto mt-[30px]' >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>


        </div>
    )
}

export default ProductList
