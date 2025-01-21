import { LuBraces } from "react-icons/lu";

function HeaderComponent() {
  return (
    <header className="header-component">
      <div className="wrapper">
        <h1>
          Json Resources Api <LuBraces />
        </h1>
        <p>
          This is a free online REST API that provides sampling json resources
          interactivity in form of JSON objects to provide effective resource
          sharing to all origins freely and handles all CRUD operations to help
          you test out your projects with json data fetching.
        </p>
        <a
          href="https://api-jsonresources-restapi.onrender.com"
          target="_blank"
        >
          Free api for testing out your projects!
        </a>
      </div>
    </header>
  );
}

export default HeaderComponent;
