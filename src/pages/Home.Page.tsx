import React, { useEffect } from "react";
import NavigationBar from "../components/Navigation.Bar.Component";
import HomePageComponent from "../components/Home.Page.Component";
import HeaderComponent from "../components/Header.Component";
import FooterComponent from "../components/Footer.Component";
import CookiesWarningComponent from "../components/Cookies.Site.Message.Component";
import SiteDeveloperNavigationComponent from "../components/Developer.Navigation.Div.Component";
import OfflineElementsComponent from "../components/Offline.Component";

const HomePage: React.FunctionComponent = () => {
    // Set the document title for the Home page when the component mounts
    useEffect(() => {
      document.title = "jsonresources-api | Home - Main Page";
    }, []);

  return (
    <>
      {/* Navigation bar at the top */}
      <NavigationBar />
      {/* Header section with branding and intro */}
      <HeaderComponent />
      {/* Offline notification if user is offline */}
      <OfflineElementsComponent />
      {/* Developer navigation links */}
      <SiteDeveloperNavigationComponent />
      {/* Cookie warning message */}
      <CookiesWarningComponent />
      {/* Main home page content */}
      <HomePageComponent />
      <br />
      {/* Footer at the bottom */}
      <FooterComponent />
    </>
  );
}

export default HomePage;
