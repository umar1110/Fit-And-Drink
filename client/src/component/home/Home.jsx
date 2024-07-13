import React from "react";
import Footer from "../layouts/Footer/Footer";
import ServicesPage from "../services/ServicesPage";
import AboutUsPage from "./AboutUs/AboutUsPage";
import ContactUsPage from "./Contact/ContactUsPage";
import LandingPage from "./landingpage/LandingPage";
import HomeProducts from "./products/HomeProducts";
function Home() {


  return (
    <div id="homePage">
      <LandingPage />
      <AboutUsPage />
      <HomeProducts/>
      <ServicesPage/>
      <ContactUsPage/>
      <Footer/>
      </div>
  );
}

export default Home;
