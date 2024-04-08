import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/home"
          >
            Home
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
            to="/updateprofile">Update Profile</NavLink>
   
          </ul>
        </div>
        <a className="font-bold text-2xl tracking-wider">Govt.Meditest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl gap-x-10 menu-horizontal items-center px-1">
          <NavLink
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
            to="/home"
          >
            Home
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
            to="/updateprofile">Update Profile</NavLink>
        
        </ul>
      </div>
      <div className="navbar-end gap-x-5">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        <Link
            className="btn btn-sm "
            to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Nav;
