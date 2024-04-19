import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { FaListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

const NavBar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open bg-gray-900 text-gray-200 w-fit h-screen p-5">
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-xl">
            <img
              src="https://www.freepnglogos.com/elon-musk-twitter-rebrand-x-logo-2.png"
              width={70}
              className="bg-gray-300 rounded-lg mb-10 pb-1"
            ></img>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <FaHome />
              <Link to="/">Home</Link>
            </li>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <IoSearch />
              <Link to="/explore">Explore</Link>
            </li>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <FaBell />
              <Link to="/notifications">Notifications</Link>
            </li>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <LuMessageSquare />
              <Link to="/messages">Messages</Link>
            </li>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <FaListAlt />
              <Link to="/lists">Lists</Link>
            </li>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <CgProfile />
              <Link to="/profile">Profile</Link>
            </li>
            <li className="pb-5 flex space-x-4 text-center items-center">
              <CiCircleMore />
              <Link to="/more">More</Link>
            </li>
            <li>
              <button className="btn btn-info bg-blue-600 p-3 rounded-full text-md w-full">
                POST
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
