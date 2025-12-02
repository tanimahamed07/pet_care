import React, { use, useEffect, useState } from "react";
import logo from "../assets/image.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";

import userIcon from "../assets/icons8-user-48.png";
import toast from "react-hot-toast";
// import Spinner from "../pages/Spinner";
const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const { user, signoutUserFunc, setUser } = use(AuthContext);
  const handleLogout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <>
      <div className="navbar  container mx-auto">
        {/* LEFT SIDE */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="w-[70px]" src={logo} alt="" />
            <span className="hidden md:block text-2xl font-semibold">
              Pet Care
            </span>
          </Link>
        </div>

        {/* CENTER MENU (Desktop only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-primary gap-5 px-1">
            <li>
              <NavLink to="/" className="px-3 py-1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="px-3 py-1">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="px-3 py-1">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <label className="flex items-center cursor-pointer">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="toggle theme-controller"
            />
          </label>

          {user ? (
            <div className="flex items-center gap-5">
              {/* Avatar Dropdown */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="avatar cursor-pointer">
                  <div className="w-11 rounded-full ring ring-primary/50 ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL || userIcon} alt="User avatar" />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box w-56 p-3 shadow-lg border border-base-300"
                >
                  <li className="font-semibold text-lg">
                    <p>{user?.displayName || "Guest User"}</p>
                  </li>

                  <div className="divider my-1"></div>

                  <li>
                    <button className="hover:bg-blue-100 text-blue-600">
                      Profile
                    </button>
                  </li>
                  <li>
                    <button className="hover:bg-blue-100 text-blue-600">
                      Settings
                    </button>
                  </li>
                </ul>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-outline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
