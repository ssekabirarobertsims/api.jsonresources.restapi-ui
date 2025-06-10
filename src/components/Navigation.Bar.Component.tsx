import React from "react";
import { BsBraces } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavigationBar: React.FunctionComponent = () => {
  return (
    <nav className="navigation-bar-component">
      <div className="wrapper">
        <Link to={{
          pathname: "/",
          search: "page=home"
        }}>
          json resources api <BsBraces />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
