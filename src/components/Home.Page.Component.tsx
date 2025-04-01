import React, { useEffect, useRef, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { v4 as uuid } from "uuid";

interface Link {
  id: string;
  value: string;
  link: string;
}

const HomePageComponent: React.FunctionComponent<any> = (): any => {
  const codes = useRef(
    `fetch('https://api-jsonresources-restapi.onrender.com/resources/users')`
  );

  const [links, setLinks] = useState([
    {
      id: uuid() as string,
      value: "/resources/texts",
      link: "https://api-jsonresources-restapi.onrender.com/resources/texts",
    },
    {
      id: uuid() as string,
      value: "/resources/texts/:id",
      link: "https://api-jsonresources-restapi.onrender.com/resources/texts/242c59c1-dba4-4e1c-a2eb-056b12e8d32e",
    },
    {
      id: uuid() as string,
      value: "/resources/users",
      link: "https://api-jsonresources-restapi.onrender.com/resources/users",
    },
    {
      id: uuid() as string,
      value: "/resources/users/:id",
      link: "https://api-jsonresources-restapi.onrender.com/resources/users/030f3d31-5209-482e-a391-ae669a1b7f04",
    },
    {
      id: uuid() as string,
      value: "/resources/photos",
      link: "https://api-jsonresources-restapi.onrender.com/resources/photos",
    },
    {
      id: uuid() as string,
      value: "/resources/photos/:id",
      link: "https://api-jsonresources-restapi.onrender.com/resources/photos/fb633db6-e82e-4ccc-897b-ec3baw37899be",
    },
    {
      id: uuid() as string,
      value: "/resources/posts",
      link: "https://api-jsonresources-restapi.onrender.com/resources/posts",
    },
    {
      id: uuid() as string,
      value: "/resources/posts/:id",
      link: "https://api-jsonresources-restapi.onrender.com/resources/posts/fb633db6-e8e-4ccc-897b-ec3ba37899be",
    },
  ] as Readonly<Link>[]);

  useEffect(() => {
    setLinks(links);
  }, [links]);

  return (
    <main className="home-page-component">
      <section>
        <h1>Try to fetch some resources</h1>
        <p>
          Try to fetch some api users resources using this url resource provider
          to test the API.
        </p>
        <span className="copy-message"></span>
        <div className="sample-cont">
          <span>{codes.current as string}</span>
        </div>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();

            (
              window.document.querySelector(".copy-message") as HTMLSpanElement
            ).textContent = "codes copied to clipboard!";

            window.navigator.clipboard.writeText(codes.current as string);

            window.setTimeout(() => {
              (
                window.document.querySelector(
                  ".copy-message"
                ) as HTMLSpanElement
              ).textContent = "";
            }, 4000 as number);
          }}
        >
          <IoCopy /> copy code
        </button>
      </section>
      <br />
      <section>
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
