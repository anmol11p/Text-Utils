import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Header = () => {
  const { mode, setMode } = useContext(UserContext);
  const navLinkClass = ({ isActive }) => {
    const focusStyle = "focus:outline-none";

    if (isActive) {
      return mode === "light"
        ? `text-gray-700 font-semibold ${focusStyle}`
        : `text-white font-semibold ${focusStyle}`;
    }
    return `text-gray-400 hover:text-gray-600 ${focusStyle}`;
  };

  const handleSelect = (value) => {
    localStorage.setItem("mode", value);
    setMode(value);
  };
  const handleToggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", next);
    setMode(next);
  };
  return (
    <nav
      className={` ${
        mode !== "light" ? "bg-gray-900" : "border-b-gray-200 border-1"
      }
 flex items-center justify-between 
    px-10 py-2 z-10 fixed w-full
  `}
    >
      <div className="right-section flex gap-4">
        <h2 className={mode !== "light" ? "text-white" : "text-gray-600"}>
          TextUtils
        </h2>
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={navLinkClass}>
          About us
        </NavLink>
      </div>

      <div className="left-section flex gap-8 items-center">
        <div className="flex item-center gap-2">
          <button
            className="h-5 w-5 rounded-full bg-red-800 cursor-pointer"
            onClick={() => handleSelect("red")}
          ></button>
          <button
            className="h-5 w-5 rounded-full bg-purple-800 cursor-pointer"
            onClick={() => handleSelect("purple")}
          ></button>
          <button
            className="h-5 w-5 rounded-full bg-blue-800 cursor-pointer"
            onClick={() => handleSelect("blue")}
          ></button>
        </div>
        <div>
          <button
            className={`${
              mode !== "light" && "text-white"
            } cursor-pointer focus:outline-none`}
            onClick={handleToggle}
          >
            {mode === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
