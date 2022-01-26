//import React, { useState } from "react";
//import Data from "data/Data";

function Questions() {
    //const [questions, setQuestions] = useState(Data);
    return (
        <>
            <div className="relative">
                <div className="grid grid-cols-4 gap-4 justify-between place-content-center h-32 ... bg-base-200 drop-shadow-2xl fixed top-24 left-0 right-0">
                    <div className=" grid place-items-center">
                        <div className="avatar ">
                            <div className="mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <div className="avatar">
                            <div className="mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <div className="avatar">
                            <div className="mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <div className="avatar">
                            <div className="mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/**Question Section*/}
                <div className=" px-12 overflow-y-scroll absolute inset-x-0 bottom-0 h-5 ">
                    <div className="alert alert-success ">
                        <div className="flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 mx-2 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                ></path>
                            </svg>
                            <label>
                                Lorem ipsum dolor sit amet, consectetur adip!
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
