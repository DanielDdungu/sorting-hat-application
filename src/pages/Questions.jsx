import React, { useState } from "react";
import Data from "data/Data";

function Questions() {
    const [questions, setQuestions] = useState(Data);
    return (
        <>
            <div className="container"></div>;
        </>
    );
}

export default Questions;
