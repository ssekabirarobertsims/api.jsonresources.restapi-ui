import NavigationBar from "../components/Navigation.Bar.Component";
import HomePageComponent from "../components/Home.Page.Component";
import HeaderComponent from "../components/Header.Component";
import FooterComponent from "../components/Footer.Component";
import CookiesWarningComponent from "../components/Cookies.Warning.Component";
import SiteDeveloperNavigationComponent from "../components/Developer.Navigation.Div.Component";

function HomePage() {
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
