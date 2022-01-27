import React from "react";

function Header() {
    return (
        <>
            <div className="relative">
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box place-content-center fixed top-0 left-0 right-0">
                    <div className="px-2 mx-2 navbar-center ">
                        <span className="text-lg font-bold">Sorting Hat</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
