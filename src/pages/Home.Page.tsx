import NavigationBar from "../components/Navigation.Bar.Component";
import HomePageComponent from "../components/Home.Page.Component";
import HeaderComponent from "../components/Header.Component";
import FooterComponent from "../components/Footer.Component";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <HeaderComponent />
      <HomePageComponent />
      <br />
      <FooterComponent />
    </>
  );
}

export default HomePage;
