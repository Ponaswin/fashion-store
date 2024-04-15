"use client";

import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/assets/images/logo.png'
// --------------------------React icons ------------------------------------
import { FiSearch } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import { FaRegHeart } from "react-icons/fa";

const Header = () => {

    return (
        <div>
            <nav className="">
                <div className='bg-[#171717] flex text-white text-[14px] py-3 justify-around  '>
                    <p>Free Shipping, 30-day return or refund guarantee.</p>
                    <div className='flex gap-[40px] '>
                        <p>SIGN IN</p>
                        <p>FAQS</p>
                        <p className='flex items-center gap-1'>USD <span><IoIosArrowDown /></span></p>
                    </div>
                </div>

                <div className="h-[80px]  w-full flex gap-[100px] flex-wrap items-center justify-evenly p-4 shadow">

                    <Image src={Logo} width={200} alt="Logo" />

                    {/* <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Male Fashion</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> */}

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Pages</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contacts</a>
                            </li>
                        </ul>
                    </div>

                    <div className=' items-center flex gap-4'>
                        <FiSearch className='w-5 h-4' />
                        <FaRegHeart className='w-4 h-4' />
                        <div className='flex items-center gap-1'><AiOutlineShopping className='w-[20px] h-[20px]' /><span>$0.00</span></div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Header
