"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/assets/images/logo.png'
// --------------------------React icons ------------------------------------
import { FiSearch } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";


import { IoIosArrowDown } from "react-icons/io";
import style from './header.module.css'
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SidePopup } from '@/components/side-model';
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";

import banner3 from "../../../public/assets/images/banner3.jpg";
import { decrease, increase, remove } from '@/redux/slices/cart-slice';
import { getCartTotal } from '@/redux/slices/cart-slice';
import { togglePopup } from '@/redux/slices/cart-popup-slice';

const Header = () => {
    const pathname = usePathname();
    const [active, setActive] = useState<any>("home")
    const [show, setShow] = useState<boolean>(false)
    const [activeDropdown, setActiveDropdown] = useState<any>(false)
    const getUser = useSelector((state: any) => state.createUser)
    const loggedUser = useSelector((state: any) => state.loginUser)
    const { totalCount, totalAmount, items } = useSelector((state: any) => state.cart)
    const [avatarClick, setAvatarClick] = useState(false)
    const cartpopup: any = useSelector((state: any) => state.cartPopUp);
    const dispatch = useDispatch()
    const router = useRouter()
    const [toggle, setToggle] = useState(false)
    console.log(getUser, "getUser")
    console.log(loggedUser?.access_token, "loggedUser")
    const isPopupOpen = useSelector((state: any) => state.popup?.isOpen);


    const handleLogout = () => {
        localStorage.clear();
        router.push("/signin");
    }

    useEffect(() => {
        dispatch(getCartTotal())
    }, [items])

    return (
        <div>

            <SidePopup show={isPopupOpen} setShow={setShow} title="Cart Items" >

                {items?.length > 0 ? items?.map((item: any) => (
                    <div className='h-[70px] select-none mt-2 w-[90%] mx-auto rounded bg-gray-800 flex items-center text-white border justify-around' key={item.id}>
                        <Image className='rounded' width={60} height={60} src={item.img} alt='...'></Image>
                        <div className='flex  items-center justify-center gap-2'>
                            <FaMinusCircle onClick={() => dispatch(decrease(item.id))} className='cursor-pointer' />
                            <p>{item.amount}</p>
                            <FaPlusCircle onClick={() => dispatch(increase(item.id))} className='cursor-pointer' />
                        </div>
                        <p>${item.price}</p>
                        <div>
                            <MdDelete size={20} color='red' onClick={() => dispatch(remove(item.id))} className='cursor-pointer' />
                        </div>
                    </div>
                )) : <p className='text-center text-white'>No Items</p>}



            </SidePopup>



            <div className='bg-[#171717] hidden md:flex  text-white text-[14px] py-3 justify-around  '>
                <p>Free Shipping, 30-day return or refund guarantee.</p>
                <div className='flex gap-[40px] '>
                    <div className='uppercase cursor-pointer hover:text-gray-300' onClick={handleLogout}>{getUser?.token || loggedUser?.access_token ? "Log Out" : "Sign In"}</div>
                    <p>FAQS</p>
                    <p className='flex items-center gap-1'>USD <span><IoIosArrowDown /></span></p>
                </div>
            </div>


            <nav className="border md:py-2 p-0 shadow">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <div className='cursor-pointer h-8' onClick={() => router.push("/")}><Image src={Logo} width={200} alt="Logo" /></div>



                    <button onClick={() => setToggle(!toggle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>


                    <div className={`${toggle ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
                            <li className={`${style.link}`}>
                                <Link href="/" className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 dark:text-black " aria-current="page">Home</Link>
                                <div className={`w-content h-[2px] ${pathname === "/" && active === "home" ? "bg-[#e53637]" : "bg-white"}`}></div>
                            </li>
                            <li className={`${style.link}`}>
                                <Link href="/all-products" className="block py-2 px-3 text-black  rounded md:bg-transparent  md:p-0 dark:text-black " aria-current="page">Shop</Link>
                                <div className={`w-content h-[2px] ${pathname === "/all-products" ? "bg-[#e53637]" : "bg-white"}`}></div>

                            </li>
                            <li className={`${style.link}`}>
                                <a href="#instagram" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-black dark:hover:text-black md:dark:hover:bg-transparent">Pages</a>
                                <div className='w-content h-[2px] bg-white'></div>

                            </li>
                            <li className={`${style.link}`}>
                                <a href="#blog" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-black dark:hover:text-black md:dark:hover:bg-transparent">Blog</a>
                                <div className={`w-content h-[2px] ${pathname === "/blog" ? "bg-[#e53637]" : "bg-white"}`}></div>

                            </li>
                            <li >
                                <a href="#contact" className="block py-2 px-3   md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:text-black md:dark:hover:bg-transparent">Contacts</a>
                                <div className='w-content h-[2px] bg-white'></div>

                            </li>
                        </ul>
                    </div>


                    <div className={` items-center justify-center mt-[50px] md:mt-0 flex gap-4 ${toggle ? "block" : "hidden"} w-[100%] md:block md:w-auto`}>
                        <div onClick={() => dispatch(togglePopup())} className='cursor-pointer relative p-2 rounded-full hover:shadow hover:bg-gray-200 flex items-center gap-1'><MdOutlineShoppingCart className='w-[20px] h-[20px]' />
                            <span className='bg-black  text-white py-0 absolute top-0 left-5 px-1 text-[10px] rounded-full'>{totalCount}</span>
                        </div>
                        {/* <div className='border rounded-full relative ' ><RxAvatar size={22} className='cursor-pointer rounded-full hover:shadow hover:bg-black-200 border' /></div> */}

                    </div>


                </div>
            </nav>


        </div>
    )
}

export default Header
