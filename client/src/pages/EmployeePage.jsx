/* eslint-disable react/prop-types */
import React from "react";
import EmployeeComp from "../components/EmployeeComp";

const EmployeePage = ({ tableVisible, setClickedEmployee }) => {
  return (
    <div className={`flex-grow ${tableVisible ? "" : "hidden"}`}>
      <EmployeeComp setClickedEmployee={setClickedEmployee} />
    </div>
  );
};

export default EmployeePage;
