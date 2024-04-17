"use client"
import ProductCard from '../../components/product-card';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '@/redux/slices/all-products-slice';
import { fetchCreateProduct } from '@/redux/slices/createProduct-slice';
import Model from '@/components/model'
import toast from 'react-hot-toast';
import AddToCart from '@/components/add-to-cart';
import { useFormik } from "formik";
import * as yup from "yup";



const AllProducts = () => {

    const dispatch = useDispatch()
    const [show, setShow] = useState<boolean>(false)


    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])

    const allProducts = useSelector((state: any) => state?.products)
    const router = useRouter()

    const handleAddToCart = () => {
        toast.success("Added successfully")
    }

    const handleIndividualProduct = (id: any) => {
        router.push(`/product/${id}`)
    }
    const handleCreate = () => {
        setShow(true)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            img: "",
            category: ""
        },

        validationSchema: yup.object({
            name: yup.string().required("Required"),
            price: yup.string().required("Required"),
            img: yup.string().required("Required"),
            category: yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            dispatch(fetchCreateProduct(values)).then((res: any) => {
                formik.resetForm()
                toast.success("Product Created Successfully")
                setShow(false)
                dispatch(fetchAllProducts())
            })
        }
    })




    return (
        <div className='min-h-[100vh]'>

            <Model
                backGroundStyle="bg-[#2c3e50]"

                title="Add Product"
                show={show}
                setShow={setShow}
            >
                <form className='w-[500px]' onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-2 '>
                        <label className='text-white' htmlFor="name">Product Name : </label>
                        <input
                            id='name'
                            type="text"
                            name="name"
                            maxLength={30}
                            placeholder=' Name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className='w-[full] p-[12px] border-2 border-gray-300 rounded-md' />
                        {formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null}

                        <label className='text-white' htmlFor="price">Product Price : </label>
                        <input
                            id='price'
                            type="text"
                            name="price"
                            maxLength={5}
                            placeholder=' Price'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            className=' p-[12px] border-2 border-gray-300 rounded-md' />
                        {formik.touched.price && formik.errors.price ? <p className='text-red-500'>{formik.errors.price}</p> : null}

                        <label className='text-white' htmlFor="img">Product Image : </label>
                        <input
                            id='img'
                            type="text"
                            name="img"
                            placeholder='Image URL'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.img}
                            className=' p-[12px] border-2 border-gray-300 rounded-md' />
                        {formik.touched.img && formik.errors.img ? <p className='text-red-500'>{formik.errors.img}</p> : null}

                        <label className='text-white' htmlFor="category">Product Category : </label>
                        <input
                            id='category'
                            type="text"
                            name="category"
                            maxLength={10}
                            placeholder='Category'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.category}
                            className=' p-[12px] border-2 border-gray-300 rounded-md' />
                        {formik.touched.category && formik.errors.category ? <p className='text-red-500'>{formik.errors.category}</p> : null}
                    </div>

                    <div className='flex justify-between items-center gap-5 my-3'>
                        <div onClick={() => { formik.resetForm(), setShow(false) }} className="text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg text-sm inline-flex items-center px-[40px] py-3 text-center">
                            cancel
                        </div>
                        <button type="submit" className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm inline-flex items-center px-[40px] py-3 text-center">
                            Add Product
                        </button></div>



                </form>
            </Model>

            <div className='my-[50px] w-[100%] px-[50px] mx-auto   flex justify-between items-center'>
                <p className='  text-[30px] font-semibold'>SHOP</p>
                <button onClick={() => handleCreate()} className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm inline-flex items-center px-[40px] py-3 text-center">
                    Add Product
                </button>
            </div>


            <div className='flex  gap-5'>
                <div className=' w-[30%]'>
                    <p className='text-center text-[25px] font-semibold mb-3'>Filter</p>
                    <div className='flex items-center mx-auto px-2 w-[60%] border bg-gray-100 h-[45px]'><input placeholder='Search...' className='outline-none w-full bg-transparent border-none' type="text" /> <FaSearch color='gray' />
                    </div>
                    <div>
                        <p>Price</p>
                        <p>0$ to 10$</p>
                        <p>0$ to 10$</p>
                        <p>0$ to 10$</p>
                        <p>0$ to 10$</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-3 mb-5 w-[65%]'>


                    {allProducts?.length > 0 && allProducts?.map((product: any) => {
                        return (
                            <div>

                                <div onClick={() => { handleIndividualProduct(product.id) }}><ProductCard key={product.id} productName={product?.name} productPrice={product?.price} productImg={product?.img} /></div>
                                <div onClick={() => handleAddToCart()} className='mt-2 cursor-pointer w-[50%]'><AddToCart /></div>
                            </div>
                        )

                    })}


                </div>

            </div>

        </div>
    )
}

export default AllProducts
