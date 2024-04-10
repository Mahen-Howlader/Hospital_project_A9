// https://i.ibb.co/SvmpW05/slider-3.jpg
// https://i.ibb.co/HhC1Lt0/slider-1.jpg
// https://i.ibb.co/kGtZR3M/slider-2.jpg
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import Hospitality from "../../Compnents/Hospitality/Hospitality";
import { useEffect, useState } from "react";



function Home() {
  // navigateUI
const [currentSlider, setCurrentSlider] = useState(0);
const sliders = [
  {
    img: "https://i.ibb.co/SvmpW05/slider-3.jpg",
    title: " Your Health is Our Top Priority",
    des: "Your health is our paramount concern. We prioritize your well-being through comprehensive care and advanced medical solutions.",
  },
  {
    img: "https://i.ibb.co/HhC1Lt0/slider-1.jpg",
    title: "Complete Healthcare Solution",
    des: "Our comprehensive healthcare solution integrates top-notch medical expertise with advanced equipment to ensure holistic wellness for our community.",
  },
  {
    img: "https://i.ibb.co/kGtZR3M/slider-2.jpg",
    title: "Best Doctors and Equipments in Town",
    des: "In our town, top doctors and advanced equipment ensure precise care, fostering health and wellness for all in our community.",
  },
];

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
    <div>
      {/* <div className="">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="h-[50vh]  md:h-[550px] rounded-lg mt-2"
        >
          <SwiperSlide>
            <div className="w-full h-full relative">
              <img
                className="h-full w-full object-cover "
                src="https://i.ibb.co/SvmpW05/slider-3.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full backgroundLinner">
                <div className="flex justify-center w-6/12 ml-5 poppins-medium space-y-6 text-white  h-full flex-col">
                  <h1 className="text-[60px] font-extrabold  ">
                    Your Health is Our Top Priority
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo ea recusandae facere nihil, ipsum dicta saepe
                    similique asperiores placeat quidem!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative">
              <img
                className="h-full w-full object-cover "
                src="https://i.ibb.co/HhC1Lt0/slider-1.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full backgroundLinner">
                <div className="flex justify-center w-6/12 ml-5 poppins-medium space-y-6 text-white  h-full flex-col">
                  <h1 className="text-[60px] font-extrabold  ">
                    Your Health is Our Top Priority
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo ea recusandae facere nihil, ipsum dicta saepe
                    similique asperiores placeat quidem!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative">
              <img
                className="h-full w-full object-cover "
                src="https://i.ibb.co/kGtZR3M/slider-2.jpg"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full backgroundLinner">
                <div className="flex justify-center w-6/12 ml-5 poppins-medium space-y-6 text-white  h-full flex-col">
                  <h1 className="text-[60px] font-extrabold  ">
                    Your Health is Our Top Priority
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo ea recusandae facere nihil, ipsum dicta saepe
                    similique asperiores placeat quidem!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}

      <div>
        <div
          className=" w-full h-60 sm:h-96 md:h-[540px] rounded-lg flex flex-col mt-2  items-center overflow-hidden justify-center gap-5 lg:gap-10 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
        >
          {/* text container here */}


          <div className=" text-white  absolute top-0 left-0 w-full h-full backgroundLinner ">
           <div className=" px-10 flex flex-col justify-center h-full lg:w-6/12">
           <h1 className="text-xl lg:text-6xl font-semibold mb-3">
              {sliders[currentSlider].title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              {sliders[currentSlider].des}
            </p>
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

      <div className="mx-auto container">
        <div className="text-center my-10 space-y-2 ">
          <h1 className="text-3xl font-bold mochiy-pop">Hospitality</h1>
          <h1 className="text-xl">
            Radiant Hospitality Where Every Stay Feels Like Home
          </h1>
        </div>
        <Hospitality></Hospitality>
      </div>
    </div>
  );
}

export default Home;
