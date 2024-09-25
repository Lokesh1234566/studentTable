import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import StudentPage from "./pages/StudentPage";
import Table2 from "./pages/Table2";
import Table3 from "./pages/Table3";

const App = () => {
  const [tableVisible, setTableVisible] = useState(true); // State to toggle table visibility
  const [clickedStudent, setClickedStudent] = useState(null); // State for clicked student

  return (
    <BrowserRouter>
      <HeaderComp setTableVisible={setTableVisible} />
      <Routes>
        <Route
          path="/"
          element={
            <StudentPage
              setClickedStudent={setClickedStudent}
              tableVisible={tableVisible}
            />
          }
        />
        <Route path="/table2" element={<Table2 />} />
        <Route path="/table3" element={<Table3 />} />
      </Routes>
      <FooterComp clickedStudent={clickedStudent} />
    </BrowserRouter>
  );
};

export default App;
