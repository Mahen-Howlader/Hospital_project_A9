import { Link, NavLink } from "react-router-dom";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import Navtopsection from "../../Compnents/Nav/Navtopsection";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Nav() {
  const { user, logOut, setUser, loading } = UseAuthHook();
  const { displayName, email, photoURL } = user || {};
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function handelLogoutFun() {
    setUser(null);
    logOut();
    toast.success("Logout Success");
  }

  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("home");
    // console.log(scrollY);
    if (navbar) {
      navbar.classList.toggle("fixed", window.scrollY > 50);
    }
  });
  // theme

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  function handelTheme(e) {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      {loading || (
        <div>
          <Navtopsection></Navtopsection>
          <div
            id="home"
            className="top-0 left-0 w-full  transition-all  z-10 shadow-2xl"
          >
            <div className="mx-auto container ">
              <div className="navbar ">
                <div className="navbar-start ">
                  <div className="dropdown z-10">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost lg:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-y-3  shadow bg-base-100 rounded-box w-52"
                    >
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-[#00ADBE]" : ""
                        }
                        to="/"
                      >
                        Home+
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-[#00ADBE]" : ""
                        }
                        to="/doctor"
                      >
                        Doctor+
                      </NavLink>
                      {user && (
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? " text-[#00ADBE]" : ""
                          }
                          to="/updateprofile"
                        >
                          Update Profile
                        </NavLink>
                      )}
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-[#00ADBE]" : ""
                        }
                        to="/profile"
                      >
                        Profile
                      </NavLink>
                      <div>
                        <label className="cursor-pointer grid place-items-center">
                          <input
                            checked={theme === "synthwave"}
                            type="checkbox"
                            value="synthwave"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                            onChange={handelTheme}
                          />
                          <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                          </svg>
                          <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                          </svg>
                        </label>
                      </div>

                      {user ? (
                        <Link
                          onClick={handelLogoutFun}
                          className="px-6 font-semibold rounded-full py-2 bg-[#00ADB5] text-center text-white"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link
                          className="px-6 font-semibold rounded-full py-2 bg-[#00ADB5] text-white"
                          to="/login"
                        >
                          Login
                        </Link>
                      )}
                    </ul>
                  </div>
                  <a className="font-bold text-2xl tracking-wider text-[#00ADB5]">
                    Govt.Meditest
                  </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu text-xl gap-x-10 menu-horizontal items-center px-1">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? " text-[#00ADBE]" : ""
                      }
                      to="/"
                    >
                      Home+
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? " text-[#00ADBE]" : ""
                      }
                      to="/doctor"
                    >
                      Doctor+
                    </NavLink>
                    {user && (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? " text-[#00ADBE]" : ""
                        }
                        to="/updateprofile"
                      >
                        Update Profile
                      </NavLink>
                    )}
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? " text-[#00ADBE]" : ""
                      }
                      to="/profile"
                    >
                      Profile
                    </NavLink>
                    <div>
                      <label className="cursor-pointer grid place-items-center">
                        <input
                          checked={theme === "synthwave"}
                          type="checkbox"
                          value="synthwave"
                          className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                          onChange={handelTheme}
                        />
                        <svg
                          className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="5" />
                          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                          className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                      </label>
                    </div>
                  </ul>
                </div>
                <div className="navbar-end lg:gap-x-5">
                  <div className="">
                    {user && (
                      <button
                        data-tip={displayName}
                        className="md:tooltip  tooltip-bottom flex border-2 rounded-full items-center justify-center outline-double focus:outline-none"
                      >
                        <img
                          src={
                            photoURL ||
                            "https://i.ibb.co/M2LnknF/blank-Profile.png"
                          }
                          className="w-10 h-10 object-cover  rounded-full "
                          alt=""
                        />
                      </button>
                    )}
                  </div>

                  <div className="hidden text-center lg:block">
                    {user ? (
                      <Link
                        onClick={handelLogoutFun}
                        className="px-6 font-semibold rounded-full py-2 bg-[#00ADB5] text-white"
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link
                        className="px-6 font-semibold rounded-full py-2 bg-[#00ADB5] text-white"
                        to="/login"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
