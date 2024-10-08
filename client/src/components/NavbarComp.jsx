/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

const NavbarComp = ({ onToggle, isOpen, setActiveTable, activeTable }) => {
  const location = useLocation(); // Get current route

  useEffect(() => {
    // Update the activeTable based on the current route
    switch (location.pathname) {
      case "/employee":
        setActiveTable("EmployeeTable");
        break;
      case "/agriculture":
        setActiveTable("AgricultureTable");
        break;
      default:
        setActiveTable("StudentTable");
    }
  }, [location.pathname, setActiveTable]);

  const getActiveClass = (path) => {
    return location.pathname === path ? "text-blue-600 underline" : "";
  };

  return (
    <Navbar fluid rounded className="h-[9vh] sm:h-[10vh] bg-slate-50">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold cursor-pointer hover:text-blue-500">
          {activeTable}
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
          onClick={() => setActiveTable("StudentTable")}
        >
          StudentTable
        </Navbar.Link>
        <Navbar.Link
          href="/employee"
          className={`hover:text-blue-500 ${getActiveClass("/employee")}`}
          onClick={() => setActiveTable("EmployeeTable")}
        >
          EmployeeTable
        </Navbar.Link>
        <Navbar.Link
          href="/agriculture"
          className={`hover:text-blue-500 ${getActiveClass("/agriculture")}`}
          onClick={() => setActiveTable("AgricultureTable")}
        >
          AgricultureTable
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
