"use client";
import Header from '@/container/header/header';
import Footer from '@/container/footer/footer';
import React from 'react'
const LayoutDesign = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-full'>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default LayoutDesign
