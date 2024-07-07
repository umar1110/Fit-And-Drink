import React from "react";
import LandingPage from "../landingpage/LandingPage";

function Home() {
  return (
    <>
      <LandingPage />
      <div
      name="about-us"
        id="about-us"
        className=" mt-[100vh] h-screen bg-red-50  about-us"
      >
        abut us
      </div>
    </>
  );
}

export default Home;
