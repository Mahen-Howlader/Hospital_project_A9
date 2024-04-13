import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Map from "../../Compnents/Map/Map";

function Footer() {
  return (
    <div className="bg-neutral">
      <footer className="footer  md:grid-cols-2 lg:grid-cols-3 gap-x-10 p-10 container mx-auto text-neutral-content">
        <nav>
          <a
            href="#home"
            className="font-bold text-3xl tracking-wider text-[#00ADB5]"
          >
            Govt.Meditest
          </a>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            minus pariatur dolore rerum, expedita omnis, impedit alias dolores a
            eum ullam. At corporis reiciendis laudantium aspernatur architecto?
            Similique, quo saepe!
          </p>
          <div className="flex justify-center md:justify-start  gap-x-5 items-center">
            <div className="bg-[#e7dddd57] p-3 rounded-full">
              <FaFacebook />
            </div>
            <div className="bg-[#e7dddd57] p-3 rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-[#e7dddd57] p-3 rounded-full">
              <FaLinkedin />
            </div>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-xl ">Quick Link</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service+</a>
          <a className="link link-hover">Doctor Booking+</a>
          <a className="link link-hover">Update Profile</a>
          <a className="link link-hover">Profile</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl ">Medical Location</h6>
          <div>
        <Map></Map>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
