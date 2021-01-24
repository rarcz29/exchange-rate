import React from "react";
import "./Arrow.css";

const Arrow = ({ className }) => {
    return (
        <div className={`arrow ${className}`}>
            <div className="elem1"></div>
            <div className="elem2"></div>
        </div>
    );
};

export default Arrow;
