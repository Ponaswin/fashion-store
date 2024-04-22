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
import { Spinner } from '@/components/spinner';
import NoResultFound from '@/components/no-result-found';
import { useFormik } from "formik";
import * as yup from "yup";
import { getCartTotal, addToCart } from '@/redux/slices/cart-slice';
import { SidePopup } from '@/components/side-model';



const AllProducts = () => {

    const dispatch = useDispatch()
    const [allProducts, setAllProducts] = useState<any>([])
    const [show, setShow] = useState<boolean>(false)
    const [sort, setSort] = useState<string>('lowToHigh')
    const [searchValue, setSearchValue] = useState<string>('')


    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(true)
    const getUser = useSelector((state: any) => state.createUser?.token)
    const loggedUser = useSelector((state: any) => state.loginUser?.access_token)
    const productsPerPage = 12;
    const { items, totalAmount, totalCount } = useSelector((state: any) => state?.cart)





    useEffect(() => {
        dispatch(fetchAllProducts()).then((res: any) => {
            setAllProducts(res?.payload)
            setLoading(false)
        })
        dispatch(getCartTotal());
    }, [])


    // const allProducts = useSelector((state: any) => state?.products)
    const filteredProducts = allProducts.filter((product: any) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    const sortedProducts = filteredProducts.sort((a: any, b: any) => {
        if (sort === 'lowToHigh') {
            return a.price - b.price
        } else if (sort === 'highToLow') {
            return b.price - a.price
        } else {
            return 0
        }
    })
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    const handleSearch = (e: any) => {
        setSearchValue(e.target.value)
    }


    const handleSortChange = (e: any) => {
        setSort(e.target.value);
    };




    const router = useRouter()

    const handleAddToCart = (item: any) => {
        console.log(item, "id")
        dispatch(addToCart(item))
        toast.success("Added successfully")
    }

    const handleIndividualProduct = (id: any) => {
        router.push(`/product/${id}`)
    }
    const handleCreate = () => {
        if (getUser || loggedUser) {
            setShow(true)
        } else {
            router.push('/signin')
        }
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
                dispatch(fetchAllProducts()).then((res: any) => {
                    setAllProducts(res?.payload)
                })
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
                <p className='  md:text-[30px] font-semibold'>SHOP</p>
                <button onClick={() => handleCreate()} className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 md:px-[40px] py-3 text-center">
                    Add Product
                </button>
            </div>

            <div className='border mx-auto mb-2 rounded p-5 w-[95%] block md:hidden'>
                <div>
                    <div>

                        <p>Search product</p>
                        <div className='flex items-center mx-auto px-2 h-[40px] border bg-gray-100'>
                            <input
                                placeholder='Search...'
                                onChange={handleSearch}
                                value={searchValue}
                                className='outline-none w-full bg-transparent border-none'
                                type="text" /> <FaSearch color='gray'

                            />
                        </div>
                    </div>
                    <div className='mt-5'>

                        <p>Price</p>
                        <select onChange={handleSortChange} value={sort} className=' w-[100%] cursor-pointer border h-[40px] bg-gray-100' name="price" id="">
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='flex gap-5'>


                <div className=' hidden md:block border sticky top-5 shadow ms-[20px] h-[300px] w-[30%]'>
                    <p className=' ms-[92px] text-[25px] font-semibold my-3'>Search product</p>
                    <div className='flex items-center mx-auto px-2 w-[60%] border bg-gray-100 h-[45px]'>
                        <input
                            placeholder='Search...'
                            onChange={handleSearch}
                            value={searchValue}
                            className='outline-none w-full bg-transparent border-none'
                            type="text" /> <FaSearch color='gray'

                        />
                    </div>
                    <div className='ms-[92px]'>
                        <p className=' text-[25px] mt-5 font-semibold mb-3'>Price</p>

                        <select onChange={handleSortChange} value={sort} className='w-[75%] cursor-pointer border h-[45px] bg-gray-100' name="price" id="">
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>
                    </div>
                </div>

                <div className='md:w-[65%] w-[98%] mx-auto '>
                    <p className='text-[15px] text-center md:text-start mb-2 font-semibold'>Showing {currentProducts.length} of {allProducts.length} records </p>

                    {currentProducts?.length > 0 ? <div className='grid grid-cols-2 gap-5 md:grid-cols-3 mb-5 w-[100%]'>

                        {currentProducts?.map((product: any) => {
                            return (
                                <div key={product.id} className='border rounded p-2' >
                                    <div onClick={() => { handleIndividualProduct(product.id) }}>
                                        <ProductCard key={product.id} productName={product?.name} productPrice={product?.price} productImg={product?.img} /></div>
                                    <div><AddToCart product={product} /></div>
                                </div>
                            )

                        })}

                    </div> : <div className='flex mt-[100px] justify-center items-center w-[100%]'>
                        {loading ? <Spinner classname={" w-[50px] h-[50px] "} /> : <NoResultFound />} </div>}



                </div>
            </div>

            <div className='flex justify-center my-5'>
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`px-3 py-1 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-500' : 'text-black bg-transparent'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>

    )
}

export default AllProducts
