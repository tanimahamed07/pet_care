import React, { use } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
const Navbar = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="navbar bg-base-300 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>My Profile</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img className="w-[70px]" src={logo} alt="" /> Pet Care
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>My Profile</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1 bg-transparent">
                  <img
                    src={user.photoURL || "https://i.ibb.co/Y3d0N5H/user.png"}
                    alt=""
                    className="w-10 h-10 rounded-full border border-gray-300 hover: cursor-pointer"
                  />
                </div>
                <ul
                  tabIndex="-1"
                  className=" dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm hidden group-hover:block"
                >
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-sm">Logout</button>
          </div>
        ) : (
          <Link to="/login">
            <a className="btn">Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
