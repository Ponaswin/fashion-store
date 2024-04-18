"use client"
import React from 'react'
import Link from 'next/link'
import style from '../signin/signin.module.css'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { fetchCreateUser } from '@/redux/slices/create-user-slice'
import * as yup from 'yup'


const SignUp = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone_number: '',

    },
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      phone_number: yup.mixed().test('phoneNo', 'Invalid phone number', (val) => {
        const pattern = /^[0-9]+$/;
        return typeof val === 'string' ? pattern.test(val) : (typeof val === 'number' ? true : false);
      }),

      email: yup.string().email('Invalid email').required('Required'),
      password: yup.string().required('Required'),

    }),
    onSubmit: (values) => {
      dispatch(fetchCreateUser(values)).then((res: any) => {
        console.log(res, "res")
        if (res?.payload?.success) {
          toast.success("User Created Successfully")
          router.push('/')
          formik.resetForm()
          localStorage.setItem("token", res?.payload?.token)
        } else {
          toast.error(res?.payload?.detail?.message)
        }
      })
    }
  })



  return (
    <div className='bg-[url(/assets/images/bg.jpg)] h-[100vh] w-[100vw] bg-cover bg-no-repeat flex justify-center items-center'>

      <div className={`bg-white min-h-[400px] p-5 ${style.shadow} w-[40%]  rounded-[10px] flex flex-col justify-center `}>
        <p className='text-[30px] font-medium text-center text-[#e63637]'>Male Fashion</p>

        <form onSubmit={formik.handleSubmit}>

          <div className='flex flex-col gap-3 my-[20px]'>
            <div> <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className='w-[100%] border border-gray-400 p-2 rounded-[5px]'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
              {formik.touched.name && formik.errors.name ? <p className='text-red-500 text-[12px] ' >{formik.errors.name}</p> : null}</div>

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


            <div><input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className='w-[100%] border border-gray-400 p-2 rounded-[5px]'
              onChange={formik.handleChange}
              value={formik.values.password}
            />

              {formik.touched.password && formik.errors.password ? <p className='text-red-500 text-[12px]'>{formik.errors.password}</p> : null}</div>


            <div><input
              type="text"
              name="phone_number"
              id="phone_number"
              maxLength={10}
              placeholder="Phone Number"
              className='w-[100%] border border-gray-400 p-2 rounded-[5px]'
              onChange={formik.handleChange}
              value={formik.values.phone_number}
            />

              {formik.touched.phone_number && formik.errors.phone_number ? <p className='text-red-500 text-[12px]'>{formik.errors.phone_number}</p> : null}</div>


          </div>
          <button type="submit" className='mt-5 w-[100%] h-[50px] py-[12px] px-[30px] hover:bg-cyan-700 bg-[#3d87db] text-white font-medium rounded-md'>Create Account</button>
        </form>


      </div>
    </div>
  )
}

export default SignUp
