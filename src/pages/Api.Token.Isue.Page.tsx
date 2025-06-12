import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import NavigationBar from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { BiNote } from "react-icons/bi";
import OfflineElementsComponent from "../components/Offline.Component";
import axios from "axios";
import { BsCopy } from "react-icons/bs";

const ApiTokenIssuePage: React.FunctionComponent = () => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("sample@gmail.com");
	const [showTokenIssue, setShowTokenIssue] = useState<boolean>(false);
	const [token, setToken] = useState<string>("");

	// make post request to the api to issue new secrete token
	useEffect(() => {
		(async function(){ // store link to api in env vars
			const {data: response} = await axios.post(``, {
				headers: {
					"Authorization": "",
					"Content-Type": ""
				}
			});

			// check for conditions for the request response state
			if(response?.status_code === 201) {
				setShowTokenIssue(true);
			}

			return;
		}());
	});
	
	// Set the document title for the Not Found page
  useEffect(() => {
	setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjU3YjNhZDIzLTE1MmQtNDFmNy1iZjhkLTBiZGNmZjFkNjFmMSIsInVzZXJuYW1lIjoicm9iIiwiZW1haWwiOiJyb2JAZ21haWwuY29tIiwiaWF0IjoxNzQ5NTgzMTMxLCJleHAiOjE3NTA0NDcxMzF9.zCUObiwk_bAdADx4WbpDFZ69TySOedqLWibDtqmUZ_0");
	document.title = "jsonresources-api | Token Issue - Get token";
  }, []);

  return (
	<>
		<NavigationBar />
		<OfflineElementsComponent />
	  <section className="api-token-issue-page">
		<div className="api-token-issue-page-content-wrapper">
			{showTokenIssue && <article className="api-token-issue-successful-response-wrapper">
				<div>
					<aside>
						<h2>Api secrete token issue</h2>
						<p>
							Successfully issued jsonresources api secrete token using your email <strong>{email}</strong> valid for only 
							10 days.
						</p>
						<textarea name="token" id="token" value={token}
						rows={1}
						></textarea>
						<p></p>
						<p></p>
						<button type="button" onClick={(event) => {
							event.stopPropagation();
							window.navigator.clipboard.writeText((event.target as HTMLTextAreaElement).value || token);
						}}><BsCopy /> Copy secrete token</button>
					</aside>
				</div>
			</article>}
		 	<form action="" method="post" encType="multipart/form-data">
				<article>
					<span>Issue Api Secrete Token</span>
					<input type="text" name="username" id="username"
						placeholder="username"
						aria-placeholder="username"
						required
						aria-required="true"
						onChange={(event) => {
							setUsername((event.target as HTMLInputElement).value);
						}}
						value={username}
					/>
					<input type="email" name="email" id="email"
						placeholder="email"
						aria-placeholder="email"
						required
						aria-required="true"
						onChange={(event) => {
							setEmail((event.target as HTMLInputElement).value);
						}}
						value={email}
					/>
					<p><BiNote /> Each api secrete token has an expiry time!</p>
					<p></p>
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
