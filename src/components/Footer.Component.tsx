import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

interface LinkType {
  id: string;
  link: string;
  value: string;
}

const FooterComponent: React.FunctionComponent<any> = (): any => {
  const [links, setLinks] = useState([
    {
      id: uuid() as string,
      link: "https://robertsims.netlify.app",
      value: "developer",
    },
    {
      id: uuid() as string,
      link: "https://github.com/ssekabirarobertsims",
      value: "github",
    },
    {
      id: uuid() as string,
      link: "https://api-jsonresources-restapi.onrender.com/api/legal/information",
      value: "about api",
    },
    {
      id: uuid() as string,
      link: "https://api-jsonresources-restapi.onrender.com",
      value: "api",
    },
  ] as Readonly<LinkType>[]);

  useEffect(() => {
    setLinks(links);
  }, [links]);

  const date: string = format(new Date(), "yyyy") as string;

  return (
    <footer className="footer-component">
      <div className="wrapper">
        <p>
          Developed with <IoHeart /> by <a href={links[0].link}>robert sims</a>{" "}
          software engineer
        </p>
        <ul>
          {links.map((index: LinkType) => (
            <li key={index.id}>
              <a href={index.link}>{index.value}</a>
            </li>
          ))}
        </ul>
      </div>
      <aside>
        <p>&copy;right 2024, {date as string} all rights reserved</p>
      </aside>
    </footer>
  );
}

export default FooterComponent;
