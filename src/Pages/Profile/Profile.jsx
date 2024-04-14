import { Helmet } from "react-helmet-async";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
// ..
AOS.init();

function Profile() {
  const { user } = UseAuthHook();
  const { displayName, email, photoURL } = user || {};
  return (
    <div
      style={{
        backgroundColor: " #74F4EA",
        backgroundImage: ` url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%236deee5' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%2366e8df' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%2360e1d9' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%235bd9d2' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%2357D0CA' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%2350dad4' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%2349e3dd' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%2342ede6' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%233bf6f0' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%2335FFF9' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Helmet>
        <title>Hospital || Profile</title>
      </Helmet>

      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" flex justify-center px-5 md:px-0 items-center"
      >
        <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
          <div
            className=" z-10"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))",
            }}
          >
            <img className="w-full" src={photoURL || "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"} />
          </div>
          <div className="relative flex justify-between items-center flex-row px-6 z-50 ">
            <p className="flex items-center text-gray-400">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              online
            </p>
            <Link
              to="/updateprofile"
              className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none"
            >
              <FaUserEdit className="text-white" />
            </Link>
          </div>
          <div className="pt-6 pb-8 text-gray-600 text-center">
            <p>
              <span className="font-bold">Name : </span>{" "}
              {displayName || "Enter your name"}
            </p>
            <p className="text-sm">
              <span className="font-bold">Email : </span>
              {email || "Enter your email"}
            </p>
          </div>
          <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
            <div className="posts">
              <p className="text-gray-400 text-sm">Posts</p>
              <p className="text-lg font-semibold text-blue-300">76</p>
            </div>
            <div className="followers">
              <p className="text-gray-400 text-sm">Followers</p>
              <p className="text-lg font-semibold text-blue-300">964</p>
            </div>
            <div className="following">
              <p className="text-gray-400 text-sm">Following</p>
              <p className="text-lg font-semibold text-blue-300">34</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-md mx-auto rounded-md p-8 sm:flex  sm:space-x-6 bg-gray-100 dark:text-gray-800">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={photoURL || "https://i.ibb.co/M2LnknF/blank-Profile.png"}
            alt=""
            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{displayName}</h2>
            <span className="text-sm dark:text-gray-600">General manager</span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="dark:text-gray-600">
               {email}
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Phonenumber"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                ></path>
              </svg>
              <span className="dark:text-gray-600">+25 381 77 983</span>
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
