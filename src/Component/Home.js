import React from "react";
import { useNavigate } from "react-router-dom";
import Bnavbar from "./Bnavbar";
import "./btn.css";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Bnavbar />
      <div className="home" onClick={() => navigate("/search")}></div>
      <Footer />
    </>
  );
}
export default Home;
