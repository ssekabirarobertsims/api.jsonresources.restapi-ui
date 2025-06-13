import React from "react";
import "../stylesheets/main.stylesheet.css";
import { BiError } from "react-icons/bi";

const OfflineElementsComponent: React.FunctionComponent = () => {
  // Set the document title when the component mounts
  React.useEffect(() => {
    document.title = "State - Offline | jsonresources api";
  }, []);

  return (
    // Conditionally render the offline message if the user is offline
    window.navigator.onLine ? "" :  <aside className="offline-elements-component">
                    <div>
                        <article>
                            {/* Error icon and message */}
                            <h1><BiError /></h1>
                            <span>Opps something wrong happened!</span>
                            <p>Seems like you have lost your connection to the internet.</p>
                        </article>
                    </div>
                </aside>
  );
};

export default OfflineElementsComponent;
