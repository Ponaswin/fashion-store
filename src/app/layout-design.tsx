"use client";
import Header from '@/container/header/header';
import Footer from '@/container/footer/footer';
import { usePathname } from 'next/navigation';
import React from 'react'
import store from '@/redux/store';
import { Provider } from 'react-redux';
const LayoutDesign = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname();

    return (
        <Provider store={store}>

            <div className='w-full h-full'>
                {pathname !== "/signin" && pathname !== "/signup" && <Header />}
                <div>{children}</div>
                {pathname !== "/signin" && pathname !== "/signup" && <Footer />}
            </div>
        </Provider>
    )
}

export default LayoutDesign
