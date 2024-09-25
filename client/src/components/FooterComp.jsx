/* eslint-disable react/prop-types */
import React from "react";

const FooterComp = ({ clickedStudent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-300 md:p-1 h-[20vh]">
      <div className="mb-1 ml-2 h-[13vh] sm:h-[10vh] md:[h-13vh]">
        {clickedStudent ? (
          <div className="flex flex-wrap text-xs sm:text-sm mt-2 gap-1 flex-col sm:flex-row sm:gap-3 md:gap-2 md:flex-col">
            <p className="text-green-500">
              <span className="font-bold text-green-900">Name:</span>{" "}
              {clickedStudent.Name}
            </p>
            <p className="text-blue-500">
              <span className="font-bold text-blue-900">Email:</span>{" "}
              {clickedStudent.Email}
            </p>
            <p className="text-red-500">
              <span className="font-bold text-red-900">Address:</span>{" "}
              {clickedStudent.Address}
            </p>
          </div>
        ) : (
          <p>No student selected yet</p>
        )}
      </div>
      <div className="font-bold text-slate-700 text-sm md:text-lg">
        <marquee>Welcome to college website @ 2024</marquee>
      </div>
    </div>
  );
};

export default FooterComp;
