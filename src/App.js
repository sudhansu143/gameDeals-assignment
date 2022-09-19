import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Search from "./Component/Search";
import Card from "./Component/Card";
function App() {
  return (
    <>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
