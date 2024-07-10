import React, { useState } from "react";
import LandingPage from "./landingpage/LandingPage";
import AboutUsPage from "./AboutUs/AboutUsPage";
import HomeProducts from "./products/HomeProducts";

function Home() {
  
  useState(()=>{
    
  })
  return (
    <>
      <LandingPage />
      <HomeProducts/>
      <AboutUsPage />
    </>
  );
}

export default Home;
