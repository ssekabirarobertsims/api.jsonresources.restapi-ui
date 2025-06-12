import React from "react";
import "../stylesheets/main.stylesheet.css";
import { BiError } from "react-icons/bi";

const OfflineElementsComponent: React.FunctionComponent = () => {
  // Set the document title when the component mounts
  React.useEffect(() => {
	document.title = "State - Offline | jsonresources api";
  }, []);

  return (
	 window.navigator.onLine ? "" :  <aside className="offline-elements-component">
					<div>
						<article>
							<h1><BiError /></h1>
							<span>Opps something wrong happened!</span>
							<p>Seems like you have lost your connection to the internet.</p>
						</article>
					</div>
				</aside>
  );
};

export default OfflineElementsComponent;
