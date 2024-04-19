import React from "react";
import { NavLink } from "react-router-dom";
import { IoSettings } from "react-icons/io5";

const MiddleComponent = () => {
  return (
    <div className="flex-col w-full items-center justify-center p-10 bg-gray-900">
      <div className="input input-bordered flex items-center gap-2 bg-gray-300">
        <input
          type="text"
          className="grow bg-gray-100 p-2"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-6 h-6 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="bg-gray-900 border-l-gray-500 w-full p-10">
        <div role="tablist" className="tabs tabs-boxed space-x-5 flex">
          <NavLink
            to="/for-you"
            className="tab text-xl text-gray-300"
            activeClassName="tab-active"
          >
            For you
          </NavLink>
          <NavLink
            to="/following"
            className="tab text-xl text-gray-300"
            activeClassName="tab-active"
          >
            Following
          </NavLink>
          <NavLink>
            <IoSettings color="#fff" size={20} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponent;
