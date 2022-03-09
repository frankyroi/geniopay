import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="relative top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 ">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap px-4">
          {/* Brand */}
          <h1 className="text-black text-3xl hidden lg:inline-block font-bold">Welcome, Huss Smith</h1>
        
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded-xl text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-xl text-sm border outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/planted.png").default} alt="..."></img>
          <p className="mr-4">0 planted</p>
          <img className="w-5 h-5 mt-1 mr-4" src={require("assets/img/notification.png").default} alt="..."></img>
          <div className="flex justify-between md:flex-nowrap flex-wrap px-4 bg-white">
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex mr-2">
              <UserDropdown />
            </ul>
            <div className="relative">
                <p className="mr-4 text-green mr-2 mb-1 text-sm">Verified</p>
                <p className="mr-4 text-lg font-bold">Huss Smith</p>
            </div>
            <span>
            <i className="fa fa-chevron-down"></i>
            </span>
          </div>
          
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
