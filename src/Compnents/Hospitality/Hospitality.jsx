import ApiHook from "../../CustomeHook/ApiHook";
import HospitalityShowData from "./HospitalityShowData";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Hospitality() {
  const { data } = ApiHook();
  // console.log(data)
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-easing="ease-in-out"
      className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      {data.map((val, index) => (
        <HospitalityShowData data={val} key={index}></HospitalityShowData>
      ))}
    </div>
  );
}

export default Hospitality;
