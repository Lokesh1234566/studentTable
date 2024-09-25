/* eslint-disable react/prop-types */
import React from "react";

const FooterComp = ({ clickedStudent, clickedEmployee }) => {
  const renderDetails = (entity, entityType) => {
    if (entity) {
      return (
        <div className="flex flex-wrap text-xs sm:text-sm mt-2 gap-1 flex-col sm:flex-row sm:gap-3 md:gap-2 md:flex-col">
          <p className="text-green-500">
            <span className="font-bold text-green-900">Name:</span>{" "}
            {entity.Name}
          </p>
          <p className="text-blue-500">
            <span className="font-bold text-blue-900">Email:</span>{" "}
            {entity.Email}
          </p>
          <p className="text-red-500">
            <span className="font-bold text-red-900">Address:</span>{" "}
            {entity.Address}
          </p>
        </div>
      );
    } else {
      return <p>No {entityType} selected yet</p>;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-300 md:p-1 h-[20vh]">
      <div className="mb-1 ml-2 h-[13vh] sm:h-[10vh] md:[h-13vh]">
        {clickedStudent
          ? renderDetails(clickedStudent, "student")
          : renderDetails(clickedEmployee, "employee")}
      </div>
      <div className="font-bold text-slate-700 text-sm md:text-lg">
        <marquee>Welcome to college website @ 2024</marquee>
      </div>
    </div>
  );
};

export default FooterComp;
