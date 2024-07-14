import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import service5 from "../../Assets/images/service05.webp";
import service1 from "../../Assets/images/service1.jpeg";
import service2 from "../../Assets/images/service2.jpeg";
import service3 from "../../Assets/images/service3.jpeg";
import service4 from "../../Assets/images/service4.jpg";
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

    gsap.to("#animation-line-services-down", {
      y: "100%",
      scrollTrigger: {
        trigger: "#animation-line-services-down",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: true,
      },
    });
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
      img: service1,
      name: "Quarterly and Semi-Annual Maintenance",
      title: "Quarterly and Semi-Annual Maintenance",
      description:
        "Regular checkups for 2-stage and 5-stage osmosis systems to keep them running smoothly.",
    },
    {
      img: service2,
      title: "Installation Services",
      name: "Installation Services",
      description:
        "Professional installation of new filtration systems for optimal performance",
    },
    {
      img: service3,
      name: "Service Name",
      title: "Write Texts That Make People Take Action",
      description:
        "Learn how to run Meta, Google and TikTok ads for your clients and become a master at Ad buying.",
    },
    {
      img: service4,
      name: "Emergency Repairs",
      title: "Emergency Repairs",
      description:
        " Fast, reliable repair services to address any unexpected issues",
    },
    {
      img: service5,
      name: "Water Quality Testing",
      title: "Water Quality Testing",
      description:
        "Comprehensive testing to ensure your water meets the highest standards",
    },
  ];

  return (
    <>
    <div className="relative">
      <div id="services" className="services-container   mt-10 pb-16 ">
        <h1 className="text-3xl bg-slate-100 py-6 text-center font-semibold md:font-bold my-8  md:text-4xl">
          What We Offer
        </h1>
        {/* Service multiple cards */}
        <div className="services-cards space-y-20  lg:space-y-12 w-[90%] lg:w-[75%] mx-auto  h-full">
          {services.map((s, idx) => {
            return (
              <div key={idx}>
                {/* Service Card  */}

                {windowWidth > 768 ? (
                  <>
                    {idx % 2 === 0 ? (
                      <>
                        <div className="service-card  md:flex ">
                          {/* image */}
                          <div
                            className="service-image  rounded-xl overflow-hidden w-[96%] sm:w-[60%] md:w-[40%] sm:h-[300px] md:h-[400px]  mx-auto "
                            style={{
                              // boxShadow: " rgba(105, 10, 176, 0.7) 0px 0px 15px"
                              boxShadow:
                                " rgba(0, 0, 0, 0.5) 7px 10px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                            }}
                          >
                            <img
                              src={s.img}
                              alt="service"
                              className="w-full h-full "
                            />
                          </div>
                          {/* content */}
                          <div className="service-content   flex flex-col items-center md:items-start md:justify-center  md:pl-12 md:text-start py-7 md:w-[60%] space-y-4">
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
                        <div className="service-card  md:flex ">
                          {/* content */}
                          <div className="service-content   flex flex-col items-center md:items-start md:justify-center  md:pr-12 md:text-start py-7 md:w-[60%] space-y-4">
                            <h2 className="service-title leading-7 text-4xl md:text-5xl font-bold text-center md:text-start  mb-3">
                              {s.title}
                            </h2>
                            <p className="service-description w-[80%] md:w-full mx-auto md:text-lg text-center md:text-start ">
                              {s.description}
                            </p>
                          </div>
                          {/* image */}
                          <div
                            className="service-image bg-black rounded-xl overflow-hidden w-[96%] sm:w-[60%] sm:h-[300px] md:h-[400px] md:w-[40%]   mx-auto "
                            style={{
                              // boxShadow: " rgba(105, 10, 176, 0.7) 0px 0px 15px"
                              boxShadow:
                                " rgba(0, 0, 0, 0.5) -7px 10px 15px, rgba(0, 0, 0, 0.27) 0px 10px 10px",
                            }}
                          >
                            <img
                              src={s.img}
                              alt="service"
                              className="w-full h-full "
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
                        <h2 className="service-title leading-9 text-4xl md:text-5xl font-bold text-center md:text-start  mb-3">
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
      {/* space div*/}
      <div
        className="  mt-[150px] mb-[60px] md:mt-[200px]  "
        style={{
       
          
          height: "40vh",
         

          // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
        }}
      >
       
      </div>
      
      {/* Animatioin lines */}
      <div className="animation-line-services-down absolute bottom-0 right-[50%] overflow-hidden  "
        style={{
          width: "3px",
          borderRadius: "70%",
          margin: "100px  auto 100px auto",
          height: "40vh",
          background: "blue",

          // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
        }}
      >
        <div
          id="animation-line-services-down"
          className={`animationline w-full h-full absolute b   bg-[#c0bdbd] `}
        ></div>
      </div>
      <div  className="animation-line-services-down absolute sm:block hidden   bottom-0 right-[20%] overflow-hidden  "
        style={{
          width: "3px",
          borderRadius: "70%",
          margin: "100px  auto 100px auto",
          height: "40vh",
          background: "blue",

          // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
        }}
      >
        <div
          id="animation-line-services-down"
          className={`animationline w-full h-full absolute b   bg-[#c0bdbd] `}
        ></div>
      </div>
      <div className="animation-line-services-down absolute sm:block hidden  bottom-0 left-[20%] overflow-hidden  "
        style={{
          width: "3px",
          borderRadius: "70%",
          margin: "100px  auto 100px auto",
          height: "40vh",
          background: "blue",

          // boxShadow: "rgba(105, 10, 176, 0.3) 0px 0px 5px",
        }}
      >
        <div
          id="animation-line-services-down"
          className={`animationline w-full h-full absolute b   bg-[#c0bdbd] `}
        ></div>
      </div>
      </div>
    </>
  );
}

export default ServicesPage;
