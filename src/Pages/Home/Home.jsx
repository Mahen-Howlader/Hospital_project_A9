// https://i.ibb.co/xzG5pWh/woman-2.png

// https://i.ibb.co/fMXX6SN/woman-1.jpg
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
function Home() {
  return (
    <div>
      <Swiper navigation={true}   loop={true} modules={[Navigation]} className="h-[80vh] rounded-lg">
        <SwiperSlide><img src="https://i.ibb.co/xzG5pWh/woman-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/wsRx4TR/male-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/fMXX6SN/woman-1.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
