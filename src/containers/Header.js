import React from "react";
import Divider from "@material-ui/core/Divider";
import Clock from "../components/Clock";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <div id="abcd">
          <h1 className="margin-zero">{title}</h1>
          <Clock
            className="margin-zero"
            text="Current time: "
            locales="pl-PL"
          />
        </div>

        <div className="right-side">
          <h2 className="margin-zero">Service status</h2>
          <p className="margin-zero">Last updated 11:50:23 PM</p>
          <p className="margin-zero">Next update in 31 sec</p>
        </div>
      </div>
      <Divider />
    </header>
  );
};

export default Header;
