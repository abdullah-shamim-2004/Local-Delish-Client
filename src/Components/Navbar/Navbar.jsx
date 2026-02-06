import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaUserCircle, FaUtensils } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

const Navbar = () => {
  const { user, UserSignOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // console.log(theme);

  const handleSignOut = () => {
    UserSignOut()
      .then(() => {
        toast.success("You signed out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // store the theme in local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  // set theme
  const handlToggle = (e) => {
    e.target.checked ? setTheme("dark") : setTheme("light");
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews" className="nav-link">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className="nav-link">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="nav-link">
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className=" w-full bg-base-100  px-4 md:py-2 md:px-10 sticky top-0 z-50 ">
      <div className=" md:max-w-11/12 lg:max-w-10/12 mx-auto">
        <ToastContainer />
        <div className="navbar ">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center gap-1.5">
              <FaUtensils className="text-xl md:text-2xl text-secondary" />
              <Link
                to="/"
                className="normal-case text-xl md:text-2xl font-bold"
              >
                Local<span className="text-primary">Delish</span>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
          </div>

          {/* User Section */}
          <div className="navbar-end flex items-center gap-3">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handlToggle}
                checked={theme === "dark"}
              />

              {/* sun icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* moon icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName || "No User"}
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-10 h-10 rounded-full border cursor-pointer"
                      />
                    ) : (
                      <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
                    )}
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 gap-2.5 shadow-sm"
                >
                  <li>
                    <NavLink to={"/dashboard"}>DashBoard</NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-outline btn-primary btn-sm"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link to="/auth/login" className="btn btn-primary btn-sm">
                  Sign In
                </Link>{" "}
              </div>
            )}
          </div>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
