"use client"

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { PiWarningCircle } from "react-icons/pi";
import { useFormik } from 'formik'
import * as yup from 'yup'
import { fetchDeleteProduct } from '@/redux/slices/delete-product-slice';
import { fetchProduct } from '@/redux/slices/product-slice'
import { fetchUpdateProduct } from '@/redux/slices/update-product-slice'
import Image from 'next/image'
import Model from '@/components/model'
import ReactImageMagnify from 'react-image-magnify';
// icons -------------------------------------------------
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { openPopup } from '@/redux/slices/cart-popup-slice'
import { addToCart } from '@/redux/slices/cart-slice'
import styles from './product.module.css'
import toast from 'react-hot-toast'
const Product = () => {

    const params = useParams()
    const [product, setProduct] = useState<any>([])
    const [show, setShow] = useState<boolean>(false)
    const [added, setAdded] = useState<boolean>(false)
    const [deleteShow, setDeleteShow] = useState<boolean>(false)
    const { items, totalAmount, totalCount } = useSelector((state: any) => state.cart)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct(params?.id)).then((res: any) => {
            setProduct(res?.payload)
        })
    }, [])

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        if (items.length > 0) {
            items?.map((item: any) => {
                if (item?.id === product?.id) {
                    setAdded(true)
                }
            })
        } else {
            setAdded(false)
        }
    }, [items, product])


    const handleUpdate = () => {
        setDeleteShow(false)
        setShow(true)
    }
    const handleDelete = () => {
        dispatch(fetchDeleteProduct(params?.id)).then(() => {
            toast.success("Deleted Successfully")
            setShow(false)
            router.push("/all-products")
        })
    }
    const showDeleteModel = () => {
        setShow(true)
        setDeleteShow(true)
    }

    console.log(product, "product")

    const formik = useFormik({
        initialValues: {

            name: product?.name,
            price: product?.price,
            img: product?.img,
            category: product?.category
        },
        enableReinitialize: true,
        validationSchema: yup.object({
            name: yup.string().required("Required"),
            price: yup.string().required("Required"),
            img: yup.string().required("Required"),
            category: yup.string().required("Required"),
        }),
        onSubmit: (values) => {

            dispatch(fetchUpdateProduct(
                {
                    id: params?.id,
                    data: values
                }
            )).then(() => {
                toast.success("Updated Successfully")
                setShow(false)
                router.push("/all-products")
            })

        }
    })
    const handleCart = (product: any) => {
        setAdded(true)
        dispatch(addToCart(product))
        toast.success("Added successfully")
    }


    return (

        <div>
            <p className='md:text-[40px] text-[20px] font-bold text-center mt-5'>Product</p>
            <div className=' border relative md:flex p-5 gap-10 rounded mt-5 mb-[50px] shadow w-[90%] mx-auto'>
                <div className='shadow w-[400px] h-[400px] object-contain border '>
                    {/* <Image className='' width={400} height={400} src={product?.img} alt="..." /> */}

                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: product?.img
                            },
                            largeImage: {
                                src: product?.img,
                                width: 1200,
                                height: 1800
                            },
                            isHintEnabled: true,
                        }}
                    />
                </div>

                {!added ? <BsFillCartPlusFill onClick={() => handleCart(product)} size={30} className=' absolute cursor-pointer text-green-600 hover:text-green-400 top-[25px] right-[25px]' /> :
                    <BsCartCheckFill onClick={() => dispatch(openPopup())} size={30} className=' absolute cursor-pointer text-green-600 hover:text-green-400 top-[25px] right-[25px]' />
                }

                <div className=' overflow-hidden flex flex-col mt-5 gap-8'>
                    <p className=' md:text-[20px] font-bold'> Name :     <span className=' capitalize ms-4 md:text-[18px] text-gray-600 font-medium'> {product?.name}    </span>  </p>
                    <p className=' md:text-[20px] font-bold'> Price :    <span className=' capitalize ms-5 md:text-[18px] text-gray-600 font-medium'>${product?.price}   </span> </p>
                    <p className=' md:text-[20px] font-bold'>Image :     <span className=' capitalize ms-3 md:text-[18px] text-gray-600 font-medium'> {product?.img}     </span>   </p>
                    <p className=' md:text-[20px] font-bold'>Category :  <span className=' capitalize ms-2 md:text-[18px] text-gray-600 font-medium'> {product?.category}</span>   </p>
                    <div className=" w-content mt-[20px] flex gap-[40px]">
                        <button onClick={() => handleUpdate()} className="md:py-3 p-2 md:px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit Product</button>

                        <button onClick={() => showDeleteModel()} className="text-white p-2 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center md:px-[40px] md:py-3 text-center">
                            Delete
                        </button>
                    </div>

                </div>

            </div>




            <Model show={show} setShow={setShow} title={"Delete Product"} handleClose={handleClose} backGroundStyle="bg-gray-600"  >

                {deleteShow ?
                    <div className='flex  flex-col justify-center gap-5 md:mx-[60px] md:mb-[10px] items-center '>
                        <PiWarningCircle size={80} color='white' />
                        <p className='md:text-[20px] text-gray-400'>Are you sure you want to delete this product?</p>
                        <div>

                            <button onClick={() => setShow(false)} className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                            <button onClick={() => handleDelete()} type="button" className="text-white ms-3 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Yes, Im sure
                            </button>
                        </div>
                    </div> :

                    <form className='md:w-[500px]' onSubmit={formik.handleSubmit}>
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
                            {formik.touched.name && formik.errors.name ? <p className='text-red-500'>Required</p> : null}

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
                            {formik.touched.price && formik.errors.price ? <p className='text-red-500'>Required</p> : null}

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
                            {formik.touched.img && formik.errors.img ? <p className='text-red-500'>Required</p> : null}

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
                            {formik.touched.category && formik.errors.category ? <p className='text-red-500'>Required</p> : null}
                        </div>

                        <div className='flex justify-between items-center gap-5 my-3'>
                            <div onClick={() => setShow(false)} className=" bg-gray-700 text-white hover:bg-gray-900 font-medium rounded-lg text-sm inline-flex items-center px-[40px] py-3 text-center">
                                cancel
                            </div>
                            <button type="submit" className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm inline-flex items-center px-[40px] py-3 text-center">
                                Update
                            </button></div>



                    </form>
                }

            </Model>

        </div>



    )
}

export default Product
