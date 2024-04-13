import ServiceCart from "./ServiceCart";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function HomepageService() {
  return (
    <div>
      <div>
        <div  data-aos-delay="150" data-aos-duration="1000" data-aos="zoom-in-down"  className="mx-auto md:w-4/6 lg:w-3/6 text-center space-y-2">
          <h1 className="ext-xl lg:text-3xl text-[#00ADB5]">Services</h1>
          <h2 className="text-2xl lg:text-4xl">Our Healthcare Services</h2>
          <p className="text-gray-600">
            Our healthcare services encompass a wide spectrum, from preventive
            screenings to specialized treatments, aimed at ensuring your
            well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomepageService;
