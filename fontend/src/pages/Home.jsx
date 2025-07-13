import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Review from "../components/Review";
import Plan from "../components/Plan";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 ">
        <Navbar />
        <Hero />
        <AiTools />
        <Review />
        <Plan />
        <Footer />
      </div>
    </>
  );
};

export default Home;
