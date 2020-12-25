import React from "react";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header>
      <div class="container">
        <div class="header-left-side">
          <h1 className="title">{title}</h1>
          <p className="current-time">Current time: some time</p>
        </div>

        <div class="header-right-side">
          <p>some text</p>
        </div>
      </div>
      <Divider />
    </header>
  );
};

export default Header;
