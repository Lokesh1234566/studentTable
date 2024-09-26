/* eslint-disable react/prop-types */
import React from "react";
import AgricultureComp from "../components/AgricultureComp";

const AgriculturePage = ({ tableVisible, setClickedAgriculture }) => {
  return (
    <div className={`flex-grow ${tableVisible ? "" : "hidden"}`}>
      <AgricultureComp setClickedAgriculture={setClickedAgriculture} />
    </div>
  );
};

export default AgriculturePage;
