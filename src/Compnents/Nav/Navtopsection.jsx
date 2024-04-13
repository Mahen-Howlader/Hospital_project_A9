import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Navtopsection() {
  return (
    <div className="bg-[#00ADB5] text-white py-3">
      <div className="container mx-auto">
        <div className="flex flex-col  md:flex-row justify-between">
          <div className="flex flex-col md:flex-row items-center justify-center  md:justify-start order-last md:order-first mt-3 md:mt-0 gap-x-10">
            <div className="flex gap-x-2   items-center">
              <IoCall />
              <h1>01748714285</h1>
            </div>
            <div className="flex gap-x-2  items-center">
              <MdEmail />
              <h1>mahinhowlader123@gmail.com</h1>
            </div>
          </div>

          <div className="flex justify-center md:justify-start  gap-x-5 items-center">
            <div  className="bg-[#e7dddd57] p-3 rounded-full">
              <FaFacebook />
            </div>
            <div className="bg-[#e7dddd57] p-3 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-[#e7dddd57] p-3 rounded-full">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navtopsection;
