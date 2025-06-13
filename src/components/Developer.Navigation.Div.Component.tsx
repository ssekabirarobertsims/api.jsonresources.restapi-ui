import React, { useRef } from "react";

const SiteDeveloperNavigationComponent: React.FunctionComponent = () => {
  const photosRef = useRef(null);
  return (
    <>
      <div
        className="site-developer-navigation-component"
        title={String(
          "Get helped out by our expert software engineer about all your needs."
        )}
      >
        <p>Need some little help!</p>
        <a href="http://ssekabirarobertsims.netlify.app" target="_blank">
          <img src="/photos/ssekabirarobertsims-2.png" alt="" ref={photosRef} />
        </a>
      </div>
    </>
  );
};

export default SiteDeveloperNavigationComponent;
