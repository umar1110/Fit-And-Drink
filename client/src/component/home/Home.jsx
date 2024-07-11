import React, { useEffect } from "react";
import AboutUsPage from "./AboutUs/AboutUsPage";
import LandingPage from "./landingpage/LandingPage";
import HomeProducts from "./products/HomeProducts";
import ServicesPage from "../services/ServicesPage";
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
      
      </div>
  );
}

export default Home;
