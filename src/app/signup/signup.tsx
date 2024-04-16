"use client"
import React from 'react'
import Link from 'next/link'
import style from '../signin/signin.module.css'

const SignUp = () => {
  return (
    <div className='bg-[url(/assets/images/bg.jpg)] h-[100vh] w-[100vw] bg-cover bg-no-repeat flex justify-center items-center'>

      <div className={`bg-white h-[400px] p-5 ${style.shadow} w-[40%]  rounded-[10px] flex flex-col justify-center `}>
        <p className='text-[30px] font-medium text-center text-[#e63637]'>Male Fashion</p>
        <form className='flex flex-col p-4 items-center gap-[20px]'>
          <input type="email" placeholder='Email' className='w-full p-[12px] border-2 border-gray-300 rounded-md' />
          <input type="password" placeholder='Password' className='w-full p-[12px] border-2 border-gray-300 rounded-md' />
          <input type="password" placeholder='confirmPassword' className='w-full p-[12px] border-2 border-gray-300 rounded-md' />
          <p className='w-full text-end'>Already User? <Link href="/signin" className='text-[#0000ff] underline'>Sign in</Link></p>
          <button type="submit" className='w-[100%] h-[60px] py-[12px] px-[30px] bg-[#3d87db] text-white font-medium rounded-md'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
