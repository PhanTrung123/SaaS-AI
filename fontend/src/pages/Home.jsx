import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 ">
        <Navbar />
        <Hero />
        <AiTools />
      </div>
    </>
  );
};

export default Home;
