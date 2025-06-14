import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

// Define the type for footer links
interface LinkType {
  id: string;
  link: string;
  value: string;
}

const FooterComponent: React.FunctionComponent = () => {
  // Initialize footer links with developer, GitHub, and API URLs
  const [links, setLinks] = useState([
    {
      id: uuid() as string,
      link: "https://ssekabirarobertsims.netlify.app",
      value: "developer",
    },
    {
      id: uuid() as string,
      link: "https://github.com/ssekabirarobertsims/api.jsonresources.restapi-ui",
      value: "github",
    },
    {
      id: uuid() as string,
      link: "https://api-jsonresources-restapi.onrender.com",
      value: "api",
    },
  ] as Readonly<LinkType>[]);

  // Effect to set links (currently redundant, as links never change)
  useEffect(() => {
    setLinks(links);
  }, [links]);

  // Get the current year as a string
  const date: string = format(new Date(), "yyyy") as string;

  return (
    <footer className="footer-component">
      <div className="wrapper">
        {/* Developer credit with heart icon and link */}
        <p>
          Developed with <IoHeart /> by{" "}
          <a href={links[0].link}>ssekabira robert sims</a> software engineer
        </p>
        {/* Render list of footer links */}
        <ul>
          {links.map((index: LinkType) => (
            <li key={index.id}>
              <a href={index.link}>{index.value}</a>
            </li>
          ))}
        </ul>
      </div>
      <aside>
        {/* Copyright notice */}
        <p>&copy;right 2024, {date as string} all rights reserved</p>
      </aside>
    </footer>
  );
};

export default FooterComponent;
