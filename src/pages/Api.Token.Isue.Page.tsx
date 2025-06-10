import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import NavigationBar from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";

const ApiTokenIssuePage: React.FunctionComponent = () => {
	// Set the document title for the Not Found page
  useEffect(() => {
	document.title = "jsonresources-api | Token Issue - Get token";
  }, []);

  return (
	<>
		<NavigationBar />
	  <section className="api-token-issue-page">
		<div className="api-token-issue-page-content-wrapper">
		 	<form action="" method="post" encType="multipart/form-data">
				<article>
					<span>Issue api token</span>
					<input type="text" name="username" id="username"
						placeholder="username"
						aria-placeholder="username"
						required
						aria-required="true"
					/>
					<input type="email" name="email" id="email"
						placeholder="email"
						aria-placeholder="email"
						required
						aria-required="true"
					/>
					<br />
					<button type="button">Issue token</button>
				</article>
			</form>
		</div>
	  </section>
	  <FooterComponent />
	</>
  );
};

export default ApiTokenIssuePage;
