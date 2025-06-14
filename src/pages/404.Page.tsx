import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FunctionComponent = () => {
  // Set the document title for the Not Found page
  useEffect(() => {
    document.title = "jsonresources-api | 404 - Page Not Found";
  }, []);

  // This component renders a 404 Not Found page with a sad icon, title, message, and a link to go back to the home page
  // This component renders a 404 Not Found page with a sad icon, title, message, and a link to go back to the home page
  // It uses the useEffect hook to set the document title when the component mounts

  return (
    <>
      <section className="not-found-page-container">
        <div className="not-found-page-content">
          {/* <h1 className="not-found-page-title">404</h1> */}
          <span className="not-found-page-prime-message">
            404 | OPPS! PAGE WAS FOUND
          </span>
          <p className="not-found-page-message">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="not-found-page-link">
            Go back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
