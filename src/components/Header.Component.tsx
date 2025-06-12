import React from "react";
import { Link } from "react-router-dom";
import { BsBraces } from "react-icons/bs";

const HeaderComponent: React.FunctionComponent= () => {
  return (
    <header className="header-component">
      <div className="wrapper">
        <h1><BsBraces /></h1>
        <h1>THE ULTIMATE FREE STARTER JSON API FOR YOUR DREAM PROJECT.</h1>
        <p>
          Free json api to provide you with fake json data for free to be able
          to sample and test out your frontend and backend projects to handle
          fetching of data from a complete secure live free hosted source.
        </p>
        <Link to={{
          pathname: "/api/token/issue",
          search: ""
        }}>
          <button type="button">Get token</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
