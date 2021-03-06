import React from "react";
import "./AppBar.css";

const AppBar = ({ children }) => {
    return (
        <header className="page-header">
            <div className="app-bar-children">{children}</div>
            <hr />
        </header>
    );
};

export default AppBar;
