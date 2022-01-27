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
                            <div className="mb-8 rounded-box w-24 h-24  ring ring-primary ring-offset-base-100 ring-offset-2">
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
                <div className=" px-12 overflow-y-auto   fixed top-60 left-0 right-0 h-64 ">
                    <div className="alert alert-success  my-3 rounded-tr-none">
                        <div className="flex-1">
                            <label>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </label>
                        </div>
                    </div>
                    <div className="alert alert-success my-3 rounded-tr-none">
                        <div className="flex-1">
                            <label>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </label>
                        </div>
                    </div>
                    <div className="alert alert-success  rounded-tr-none">
                        <div className="flex-1">
                            <label>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </label>
                        </div>
                    </div>
                    <div className="alert alert-success my-3 rounded-tr-none">
                        <div className="flex-1">
                            <label>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </label>
                        </div>
                    </div>
                    <div className="alert alert-success my-3 rounded-tr-none">
                        <div className="flex-1">
                            <label>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
