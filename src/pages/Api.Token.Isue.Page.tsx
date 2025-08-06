import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import NavigationBar from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { BiNote } from "react-icons/bi";
import OfflineElementsComponent from "../components/Offline.Component";
import axios from "axios";
import { BsCopy } from "react-icons/bs";
import CookiesSiteMessageComponent from "../components/Cookies.Site.Message.Component";

const ApiTokenIssuePage: React.FunctionComponent = () => {
  // State for username input
  const [username, setUsername] = useState<string>("");
  // State for email input
  const [email, setEmail] = useState<string>();
  // State to control showing the token issue response
  const [showTokenIssue, setShowTokenIssue] = useState<boolean>(false);
  // State to control showing the loader
  const [showLoader, setShowLoader] = useState<boolean>(false);
  // State to store the issued token
  const [token, setToken] = useState<string>("token");
  // state to handle the response messages for token issuing
  const [responseMessage, setResponseMessage] = useState<string>("");

  // Effect to make post request to the API to issue new secret token (currently not functional)
  const handleSubmit = async () => {
    setShowLoader(true);

    // hide the loader after a certain period of time
    window.setTimeout(() => setShowLoader(false), 5000);

    try {
      // Clear previous token and response message
      setToken("");
      // Clear the show token issue state
      setShowTokenIssue(false);
      // Check if username and email are provided
      if (!username || !email) {
        window.setTimeout(() => {
          console.error("Username and email are required to issue a token.");
          setResponseMessage(
            String("Username and email are required to issue a token")
          );
          setShowTokenIssue(false);
          return;
        }, 5000);
      }
      // Make a POST request to the API to issue a new secret token
      // Note: The API endpoint and headers should be configured correctly in the environment variables

      const { data: response } = await axios.post(
        `${import.meta.env.VITE_API_SECRETE_TOKEN_ISSUE_API_ENDPOINT}`,
        {
          username: username,
          email: email,
        },
        {
          headers: {
            Authorization: "",
            "Content-Type": "Application/json",
          },
        }
      );

      // check for conditions for the request response state
      if (response?.status_code === 201) {
        // If the response status code is 201, set the token and show the token issue response
        setToken(response?.data?.token || "");
        window.setTimeout(() => setShowTokenIssue(true), 6000);
      }

      // If the response status code is not 201, log the error
      else {
        window.setTimeout(() => {
          setResponseMessage(
            String(
              response?.message ?? "Unknown error occurred while issuing token."
            )
          );
          setShowTokenIssue(false);
          console.error(
            "Error issuing token:",
            response?.message || "Unknown error"
          );
          return;
        }, 5000);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle any errors that occur during the request
      window.setTimeout(() => {
        setResponseMessage(
          String(
            error?.response?.message ??
              "An error occurred while issuing the token."
          )
        );
        setShowTokenIssue(false);
        console.error(
          "Error issuing token:",
          error?.response?.message || error
        );
      }, 5000);
    }
  };

  // Set the document title and a sample token when the component mounts
  useEffect(() => {
    document.title = "jsonresources-api | Token Issue - Get token";
  }, []);

  return (
    <>
      {/* Navigation bar at the top */}
      <NavigationBar />
      {/* Offline notification component */}
      <OfflineElementsComponent />
      <section className="api-token-issue-page">
        <div className="api-token-issue-page-content-wrapper">
          {/* Show token issue response if token is issued */}
          {showTokenIssue && (
            <article className="api-token-issue-successful-response-wrapper">
              <div>
                <aside>
                  <h2>Api secrete token issue</h2>
                  <p>
                    Successfully issued jsonresources api secrete token using
                    your email <strong>({email ?? "example@gmail.com"})</strong>{" "}
                    valid for only 10 days.
                  </p>
                  <textarea
                    name="token"
                    id="token"
                    value={token}
                    rows={1}
                  ></textarea>
                  <p></p>
                  <p></p>
                  {/* Button to copy the issued token to clipboard */}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      window.navigator.clipboard.writeText(
                        (event.target as HTMLTextAreaElement).value || token
                      );
                    }}
                  >
                    <BsCopy /> Copy secrete token
                  </button>
                </aside>
              </div>
            </article>
          )}
          {/* Form to request a new API token */}
          <form action="" method="post" encType="multipart/form-data">
            <article>
              <span>Issue Api Secrete Token</span>
              <p className="token-issue-message">{responseMessage as string}</p>

              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                aria-placeholder="username"
                required
                aria-required="true"
                onChange={(event) => {
                  setUsername((event.target as HTMLInputElement).value);
                }}
                value={username}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                aria-placeholder="email"
                required
                aria-required="true"
                onChange={(event) => {
                  setEmail((event.target as HTMLInputElement).value);
                }}
                value={email}
              />
              <p>
                <BiNote /> Each api secrete token has an expiry time!
              </p>
              <p></p>
              {/* Button to issue a new token (currently not functional) */}
              <button type="button" onClick={handleSubmit}>
                {showLoader && (
                  <div
                    className={String(
                      "primary-spinner-wrapper"
                    ).toLocaleLowerCase()}
                  >
                    <div className="loader"></div>
                  </div>
                )}
                Issue token
              </button>
            </article>
          </form>
        </div>
      </section>
      {/* Footer at the bottom */}
      <CookiesSiteMessageComponent />
      <FooterComponent />
    </>
  );
};

export default ApiTokenIssuePage;
