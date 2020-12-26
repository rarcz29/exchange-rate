import React from "react";
import "./AppBar.scss";

const AppBar = ({ children, contentMargin }) => {
    return (
        <header>
            <div className="app-bar-children" style={{ margin: contentMargin }}>
                {children}
            </div>
            <hr />
        </header>
    );
};

export default AppBar;
