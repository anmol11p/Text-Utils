import React, { useContext, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Header = () => {
  const { mode, setMode } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) => {
    const base = "block py-2 px-4 rounded-md text-sm md:text-base";
    if (isActive) {
      return mode === "light"
        ? `text-gray-700 font-semibold ${base}`
        : `text-white font-semibold ${base}`;
    }
    return `text-gray-400 hover:text-gray-600 ${base}`;
  };

  const handleSelect = (value) => {
    localStorage.setItem("mode", value);
    setMode(value);
    setMenuOpen(false);
  };

  const handleToggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", next);
    setMode(next);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${
        mode !== "light" ? "bg-gray-900" : "bg-white border-b border-gray-200"
      } fixed w-full z-20 top-0 left-0`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Nav */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h2
            className={`font-bold text-lg ${
              mode !== "light" ? "text-white" : "text-gray-800"
            }`}
          >
            TextUtils
          </h2>
          {/* Hamburger */}
          <button
            className={`md:hidden ml-4 cursor-pointer ${
              mode !== "light" && "text-white"
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          <div className="flex items-center gap-2">
            <button
              className="h-5  cursor-pointer w-5 rounded-full bg-red-800"
              onClick={() => handleSelect("red")}
            ></button>
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-purple-800"
              onClick={() => handleSelect("purple")}
            ></button>
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-blue-800"
              onClick={() => handleSelect("blue")}
            ></button>
          </div>

          <button
            className={`${
              mode !== "light" ? "text-white" : "text-gray-800"
            } focus:outline-none cursor-pointer`}
            onClick={handleToggle}
          >
            {mode === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className={`flex flex-col gap-2  justify-center pb-5  md:hidden ${
            mode !== "light" ? "bg-gray-900" : "bg-white"
          }`}
        >
          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          <div className="flex items-center gap-2 px-4">
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-red-800"
              onClick={() => handleSelect("red")}
            ></button>
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-purple-800"
              onClick={() => handleSelect("purple")}
            ></button>
            <button
              className="h-5 w-5 cursor-pointer rounded-full bg-blue-800"
              onClick={() => handleSelect("blue")}
            ></button>
          </div>
          <div className="flex items-center px-4 py-2">
            <button
              className={`${
                mode !== "light" ? "text-white" : "text-gray-800"
              } focus:outline-none cursor-pointer`}
              onClick={handleToggle}
            >
              {mode === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
