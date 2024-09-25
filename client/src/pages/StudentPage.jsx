/* eslint-disable react/prop-types */
import React from "react";
import StudentTable from "../components/StudentTable";

const StudentPage = ({ setClickedStudent, tableVisible }) => {
  return (
    <div className={`flex-grow ${tableVisible ? "" : "hidden"}`}>
      <StudentTable setClickedStudent={setClickedStudent} />{" "}
      {/* Pass the student selection handler */}
    </div>
  );
};

export default StudentPage;
