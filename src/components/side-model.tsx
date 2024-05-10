import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { clearCart } from "@/redux/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "@/redux/slices/cart-popup-slice";

export const SidePopup = (props: any) => {
    const {
        modelStyle,
        title,
        children,
        width,
        footerContent,
        closeIconStyle,
        topButton,
        iconColor,
        closeIcon,
    } = props;

    const router = useRouter();
    const { totalCount, totalAmount, items } = useSelector((state: any) => state?.cart)
    const CartPopup = useSelector((state: any) => state?.cartPopup?.isOpen);



    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.success("Cart Cleared Successfully");
    }
    return (

        <div>
            <div
                className={`${CartPopup ? "block" : "hidden"
                    } fixed w-full z-[100] bg-[#00000066] bg-opacity-50 h-screen ${modelStyle}`}
            >
                <div className="flex justify-end ">
                    <div
                        className={`relative mt-[30px] rounded-l shadow  w-full min-h-[89.5vh] max-h-[94vh] ${width ? width : "max-w-[450px]"
                            }`}
                        style={{
                            background: "#171717",

                        }}
                    >
                        <div className="relative  rounded-lg ">
                            <div className="flex items-center justify-between p-4 md:p-[16px] border-b-[1.5px] border-[#688DBBA6]">
                                <h3 className="text-[20px] font-semibold text-white capitalize leading-[28px]">
                                    {title}
                                </h3>
                                <div className="flex items-center justify-end">
                                    {topButton && <div> {topButton}</div>}
                                    {!closeIcon && (
                                        <button
                                            onClick={() => dispatch(togglePopup())}
                                            type="button"
                                            className={`${closeIconStyle} text-white text-sm ml-[12px] inline-flex justify-center items-center`}
                                        >
                                            <IoMdClose
                                                color={iconColor ? "black" : "white"}
                                                size={20}
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div
                                className={` pt-4 ${footerContent
                                    ? "min-h-[64vh] max-h-[25.5vh]"
                                    : "min-h-[60vh] max-h-[60vh]"
                                    } overflow-y-auto scroll-none`}
                            >
                                {children}
                            </div>
                        </div>

                        <div className="absolute bottom-0 z-[101] items-end p-4 md:p-5 w-full rounded-b-lg">

                            <div className="flex text-white my-2 items-center justify-between">
                                <p>Total : </p>
                                <p>${totalAmount?.toFixed(2)}</p>
                            </div>
                            <div onClick={() => {
                                if (items?.length) {
                                    handleClearCart()
                                }
                            }
                            } className={` ${!items?.length ? "cursor-not-allowed bg-red-900 hover:bg-red-900" : "cursor-pointer"} hover:bg-red-700 text-[18px] w-full mb-2 bg-red-600 text-center text-white rounded py-3`}>
                                Clear All
                            </div>

                            <div onClick={() => {
                                if (items?.length) {
                                    { router.push("/checkout"), dispatch(togglePopup()) }
                                }
                            }}
                                className={`${!items?.length ? "cursor-not-allowed bg-green-900 hover:bg-green-900" : "cursor-pointer"}
                             hover:bg-green-700 text-[18px] w-full bg-green-600 text-center text-white rounded py-3
                            `}>
                                Checkout
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
