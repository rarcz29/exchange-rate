import React, { useState } from "react";

const ExchangeForm = () => {
    const [input1, setInput1] = useState(0);

    const handleSubmit = (event) => {
        console.log(input1);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={input1}
                onChange={(event) => setInput1(event.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
};

export default ExchangeForm;
