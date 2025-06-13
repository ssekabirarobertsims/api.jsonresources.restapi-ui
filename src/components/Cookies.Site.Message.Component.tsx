import React from "react";
import removeElement from "../functions/Remove.Element.Function";

const CookiesSiteMessageComponent: React.FunctionComponent = () => {
  return !document.cookie.includes("cookiesAccepted") ? (
    <aside className="cookies-site-message-component">
      <div>
        <p>
          This site uses cookies. By continuing to use this site, you agree
          to their use in your browser and operation to enhance performance while using this site!
        </p>
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault(); // prevent event bubbling
            // Logic to accept cookies
            console.log("Cookies accepted");
            // You can also set a cookie here to remember the user's choice
            document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year
            // remove component after button click
            if ((event.target as HTMLButtonElement).click)
              removeElement(
                window.document.querySelector(
                  ".cookies-site-message-component"
                ) as HTMLElement
              );
            else return;
          }}
        >
          Accept
        </button>
      </div>
    </aside>
  ) : null;
  // If cookies are not accepted, you can show a message or do nothing
};

export default CookiesSiteMessageComponent;
