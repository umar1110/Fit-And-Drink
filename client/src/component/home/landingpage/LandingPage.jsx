import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import background from "../../../Assets/images/landingPageBackground.webp";
import "./landingpage.css";
function LandingPage() {
  

  useGSAP(() => {
   


    gsap.from("#landing_background_pic", {
      x: 140,
      opacity: 0,
      duration: 2,
      
    });
    
  });
  return (
    <section>
      <div  className="landing-page relative text-white  min-h-fit md:h-[80vh]   my-14  max-w-screen w-full flex-col md:flex-row flex md:justify-end  items-center  md:items-start "
      >
        <div style={{
           background: "linear-gradient(to bottom, #0285AD, #006482,#004053)"
        }} className={"absolute hidden md:block -z-10  h-full w-full"}> </div>


        <img
          src={background}
          alt="Background Of landing page"
          id ={"landing_background_pic"}
          className={"absolute top-0 hidden md:block -z-10  h-full   "}
        />

        {/* Left Side  */}
        <div className="left-landing-page my-16 md:my-0  h-full  w-[90%] md:w-1/2  items-center flex md:justify-start  px-6 xl:pl-72   ">
          <div className="left-inner-container space-y-9 md:space-y-12 lg:w-[100%]">
            <h1 className="text-3xl text-center md:text-start sm:text-5xl font-semibold">
              Building a more <br className=" md:hidden lg:block" />{" "}
              water-secure world
            </h1>
            <h3 className="md:text-xl text-center md:text-start ">
              Innovating, collaborating and connecting diverse capabilities,
              solutions and know-how, to champion those who make water work
              every day.
            </h3>
            <div className="btn text-center md:text-start">
              <a href={"/#services"} className="landing-page-learn-more   font-bold  px-11 py-3  border-2 border-[#00E4B3] rounded-full text-lg hover:bg-[#00E4B3] hover:border-blue-700  hover:text-black  ">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Right side Desktop */}
        <div className="right-landing-page-desktop hidden md:flex overflow-hidden h-[700px] w-[700px] lg:w-1/2 py-20  pl-28">
          {/* <div className="inner1-right-landing-page relative h-[80%] rounded-2xl w-[50%] lg:w-[45%] z-10">
            <div className="inner2-right-landing-page h-[100%] bg-black   rounded-2xl w-full -z-10 absolute left-[80%] top-[20%]  "></div>
          </div> */}
        </div>

        
       
      </div>
    </section>
  );
}

export default LandingPage;
