import LotteiFile from "./LotteiFile";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Yourhealth() {
  return (
    <div
    data-aos-anchor="#health-abi"
      data-aos-duration="1000"
      data-aos="zoom-in-down"
      className="relative"
    >
      <div className="mx-auto md:w-4/6 lg:w-3/6 text-center space-y-2">
        <h1 className="text-xl lg:text-3xl text-[#00ADB5]">What We Do</h1>
        <h2 className=" text-2xl lg:text-4xl">
          What We Provide for Your Health
        </h2>
        <p className="text-gray-600">
          We offer a comprehensive range of health services tailored to your
          needs, including preventive care, diagnostics, treatment, and wellness
          programs.
        </p>
      </div>

      <div className="w-10/12 lg:w-6/12 mx-auto">
        <LotteiFile></LotteiFile>
      </div>

      <div
        id="health-abi"
        className="absolute size-5  right-5 bottom-5"
      ></div>
    </div>
  );
}

export default Yourhealth;
