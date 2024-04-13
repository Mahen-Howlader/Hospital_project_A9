import Doctorcard from "./Doctorcard";
import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";
function Doctor() {
  const data = useLoaderData();
  //   console.log(data)
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-[#31d1da] py-20 w-full">
 <Helmet>
        <title>Hospital || Doctor</title>
      </Helmet>
    <div className="container mx-auto ">
      <div className="my-5 space-y-2 text-center w-10/12 lg:w-6/12 mx-auto ">
        <h1 className="text-4xl font-bold text-white">Meet Our Doctors</h1>
        <p className="text-gray-600">
          Meet our caring doctors committed to providing personalized healthcare
          solutions. With diverse expertise and compassion, we're here to
          support your well-being every step of the way.
        </p>
      </div>
      <div>
        <div className="my-10">
      <Marquee speed={20} pauseOnClick={true}>
      {data.map((v, index) => {
            return <Doctorcard key={index} props={v}></Doctorcard>;
          })}
      </Marquee>
       
        </div>
      </div>
    </div>
    </div>
  );
}

export default Doctor;
