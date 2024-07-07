
import "./landingpage.css";
function LandingPage() {
  return (
    <section>
      <div
        style={{
          background: "linear-gradient(to bottom, #0285AD, #006482,#004053)",
        }}
        className="landing-page  text-white h-[100vh] py-20  max-w-screen w-full flex-col md:flex-row flex md:justify-end  items-center  md:items-start "
      >
        <div className="left-landing-page py-20 md:py-40  w-[90%] md:w-1/2 flex justify-end px-6   ">
          <div className="left-inner-container space-y-9 md:space-y-12 lg:w-[75%]">
            <h1 className="text-3xl sm:text-5xl font-semibold">
              Building a more <br className="hidden lg:block" /> water-secure
              world
            </h1>
            <h3 className="md:text-xl">
              Innovating, collaborating and connecting diverse capabilities,
              solutions and know-how, to champion those who make water work
              every day.
            </h3>

            <button className="landing-page-learn-more   font-bold  px-11 py-3  border-2 border-[#00E4B3] rounded-full text-lg hover:bg-[#00E4B3] hover:border-blue-700 hover:text-black  ">
              Learn More
            </button>
          </div>
        </div>

        <div className="right-landing-page-desktop hidden md:flex overflow-hidden h-[700px] w-[700px] lg:w-1/2 py-20  pl-28">
          <div className="inner1-right-landing-page relative h-[80%] rounded-2xl w-[50%] lg:w-[45%] z-10">
            <div className="inner2-right-landing-page h-[100%] bg-black   rounded-2xl w-full -z-10 absolute left-[80%] top-[20%]  "></div>
          </div>
        </div>

        <div className="right-landing-page-mob">



        </div>
      </div>
    </section>
  );
}

export default LandingPage;
