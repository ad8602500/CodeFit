import React from "react";
import logo from "../assets/CodeFit logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-[#18192a]/80 backdrop-blur-md shadow-md z-20">
    <div className="flex items-center gap-2">
      <img src={logo} alt="CodeFit Logo" className="h-8 w-8" />
      <span className="font-bold text-xl tracking-tight text-gray-100">CodeFit</span>
    </div>
    <a href="#get-started" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Get Started</a>
  </nav>
);

export default Navbar;
