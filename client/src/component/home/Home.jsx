import React, { useEffect } from "react";
import AboutUsPage from "./AboutUs/AboutUsPage";
import LandingPage from "./landingpage/LandingPage";
import HomeProducts from "./products/HomeProducts";
import ServicesPage from "../services/ServicesPage";
import ContactUsPage from "./Contact/ContactUsPage";
function Home() {

useEffect(()=>{
 window.scrollTo({ top: 0, behavior: 'smooth' });

})
  return (
    <div id="homePage">
      <LandingPage />
      <AboutUsPage />
      <HomeProducts/>
      <ServicesPage/>
      <ContactUsPage/>
      
      </div>
  );
}

export default Home;
