import React from "react";

const HeaderComponent: React.FunctionComponent<any> = (): any => {
  return (
    <header className="header-component">
      <div className="wrapper">
        <h1>THE ULTIMATE FREE STARTER JSON API FOR YOUR PROJECT.</h1>
        <p>
          Free json api to provide you with fake json data for free to be able
          to sample and test out your frontend and backend projects to handle
          fetching of data from a complete secure live free hosted source.
        </p>
        <a
          href="https://api-jsonresources-restapi.onrender.com"
          target="_blank"
        >
          Free api for testing out your projects!
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
