import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { User } from "lucide-react"; // Icon người dùng

const navLinks = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới thiệu", path: "/about" },
  { name: "Dịch vụ", path: "/services" },
  { name: "Liên hệ", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md px-6 sm:px-16 py-3">
      <nav className="m-0 p-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={assets.logo}
            alt="Logo"
            className="w-10 sm:w-14 cursor-pointer transition-transform duration-200 hover:scale-105"
          />
          <span className="text-xl sm:text-2xl font-semibold tracking-wide text-gray-800 drop-shadow-sm">
            ChatBox <span className="text-blue-600">AI</span>
          </span>
        </div>

        {/* Link trên desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a key={i} href={link.path} className="group flex flex-col gap-0.5">
              {link.name}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer">
            Ra mắt mới
          </button>
        </div>

        {/* Tài khoản */}
        <div className="hidden md:flex items-center gap-4 cursor-pointer">
          <svg
            className="h-6 w-6 transition-all duration-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full ml-4 transition-all duration-500 border border-gray-500 cursor-pointer"
            >
              <User className="w-4 h-4 " />
              Đăng nhập
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-6 w-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 font-medium text-base transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <button className="border px-4 py-1 text-sm font-light rounded-full ">
              Ra mắt mới
            </button>
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 border bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 hover:bg-gray-800 active:scale-95 cursor-pointer"
            >
              <User className="w-4 h-4" />
              Đăng nhập
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
