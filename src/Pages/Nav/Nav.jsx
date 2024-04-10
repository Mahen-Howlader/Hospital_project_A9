import { Link, NavLink } from "react-router-dom";
import UseAuthHook from "../../CustomeHook/UseAuthHook";
import { useEffect, useState } from "react";

function Nav() {
  const { user, logOut, setUser } = UseAuthHook();
  const { displayName, email, photoURL } = user || {};

  const [userImage, SetUserImage] = useState(null);
  useEffect(() => {
    SetUserImage(photoURL);
  });

  function handelLogoutFun() {
    setUser(null);
    logOut();
  }

  return (
    <div className=" top-0 z-10 bg-white shadow-2xl  sticky  ">
      <div className="mx-auto container ">
        <div className="navbar ml-0 pl-1">
          <div className="navbar-start ">
            <div className="dropdown">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/"
                >
                  Home+
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/service"
                >
                  Service+
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/doctor"
                >
                  Doctor Booking+
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/updateprofile"
                >
                  Update Profile
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
              </ul>
            </div>
            <a className="font-bold text-2xl tracking-wider ">Govt.Meditest</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-xl gap-x-10 menu-horizontal items-center px-1">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/"
              >
                Home+
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/service"
              >
                Service+
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/doctor"
              >
                Doctor Booking+
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/updateprofile"
              >
                Update Profile
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/profile"
              >
                Profile
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end gap-x-5">
            <div className="">
              {user && (
                <button className="tooltip tooltip-bottom flex border-2 rounded-full items-center justify-center outline-double focus:outline-none">
                  <img
                    src={
                      userImage || "https://i.ibb.co/M2LnknF/blank-Profile.png"
                    }
                    className="w-10 h-10  rounded-full "
                    alt=""
                  />
                </button>
              )}
            </div>

            {user ? (
              <Link
                onClick={handelLogoutFun}
                className="px-6 font-semibold rounded-full py-2 bg-[#4851D5] text-white"
              >
                Logout
              </Link>
            ) : (
              <Link
                className="px-6 font-semibold rounded-full py-2 bg-[#4851D5] text-white"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
