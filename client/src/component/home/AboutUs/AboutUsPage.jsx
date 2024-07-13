import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mobImg1 from "../../../Assets/images/waterTreatment.jpg";

function AboutUsPage() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".animated-up-line-about", {
      scrollTrigger: {
        scroller: "body",
        trigger: "#about-us",
        scrub: true,
        start: "top 60%",
      },
      y: "100%",
    });

    if (window.innerWidth < 768) {
      gsap.from("#section1_about", {
        x: -100,
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
          scroller: "body",
          trigger: "#about-us",

          start: "top 80%",
        },
      });
      gsap.from(".about-us-description", {
        y: 100,
        duration: 0.7,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          scroller: "body",
          trigger: "#section1_about",

          start: "top 27%",
        },
      });
    } else {
      gsap.from("#section1_about", {
        y: -100,
        duration: 1,
        opacity: 0,
        scale: 1.3,
        scrollTrigger: {
          scroller: "body",
          trigger: "#about-us",

          start: "top 70%",
        },
      });
      gsap.from(".about-us-description", {
        y: 100,
        duration: 0.7,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          scroller: "body",
          trigger: "#section1_about",

          start: "top 27%",
        },
      });
    }
  });

  return (
    <div
      id="about-us"
      ref={container}
      className="about-us relative   w-full py-10 lg:py-24 min-h-fit"
    >
     
      <div className="about-us-container  w-[95%] lg:w-[80%]  mx-auto px-1 md:px-5  md:flex">
        {/* section  1 */}
        <div
          id="section1_about"
          className="section1_about w-[95%] md:w-1/2 mx-auto "
        >
          <img
            src={mobImg1}
            alt="About_us Pic"
            className="w-full rounded-xl md:h-full lg:w-[90%] "
          />
        </div>

        {/* Section 2 */}
        <div className="section2_about text-start pl-7 md:px-16 lg:px-0 flex justify-center items-start flex-col py-4 text-ellipsis md:w-1/2 ">
          <h2
            id="about-us-heading"
            className="font-semibold text-3xl font-sans  lg:text-4xl"
          >
            About Us
          </h2>
          <div className="about-us-description-container text-[18px] lg:text-[22px] ">
            <p className="about-us-description pt-4 pb-2">
              Welcome to FIT and DRINK! We are dedicated to providing top-notch
              water filtration services to ensure you and your family have
              access to clean, safe, and refreshing water. Specializing in both
              2-stage and 5-stage osmosis water systems.
            </p>
            <p className="about-us-description">
              We bring advanced technology and reliable service to your home.
              Experience the difference with FIT and DRINK, where pure water is
              our mission.
            </p>
          </div>
        </div>
      </div>

      {/* Animations Line 1  */}
      <div
        className="animated-down-line2 absolute top-0 left-0 overflow-hidden mx-1 md:mx-4  w-[3px] md:w-[5px]   "
        id="animation-for-aboutus"
        style={{
          borderRadius: "70%",

          height: "100%",
          backgroundColor: "blue",

          boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
        }}
      >
        <div
          id="animated-up-line-about"
          className={`animated-up-line-about w-full h-full absolute  bg-[#242424] `}
        ></div>
      </div>
      {/* Animations Line 2  */}
      <div
        className="animated-down-line2 absolute top-0 right-0 overflow-hidden mx-1 md:mx-4 w-[3px] md:w-[5px]  "
        id="animation-for-aboutus"
        style={{
          borderRadius: "70%",

          height: "100%",
          backgroundColor: "blue",

          boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
        }}
      >
        <div
          className={`animated-up-line-about w-full h-full absolute  bg-[#242424] `}
          id="animated-up-line-about"
        ></div>
      </div>
    </div>
  );
}

export default AboutUsPage;
