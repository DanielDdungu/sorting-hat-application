import React, { useState } from "react";
import Data from "../data/Data.json";

function Questions() {
    const [currentQuestion, setCurretQuestion] = useState(Data[0]);
    const [currentQuestionIdx, setCurretQuestionIdx] = useState(0);
    const [prevQuestions, setPrevQuestions] = useState([]);
    const [housePoints, setHousePoints] = useState({
        g: 0,
        r: 0,
        h: 0,
        s: 0,
    });

    const handleAnswerSelected = (answer) => {
        const newVals = answer.scores;
        const prevVals = housePoints;
        Object.entries(prevVals).forEach(([k, v]) => {
            prevVals[k] = v + newVals[k];
        });
        setHousePoints((prev) => prevVals);
        setPrevQuestions((prev) => [
            ...prev,
            { ...currentQuestion, selectedAnswer: answer },
        ]);
        setCurretQuestion(Data[currentQuestionIdx + 1]);
        setCurretQuestionIdx((p) => p + 1);

        // Next steps

        // detect when the index is equal to the length of the DATA array

        // if yes, navigate the user to the success page, and take the house with the highest points

        // on the success page, pick the house from router history and show it in the ui
    };

    return (
        <>
            <div className="relative">
                <div className="grid grid-cols-4 gap-3 justify-between place-content-center h-40 ... bg-base-200 drop-shadow-2xl fixed top-24 left-0 right-0">
                    {Object.entries(housePoints).map(([house, points]) => {
                        return (
                            <div className="grid place-items-center mb-8">
                                <h1 className="text-2xl uppercase my-2">
                                    {house}
                                </h1>
                                <div className="avatar lg:scale-100 md:scale-50">
                                    <div className=" rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2 my-2">
                                        <img
                                            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                                            alt=""
                                        />
                                        <h2>{points / 100}</h2>
                                    </div>
                                </div>

                                <h1 className="text-2xl">{points}</h1>
                            </div>
                        );
                    })}
                </div>

                {/**Question Section*/}
                <div className=" lg:px-12 md:px-12 overflow-y-auto absolute inset-x-0 bottom-0 h-64 top-64">
                    {/* 0 is falsy */}
                    {prevQuestions.length ? (
                        <>
                            {prevQuestions.map((question) => (
                                <div>
                                    <div className="p-6 max-w-sm my-3  bg-sky-300 rounded-xl shadow-lg flex items-center space-x-4 rounded-bl-none">
                                        <div>
                                            <p className="text-neautral-900">
                                                {question.title}{" "}
                                            </p>
                                        </div>
                                    </div>
                                    {/** Answer*/}
                                    <div className="flex flex-row-reverse">
                                        <div className=" right-0 p-6 max-w-sm my-3  bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4 rounded-br-none ring-blue-300">
                                            <div>
                                                <p className="text-neautral-900">
                                                    {
                                                        question.selectedAnswer
                                                            .title
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : null}

                    <div className="p-6 max-w-sm my-3  bg-sky-300 rounded-xl shadow-lg flex items-center space-x-4 rounded-bl-none">
                        <div>
                            <p className="text-neautral-900">
                                {currentQuestion.title}
                            </p>
                        </div>
                    </div>

                    <div className=" grid grid-cols-4 md:grid-cols-2 gap-4 justify-between place-content-center lg:mx-12 md:mx-0 drop-shadow-lg  mb-5">
                        {currentQuestion.answers.map((answer) => (
                            <button
                                className="text-center p-3 transition ease-in-out delay-150 bg-gray-500  text-white hover:translate-y-1 hover:scale-100 hover:bg-sky-200 duration-300 rounded-lg"
                                onClick={() => handleAnswerSelected(answer)}
                            >
                                {answer.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
