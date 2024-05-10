"use client"
import Link from 'next/link'
import React from 'react'
import style from './signin.module.css'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserLogin } from '@/redux/slices/login-user-slice'
import toast from 'react-hot-toast'


const SignIn = () => {



    const dispatch = useDispatch()
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('Required'),
            password: yup.string().required('Required')
        }),
        onSubmit: (values) => {
            dispatch(fetchUserLogin(values)).then((res: any) => {
                console.log(res, "res")
                if (res?.payload?.success) {
                    toast.success(res?.payload?.message)
                    localStorage.setItem("token", res?.payload?.access_token)
                    router.push('/')
                    formik.resetForm()
                } else {
                    toast.error(res?.payload?.detail?.message)
                }

            })
        }
    })


    return (
        <div className='bg-[url(/assets/images/bg.jpg)] h-[100vh] w-[100vw] bg-cover bg-no-repeat flex justify-center items-center'>

            <div className={`bg-white min-h-[300px] p-5 ${style.shadow} w-[40%]  rounded-[10px] flex flex-col justify-center `}>
                <p className='text-[30px] font-medium text-center text-[#e63637]'>Fashion Store</p>

                <form className='flex flex-col mt-5 gap-4' onSubmit={formik.handleSubmit}>
                    <div>  <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className='w-[100%] border border-gray-400 p-2 rounded-[5px]'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                        {formik.touched.email && formik.errors.email ? <p className='text-red-500 text-[12px]'>{formik.errors.email}</p> : null}</div>


                    <div>  <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className='w-[100%] border border-gray-400 p-2 rounded-[5px]'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                        {formik.touched.password && formik.errors.password ? <p className='text-red-500 text-[12px]'>{formik.errors.password}</p> : null}</div>

                    <div>
                        <p className='text-end'>Don't have an account? <Link href="/signup" className='text-[#3d87db] underline'>Sign Up</Link></p>
                    </div>

                    <button type="submit" className='mt-5 w-[100%] h-[50px] py-[12px] px-[30px] hover:bg-cyan-700 bg-[#3d87db] text-white font-medium rounded-md'>Login</button>
                    <div className='text-center cursor-pointer hover:text-gray-600 ' onClick={() => router.push('/')}>
                        Back to Home
                    </div>



                </form>
            </div>
        </div>
    )
}

export default SignIn
