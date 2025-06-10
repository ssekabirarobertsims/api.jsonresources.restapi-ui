import React, { useEffect } from "react";
import NavigationBar from "../components/Navigation.Bar.Component";
import HomePageComponent from "../components/Home.Page.Component";
import HeaderComponent from "../components/Header.Component";
import FooterComponent from "../components/Footer.Component";
import CookiesWarningComponent from "../components/Cookies.Site.Message.Component";
import SiteDeveloperNavigationComponent from "../components/Developer.Navigation.Div.Component";

const HomePage: React.FunctionComponent = () => {
    // Set the document title for the Not Found page
    useEffect(() => {
      document.title = "jsonresources-api | Home - Main Page";
    }, []);

  return (
    <>
      <NavigationBar />
      <HeaderComponent />
      <SiteDeveloperNavigationComponent />
      <CookiesWarningComponent />
      <HomePageComponent />
      <br />
      <FooterComponent />
    </>
  );
}

export default HomePage;
