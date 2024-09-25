import React from "react";
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavbarComp = ({ onToggle, isOpen }) => {
  const location = useLocation(); // Get current route

  const getActiveClass = (path) => {
    return location.pathname === path ? "text-blue-600 underline" : "";
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold ">
          Logo
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle onClick={onToggle} />
      </div>
      <Navbar.Collapse
        className={`${isOpen ? "block" : "hidden"} md:block cursor-pointer`}
      >
        <Navbar.Link
          href="/"
          className={`hover:text-blue-500 ${getActiveClass("/")}`}
        >
          StudentTable
        </Navbar.Link>
        <Navbar.Link
          href="/employee"
          className={`hover:text-blue-500 ${getActiveClass("/employee")}`}
        >
          EmployeeTable
        </Navbar.Link>
        <Navbar.Link
          href="/table3"
          className={`hover:text-blue-500 ${getActiveClass("/table3")}`}
        >
          Table3
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
