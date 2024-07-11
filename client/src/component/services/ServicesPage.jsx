import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceImg from "../../Assets/images/waterTreatment.jpg";

function ServicesPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = document.querySelectorAll(".service-card");
    if (window.innerWidth < 768) {
      cards.forEach((card, index) => {
        const divsInsideCard = card.querySelectorAll("div");
        gsap.from(divsInsideCard, {
          y: "-40%",

          opacity: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 60%",
            
            end: "top top",
          },
        });
      });
    } else {
      cards.forEach((card, index) => {
        const divsInsideCard = card.querySelectorAll("div");
        gsap.from(divsInsideCard, {
          y: "30%",

          opacity: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 60%",

            end: "top top",
          },
        });
      });
    }
  });
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = [
    {
      img: serviceImg,
      name: "Service Name",
      title: "Write Texts That Make People Take Action",
      description:
        "Learn how to run Meta, Google and TikTok ads for your clients and become a master at Ad buying.",
    },
    {
      img: serviceImg,
      name: "Service Name",
      title: "Write Texts That Make People Take Action",
      description:
        "Learn how to run Meta, Google and TikTok ads for your clients and become a master at Ad buying.",
    },
    {
      img: serviceImg,
      name: "Service Name",
      title: "Write Texts That Make People Take Action",
      description:
        "Learn how to run Meta, Google and TikTok ads for your clients and become a master at Ad buying.",
    },
  ];

  return (
    <>
      <div id="services" className="services-container  mt-10 pb-16 ">
        <h1 className="text-3xl text-center font-semibold my-8 md:text-5xl">
          Services
        </h1>
        {/* Service multiple cards */}
        <div className="services-cards space-y-20 lg:space-y-12 w-[90%] lg:w-[75%] mx-auto  h-full">
          {services.map((s, idx) => {
            return (
              <div key={idx}>
                {/* Service Card  */}

                {windowWidth > 768 ? (
                  <>
                    {idx % 2 === 0 ? (
                      <>
                        <div className="service-card  md:flex">
                          {/* image */}
                          <div
                            className="service-image bg-black rounded-xl overflow-hidden w-[96%] sm:w-[60%] md:w-[40%]   mx-auto "
                            style={{
                              // boxShadow: " rgba(105, 10, 176, 0.7) 0px 0px 15px"
                              boxShadow:
                                " rgba(0, 0, 0, 0.5) 0px 3px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                            }}
                          >
                            <img
                              src={s.img}
                              alt="service"
                              className="w-full h-full"
                            />
                          </div>
                          {/* content */}
                          <div className="service-content   flex flex-col items-center md:items-start md:justify-center  md:pl-12 md:text-start py-7 md:w-[60%] space-y-4">
                            <h2 className="service-name font-semibold text-xl md:text-2xl  ">
                              {s.name}
                            </h2>

                            <h2 className="service-title leading-7 text-4xl md:text-5xl font-bold text-center md:text-start  mb-3">
                              {s.title}
                            </h2>
                            <p className="service-description w-[80%] md:w-full mx-auto md:text-lg text-center md:text-start ">
                              {s.description}
                            </p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="service-card  md:flex">
                          {/* content */}
                          <div className="service-content   flex flex-col items-center md:items-start md:justify-center  md:pr-12 md:text-start py-7 md:w-[60%] space-y-4">
                            <h2 className="service-name font-semibold text-xl md:text-2xl  ">
                              {s.name}
                            </h2>

                            <h2 className="service-title leading-7 text-4xl md:text-5xl font-bold text-center md:text-start  mb-3">
                              {s.title}
                            </h2>
                            <p className="service-description w-[80%] md:w-full mx-auto md:text-lg text-center md:text-start ">
                              {s.description}
                            </p>
                          </div>
                          {/* image */}
                          <div
                            className="service-image bg-black rounded-xl overflow-hidden w-[96%] sm:w-[60%] md:w-[40%]   mx-auto "
                            style={{
                              // boxShadow: " rgba(105, 10, 176, 0.7) 0px 0px 15px"
                              boxShadow:
                                " rgba(0, 0, 0, 0.5) 0px 3px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                            }}
                          >
                            <img
                              src={s.img}
                              alt="service"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="service-card  md:flex">
                      {/* image */}
                      <div
                        className="service-image bg-black rounded-xl overflow-hidden w-[96%] sm:w-[60%] md:w-[40%]   mx-auto "
                        style={{
                          // boxShadow: " rgba(105, 10, 176, 0.7) 0px 0px 15px"
                          boxShadow:
                            " rgba(0, 0, 0, 0.5) 0px 3px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                        }}
                      >
                        <img
                          src={s.img}
                          alt="service"
                          className="w-full h-full"
                        />
                      </div>
                      {/* content */}
                      <div className="service-content   flex flex-col items-center md:items-start md:justify-center  md:pl-12 md:text-start py-7 md:w-[60%] space-y-4">
                        <h2 className="service-name font-semibold text-xl md:text-2xl  ">
                          {s.name}
                        </h2>

                        <h2 className="service-title leading-7 text-4xl md:text-5xl font-bold text-center md:text-start  mb-3">
                          {s.title}
                        </h2>
                        <p className="service-description w-[80%] md:w-full mx-auto md:text-lg text-center md:text-start ">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
