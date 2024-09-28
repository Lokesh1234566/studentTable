import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirect
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import StudentPage from "./pages/StudentPage";
import EmployeePage from "./pages/EmployeePage";
import AgriculturePage from "./pages/AgriculturePage";
import NavbarComp from "./components/NavbarComp";

const App = () => {
  const [tableVisible, setTableVisible] = useState(true); // State to toggle table visibility
  const [clickedStudent, setClickedStudent] = useState(null); // State for clicked student
  const [clickedEmployee, setClickedEmployee] = useState(null);
  const [clickedAgriculture, setClickedAgriculture] = useState(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [activeTable, setActiveTable] = useState("StudentTable");

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
    setTableVisible((prevState) => !prevState); // Toggle table visibility
  };

  return (
    <BrowserRouter>
      <HeaderComp setTableVisible={setTableVisible} activeTable={activeTable} />
      <NavbarComp
        onToggle={toggleNavbar}
        isOpen={isNavbarOpen}
        setActiveTable={setActiveTable}
        activeTable={activeTable}
      />
      <Routes>
        {/* Default route for StudentTable */}
        <Route path="/" element={<Navigate to="/student" />} />
        <Route
          path="/student"
          element={
            <StudentPage
              setClickedStudent={setClickedStudent}
              tableVisible={tableVisible}
            />
          }
        />
        <Route
          path="/employee"
          element={
            <EmployeePage
              tableVisible={tableVisible}
              setClickedEmployee={setClickedEmployee}
            />
          }
        />
        <Route
          path="/agriculture"
          element={
            <AgriculturePage
              tableVisible={tableVisible}
              setClickedAgriculture={setClickedAgriculture}
            />
          }
        />
      </Routes>
      <FooterComp
        clickedStudent={clickedStudent}
        clickedEmployee={clickedEmployee}
        clickedAgriculture={clickedAgriculture}
        activeTable={activeTable}
      />
    </BrowserRouter>
  );
};

export default App;
