"use client"
import Link from 'next/link'
import React from 'react'
import style from './signin.module.css'
import { useRouter } from 'next/navigation'
const SignIn = () => {


    const router = useRouter()
    const handleLogin = (e: any) => {
        e.preventDefault()
        router.push("/")
    }

    return (
        <div className='bg-[url(/assets/images/bg.jpg)] h-[100vh] w-[100vw] bg-cover bg-no-repeat flex justify-center items-center'>

            <div className={`bg-white h-[400px] p-5 ${style.shadow} w-[40%]  rounded-[10px] flex flex-col justify-center `}>
                <p className='text-[30px] font-medium text-center text-[#e63637]'>Male Fashion</p>
                <form className='flex flex-col p-4 items-center gap-[20px]'>
                    <input type="email" placeholder='Email' className='w-full p-[12px] border-2 border-gray-300 rounded-md' />
                    <input type="password" placeholder='Password' className='w-full p-[12px] border-2 border-gray-300 rounded-md' />
                    <p className='w-full text-end'>NewUser? <Link href="/signup" className='text-[#0000ff] underline'>Sign up</Link></p>
                    <button onClick={(e) => handleLogin(e)} type="submit" className='w-[100%] h-[60px] py-[12px] px-[30px] bg-[#3d87db] text-white font-medium rounded-md'>Login</button>

                </form>
            </div>
        </div>
    )
}

export default SignIn
