import React from "react";

function Header() {
    return (
        <>
            <div className="relative">
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content place-content-center fixed top-0 left-0 right-0">
                    <div className="px-2 mx-2 navbar-center ">
                        <span className="lg:text-4xl font-bold md:text-2xl uppercase">
                            Sorting Hat
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
