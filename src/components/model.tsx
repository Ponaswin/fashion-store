


import React from 'react'

const model = (props: any) => {

    const { show, setShow, title, titleStyle, popupStyle, popupDiv, backGroundStyle, handleClose, children, btnStyle, footerContent } = props


    return (
        <div>
            <div
                className={`${show ? "block" : "hidden"
                    } fixed inset-0 z-[100] bg-black bg-opacity-40 ${popupStyle}`}
            >
                <div
                    className={`flex items-center justify-center p-4 min-h-screen w-full ${popupDiv} mx-auto`}
                >
                    <div
                        className={`relative rounded-lg shadow ${backGroundStyle}`}
                        style={{
                            // background: "rgba(0, 0, 0, 0.8)",
                            backdropFilter: "blur(5px)",
                        }}
                    >
                        <div className="relative rounded-lg shadow ">
                            {title && (
                                <div className="flex items-center justify-between p-4 md:p-5  rounded-t text-[20px] ">
                                    <h3
                                        className={`text-[20px] font-semibold text-white ${titleStyle}`}
                                    >
                                        {title}
                                    </h3>
                                    <button
                                        onClick={() => {
                                            setShow && setShow(false);
                                            handleClose && handleClose();
                                        }}
                                        type="button"
                                        className=" text-white bg-transparent hover:bg-white hover:rounded-full hover:text-black  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                    >
                                        <svg
                                            className="w-3 h-3 "
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            )}
                            <div className="p-4 md:p-5 space-y-4">{children}</div>
                            {footerContent && (
                                <div className="flex items-center p-4 md:p-5  rounded-b ">
                                    {footerContent}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default model
