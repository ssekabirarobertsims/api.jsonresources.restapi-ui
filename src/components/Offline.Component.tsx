import React, { useState, useEffect } from "react";
import "../stylesheets/main.stylesheet.css";
import { BiError } from "react-icons/bi";

const OfflineElementsComponent: React.FunctionComponent = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    document.title = "State - Offline | jsonresources api";

    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <>
      {!isOnline && (
        <>
          <aside
            className="offline-elements-component"
            onClick={(event) => {
              event.stopPropagation();
              (event.target as HTMLElement).style.display = "none";
            }}
          >
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <article>
                <h1>
                  <BiError />
                </h1>
                <span>Oops, something went wrong!</span>
                <p>Seems like you have lost your connection to the internet.</p>
                <br />
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    window.location.reload();
                  }}
                >
                  reload
                </button>
              </article>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default OfflineElementsComponent;
