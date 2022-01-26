import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const [name, setName] = useState("");
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate();

    const handleChangeUserName = (e) => {
        e.preventDefault();
        setName(e.target.value);
        //navigate("../questions", { replace: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirm(true);
        console.log(name);
        navigate("../questions", { replace: true });
    };
    return (
        <>
            <div className="hero h-screen bg-base-200">
                <div className="text-center hero-content">
                    <div className="flex flex-col justify-center">
                        <div className="card-title font-bold text-3xl">
                            WELCOME TO SORTING HAT
                        </div>
                        <div>
                            <form className="pt-5" onSubmit={handleSubmit}>
                                <div className="card drop-shadow-2xl bg-base-100 ">
                                    <div className="card-body ">
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-semibold">
                                                    User Name
                                                </span>
                                            </label>
                                            <input
                                                onChange={handleChangeUserName}
                                                type="text"
                                                placeholder="User Name"
                                                value={name}
                                                className="input input-bordered font-semibold"
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button
                                                type="Submit"
                                                className="btn btn-primary"
                                                disabled={!name}
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
