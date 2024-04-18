"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../public/assets/images/logo.png'
// --------------------------React icons ------------------------------------
import { FiSearch } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import style from './header.module.css'
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SidePopup } from '@/components/side-model';
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const pathname = usePathname();
    const [active, setActive] = useState<any>("home")
    const [show, setShow] = useState<boolean>(false)
    const [activeDropdown, setActiveDropdown] = useState<any>(false)
    const getUser = useSelector((state: any) => state.createUser)
    const loggedUser = useSelector((state: any) => state.loginUser)

    const dispatch = useDispatch()
    const router = useRouter()
    console.log(getUser, "getUser")
    console.log(loggedUser?.access_token, "loggedUser")


    const handleLogout = () => {
        localStorage.clear();
        router.push("/signin");
    }
    return (
        <div>

            <SidePopup show={show} setShow={setShow} title="Cart Items" >
                <div className='text-center text-white'>
                    karthik
                </div>

            </SidePopup>

            <nav className="">
                <div className='bg-[#171717] flex text-white text-[14px] py-3 justify-around  '>
                    <p>Free Shipping, 30-day return or refund guarantee.</p>
                    <div className='flex gap-[40px] '>
                        <div className='uppercase cursor-pointer hover:text-gray-300' onClick={handleLogout}>{getUser?.token || loggedUser?.access_token ? "Log Out" : "Sign In"}</div>
                        <p>FAQS</p>
                        <p className='flex items-center gap-1'>USD <span><IoIosArrowDown /></span></p>
                    </div>
                </div>

                <div className="h-[80px]  w-full flex gap-[100px] flex-wrap items-center justify-evenly p-4 shadow">

                    <div className='cursor-pointer' onClick={() => router.push("/")}><Image src={Logo} width={200} alt="Logo" /></div>



                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
                            <li className={`${style.link}`}>
                                <Link href="/" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black " aria-current="page">Home</Link>
                                <div className={`w-content h-[2px] ${pathname === "/" && active === "home" ? "bg-[#e53637]" : "bg-white"}`}></div>
                            </li>
                            <li className={`${style.link}`}>
                                <Link href="/all-products" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-black " aria-current="page">Shop</Link>
                                <div className={`w-content h-[2px] ${pathname === "/all-products" ? "bg-[#e53637]" : "bg-white"}`}></div>

                            </li>
                            <li className={`${style.link}`}>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Pages</a>
                                <div className='w-content h-[2px] bg-white'></div>

                            </li>
                            <li className={`${style.link}`}>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Blog</a>
                                <div className='w-content h-[2px] bg-white'></div>

                            </li>
                            <li className={`${style.link}`}>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Contacts</a>
                                <div className='w-content h-[2px] bg-white'></div>

                            </li>
                        </ul>
                    </div>





                    <div className=' items-center flex gap-4'>
                        <FiSearch className='w-5 h-4' />
                        <FaRegHeart className='w-4 h-4' />
                        <div onClick={() => setShow(true)} className='cursor-pointer relative p-2 rounded-full hover:bg-gray-200 flex items-center gap-1'><MdOutlineShoppingCart className='w-[20px] h-[20px]' />
                            <span className='bg-black text-white py-0 absolute top-0 left-5 px-1 text-[9px] rounded-full'>0</span>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Header
