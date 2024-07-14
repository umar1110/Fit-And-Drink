import React from "react";
import ServicesPage from "../services/ServicesPage";
import AboutUsPage from "./AboutUs/AboutUsPage";
import ContactUsPage from "./Contact/ContactUsPage";
import LandingPage from "./landingpage/LandingPage";
import HomeProducts from "./products/HomeProducts";
function Home() {


  return (
    <div id="homePage">
      <LandingPage />
      <HomeProducts/>
      <ServicesPage/>
      <AboutUsPage />
      <ContactUsPage/>
   
      </div>
  );
}

export default Home;
