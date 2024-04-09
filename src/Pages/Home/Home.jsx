// https://i.ibb.co/xzG5pWh/woman-2.png

// https://i.ibb.co/fMXX6SN/woman-1.jpg
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import Hospitality from "../../Compnents/Hospitality/Hospitality";
function Home() {
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="h-[50vh]  md:h-[90vh] bg-red-500 rounded-lg"
      >
         <SwiperSlide >
          <img className="h-full w-full object-cover"  src="https://i.ibb.co/xzG5pWh/woman-2.png" alt="" />
        </SwiperSlide>
         <SwiperSlide >
          <img className="h-full w-full object-cover" src="https://i.ibb.co/wsRx4TR/male-1.jpg" alt="" />
        </SwiperSlide>
         <SwiperSlide >
          <img className="h-full w-full object-cover" src="https://i.ibb.co/fMXX6SN/woman-1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <div>
        <div className="text-center my-10 space-y-2">
          <h1 className="text-3xl font-bold mochiy-pop">Hospitality</h1>
          <h1 className="text-xl">Radiant Hospitality Where Every Stay Feels Like Home</h1>
        </div>
        <Hospitality></Hospitality>
      </div>
    </div>
  );
}

export default Home;
