import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirect
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import StudentPage from "./pages/StudentPage";
import Table3 from "./pages/Table3";
import EmployeePage from "./pages/EmployeePage";

const App = () => {
  const [tableVisible, setTableVisible] = useState(true); // State to toggle table visibility
  const [clickedStudent, setClickedStudent] = useState(null); // State for clicked student
  const [clickedEmployee, setClickedEmployee] = useState(null);

  return (
    <BrowserRouter>
      <HeaderComp setTableVisible={setTableVisible} />
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
        <Route path="/table3" element={<Table3 />} />
      </Routes>
      <FooterComp
        clickedStudent={clickedStudent}
        clickedEmployee={clickedEmployee}
      />
    </BrowserRouter>
  );
};

export default App;
