/* eslint-disable react/prop-types */
import React, { useState } from "react";
import NavbarComp from "./NavbarComp";
import LogoImage from "../assets/bd886d7ccc6f8dd8db17e841233c9656.jpg";

const HeaderComp = ({ setTableVisible }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
    setTableVisible((prevState) => !prevState); // Toggle table visibility
  };

  return (
    <div className="h-[30vh] bg-gray-200">
      <div className="h-[20vh] sm:h-[16vh] md:h-[20vh] flex md:flex-row justify-between items-center p-4">
        <div>
          <img
            src={LogoImage}
            alt="College Logo"
            className="rounded-lg w-20 h-20 sm:w-20 sm:h-14 md:w-28 md:h-28"
          />
        </div>
        <div className="text-center md:text-left sm:text-xs md:text-xl">
          <p>College Name</p>
          <p>Email</p>
          <p>Phone Number</p>
        </div>
        <div className="text-center md:text-left sm:text-xs md:text-xl">
          <p>Address</p>
          <p>Pincode</p>
        </div>
      </div>
      <div className="h-[10vh]">
        <NavbarComp onToggle={toggleNavbar} isOpen={isNavbarOpen} />
      </div>
    </div>
  );
};

export default HeaderComp;
