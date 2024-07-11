import "./landingpage.css";
import mobImg1 from "../../../Assets/images/waterTreatment.jpg";
import mobImg2 from "../../../Assets/images/waterTreatement2.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import background from "../../../Assets/images/FitNDrinkLandingPageBackground.jfif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function LandingPage() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    gsap.from(".mob-landing-imgs1", {
      x: -140,
      opacity: 0,
      duration: 0.5,
    });
    gsap.from(".mob-landing-imgs2", {
      x: 140,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".mob-imges-div",
        scroller: "body",
       
        start: "top 30%",
        end: "top top",
      },
    });


    gsap.from("#landing_background_pic", {
      x: 140,
      opacity: 0,
      duration: 2,
      
    });
    
  });
  return (
    <section>
      <div  className="landing-page relative text-white min-h-[90vh] h-fit my-14  max-w-screen w-full flex-col md:flex-row flex md:justify-end  items-center  md:items-start "
      >
        <div style={{
           background: "linear-gradient(to bottom, #0285AD, #006482,#004053)"
        }} className={"absolute hidden md:block -z-10  h-full w-full"}> </div>
        <img
          src={background}
          alt="Background Of landing page"
          id ={"landing_background_pic"}
          className={"absolute hidden md:block -z-10  h-full w-full"}
        />

        {/* Left Side  */}
        <div className="left-landing-page py-20 md:py-40  w-[90%] md:w-1/2 flex md:justify-start  px-6 xl:pl-24   ">
          <div className="left-inner-container space-y-9 md:space-y-12 lg:w-[75%]">
            <h1 className="text-3xl sm:text-5xl font-semibold">
              Building a more <br className=" md:hidden lg:block" />{" "}
              water-secure world
            </h1>
            <h3 className="md:text-xl">
              Innovating, collaborating and connecting diverse capabilities,
              solutions and know-how, to champion those who make water work
              every day.
            </h3>
            <div className="btn text-center md:text-start">
              <button className="landing-page-learn-more   font-bold  px-11 py-3  border-2 border-[#00E4B3] rounded-full text-lg hover:bg-[#00E4B3] hover:border-blue-700  hover:text-black  ">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right side Desktop */}
        <div className="right-landing-page-desktop hidden md:flex overflow-hidden h-[700px] w-[700px] lg:w-1/2 py-20  pl-28">
          {/* <div className="inner1-right-landing-page relative h-[80%] rounded-2xl w-[50%] lg:w-[45%] z-10">
            <div className="inner2-right-landing-page h-[100%] bg-black   rounded-2xl w-full -z-10 absolute left-[80%] top-[20%]  "></div>
          </div> */}
        </div>

        
        {/* Right Side Mobile */}
        <div className="right-landing-page-mob  md:hidden w-full  ">
          <div className="mob-imges-div space-y-3 pb-12">
            <img
              src={mobImg1}
              alt="Water Treatement Plant"
              className={
                "mob-landing-imgs1 rounded-xl w-[96vw] h-[93vw] mx-auto"
              }
            />
            <img
              src={mobImg2}
              alt="Water Treatement Plant"
              className={
                "mob-landing-imgs2 rounded-xl w-[96vw] h-[93vw] mx-auto"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
