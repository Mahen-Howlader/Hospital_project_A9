import "swiper/css";
import "swiper/css/bundle";
import Hospitality from "../../Compnents/Hospitality/Hospitality";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Yourhealth from "../../Compnents/YourHealth/Yourhealth";
import WeDo from "../../Compnents/We-Do/WeDo";
import HomepageService from "../../Compnents/service/HomepageService";
import ServiceCart from "../../Compnents/service/ServiceCart";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import UseAuthHook from "../../CustomeHook/UseAuthHook";
// ..
AOS.init();

function Home() {
  // navigateUI
  const { loading } = UseAuthHook();

  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/HhC1Lt0/slider-1.jpg",
      title: "Complete Healthcare Solution",
      des: "Our comprehensive healthcare solution integrates top-notch medical expertise with advanced equipment to ensure holistic wellness for our community.",
      data_aos_duration: "1000",
      data_aos_delay: "500",
      data_aos_delay2: "1000",
      data_aos: "fade-left",
    },
    {
      img: "https://i.ibb.co/SvmpW05/slider-3.jpg",
      title: " Your Health is Our Top Priority",
      des: "Your health is our paramount concern. We prioritize your well-being through comprehensive care and advanced medical solutions.",
      data_aos_duration: "1000",
      data_aos_delay: "500",
      data_aos_delay2: "1000",
      data_aos: "fade-left",
    },

    {
      img: "https://i.ibb.co/kGtZR3M/slider-2.jpg",
      title: "Best Doctors and Equipments in Town",
      des: "In our town, top doctors and advanced equipment ensure precise care, fostering health and wellness for all in our community.",
      data_aos_duration: "1000",
      data_aos_delay: "500",
      data_aos_delay2: "1000",
      data_aos: "fade-left",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      1000 * 10
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      {loading || (
        <div className="">
          <Helmet>
            <title>Hospital || Home</title>
          </Helmet>

          <div>
            <div
              className=" w-full h-60 sm:h-96 md:h-[450px] lg:h-[540px]  flex flex-col  items-center overflow-hidden justify-center gap-5 lg:gap-10 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
            >
              {/* arrow */}
              <div className="absolute  bottom-[20px] right-10  flex  gap-3 z-50 px-5">
                {/* arrow left */}
                <button
                  onClick={prevSlider}
                  className="flex  justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="w-4  h-4 md:w-6 md:h-6 icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#0095FF"
                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                      ></path>
                    </g>
                  </svg>
                </button>
                {/* arrow right */}
                <button
                  onClick={nextSlider}
                  className=" flex  justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="w-4  h-4 md:w-6 md:h-6 icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    transform="rotate(180)"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#0095FF"
                        d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className=" text-white  absolute top-0 left-0 w-full h-full backgroundLinner ">
                <div className="container mx-auto flex items-center h-full">
                  <div className=" px-10 flex flex-col space-y-1 lg:space-y-6 lg:w-8/12">
                    <h1
                      data-aos-duration={
                        sliders[currentSlider].data_aos_duration
                      }
                      data-aos={sliders[currentSlider].data_aos}
                      data-aos-delay={sliders[currentSlider].data_aos_delay}
                      className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-3"
                    >
                      {sliders[currentSlider].title}
                    </h1>
                    <p
                      data-aos-duration={
                        sliders[currentSlider].data_aos_duration
                      }
                      data-aos={sliders[currentSlider].data_aos}
                      data-aos-delay={sliders[currentSlider].data_aos_delay2}
                      className="text-sm md:text-base lg:text-lg"
                    >
                      {sliders[currentSlider].des}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
              {/* sliders */}
              {sliders.map((slide, inx) => (
                <img
                  onClick={() => setCurrentSlider(inx)}
                  key={inx}
                  src={slide.img}
                  className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 rounded-lg ${
                    currentSlider === inx ? "border-2 border-black p-px" : ""
                  } rounded-md md:rounded-lg box-content cursor-pointer`}
                  alt={slide.title}
                />
              ))}
            </div>
          </div>

          {/* doctorCart */}
          <div className=" bg-left-top relative mx-auto container  px-5 md:px-0">
            {/* <img src="${shape1}" alt="" /> */}
            <div
              className=" absolute top-0 left-0"
            >
              <img src="./shape-1.svg" alt="" />
            </div>
            <div
              data-aos-duration="1000"
              data-aos="zoom-in-down"
              className="text-center mt-20 mb-10 space-y-2 "
            >
              <h1 className="text-4xl font-semibold ">Hospitality</h1>
              <h1 className="text-xl">
                Radiant Hospitality Where Every Stay Feels Like Home
              </h1>
            </div>
            <Hospitality></Hospitality>
          </div>

          {/* Yourhealth */}
          <div className="mt-28 container mx-auto  px-5 md:px-0">
            <Yourhealth></Yourhealth>
            <WeDo></WeDo>
          </div>

          {/* service  */}
          <div className="mt-28 container mx-auto  px-5 md:px-0">
            <HomepageService></HomepageService>
            <div>
              <ServiceCart></ServiceCart>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
