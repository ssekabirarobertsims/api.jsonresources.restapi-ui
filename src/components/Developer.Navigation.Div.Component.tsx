import React, { useRef } from "react";

const SiteDeveloperNavigationComponent: React.FC = () => {
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
        <a href="http://robertsims.netlify.app" target="_blank">
          <img src="/photos/robertsims.jpg" alt="" ref={photosRef.current} />
        </a>
      </div>
    </>
  );
};

export default SiteDeveloperNavigationComponent;
