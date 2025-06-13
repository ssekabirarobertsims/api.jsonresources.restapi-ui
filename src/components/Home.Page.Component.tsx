import React, { useEffect, useRef, useState } from "react";
import { BsCopy } from "react-icons/bs";
import { v4 as uuid } from "uuid";

// Define the type for API resource links
interface Link {
  id: string;
  value: string;
  link: string;
} 

const HomePageComponent: React.FunctionComponent = () => {
  // Ref to hold the sample code snippet for copying
  const codes = useRef<string>(
    `
    (async function(){
      const{data: response} = await axios.get("https://api-jsonresources-restapi.onrender.com/resources/users", {
        headers: {
          "Authorization": 'Bearer YOUR_SECRETE_API_TOKEN',
          "Content-Type": "Application/json"
        }
      });
  
      console.log(response);
    }());
    `
  );

  // State to hold the list of API resource links
  const [links, setLinks] = useState([
    {
      id: uuid() as string,
      value: "/resources/texts",
      link: `${import.meta.env.VITE_GET_TEXT_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/texts/:id",
      link: `${import.meta.env.VITE_GET_SINGLE_TEXT_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/users",
      link: `${import.meta.env.VITE_GET_USERS_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/users/:id",
      link: `${import.meta.env.VITE_GET_SINGLE_USERS_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/photos",
      link: `${import.meta.env.VITE_GET_PHOTOS_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/photos/:id",
      link: `${import.meta.env.VITE_GET_SINGLE_PHOTOS_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/posts",
      link: `${import.meta.env.VITE_GET_POSTS_RESOURCES_API_POINT}`,
    },
    {
      id: uuid() as string,
      value: "/resources/posts/:id",
      link: `${import.meta.env.VITE_GET_SINGLE_POSTS_RESOURCES_API_POINT}`,
    },
  ] as Readonly<Link>[]);

  // Effect to set links (redundant, as links never change)
  useEffect(() => {
    setLinks(links);
  }, [links]);

  return (
    <main className="home-page-component">
      <section>
        {/* Section for trying out resource fetching */}
        <h1>Try to fetch some resources</h1>
        <p>
          Try to fetch some api users resources using this url resource provider
          to test the API.
        </p>
        {/* Message shown when code is copied */}
        <span className="copy-message"></span>
        {/* Sample code image */}
        <div className="sample-cont">
          <img src="/photos/codes.png" alt="codes_sample" />
        </div>
        {/* Button to copy the sample code to clipboard */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();

            (
              window.document.querySelector(".copy-message") as HTMLSpanElement
            ).textContent = "codes copied to clipboard!";

            window.navigator.clipboard.writeText(codes.current as string);

            window.setTimeout(() => (
                window.document.querySelector(
                  ".copy-message"
                ) as HTMLSpanElement
              ).textContent = "", 4000 as number);
          }}
        >
          <BsCopy /> copy code
        </button>
      </section>
      <br />
      <section>
        {/* Section listing API resources and routes */}
        <h1>API Resources & Routes</h1>
        <p>
          Checkout the following API resources to sample out your project and
          fetch resources.
        </p>
        <ul>
          {links.map((index: Link) => (
            <li key={index.id ? index.id : ""} className="api-links">
              <a href={index.link ? index.link : ""} target="_blank">
                {index.value ? index.value : ""}
              </a>
            </li>
          ))}
        </ul>
        <br />
        <br />
        {/* Warning section about API usage */}
        <h1>
          <strong>Warning!</strong>
        </h1>
        <p className="warning">
          Fetching json resources from this api using the http/https get method
          and use it in your projects for testing is allowed and also other
          http/https methods like put, delete, and patch are also supported by
          this api but the only thing is that as this api provides sampling json
          data which is fake data, there wont be any resources updated, deleted
          or created and saved to the databases you make from your projects
          while testing.
        </p>
      </section>
    </main>
  );
};

export default HomePageComponent;
