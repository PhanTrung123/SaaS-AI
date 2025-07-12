import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md px-6 sm:px-16 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-10 sm:w-14 cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={() => navigate("/")}
        />
        <button className="flex items-center gap-2 bg-blue-500 text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow hover:bg-blue-700 transition duration-300">
          Hãy Bắt Đầu
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
