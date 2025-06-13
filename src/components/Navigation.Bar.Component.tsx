import React from "react";
import { BsBraces } from "react-icons/bs";
import { Link } from "react-router-dom";

// Navigation bar component for the application
const NavigationBar: React.FunctionComponent = () => {
  return (
    <nav className="navigation-bar-component">
      <div className="wrapper">
        {/* Link to the home page with branding and icon */}
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
