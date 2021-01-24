import React from "react";
import Arrow from "./Arrow";
import "./SwapButton.css";

const SwapButton = ({ swapValuesCallback }) => {
    return (
        <div className="swap-bt-container">
            <button className="swap-bt" onClick={swapValuesCallback}>
                <Arrow className="swap-arrow" />
                <Arrow className="swap-arrow second-arrow" />
            </button>
        </div>
    );
};

export default SwapButton;
