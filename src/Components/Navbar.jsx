import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../../DarkModeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b shadow-md transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-900 to-gray-800 border-orange-500/30"
            : "bg-gradient-to-b from-white to-gray-100 border-orange-500/20"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span
              className={`self-center font-extrabold text-xl md:text-2xl whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 animate-pulse ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {"<"}AYO<span className={isDarkMode ? "text-white" : "text-orange-600"}>MIDE{"/>"}</span>
            </span>
          </Link>

          <button
            onClick={handleToggleDropdown}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden transition-colors duration-200 ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-700/50 focus:ring-2 focus:ring-orange-500/50"
                : "text-gray-700 hover:bg-gray-200/50 focus:ring-2 focus:ring-orange-500/50"
            }`}
            aria-controls="navbar-default"
            aria-expanded={isDropdownOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "block opacity-100" : "hidden opacity-0 md:opacity-100"
            }`}
            id="navbar-default"
          >
            <ul
              className={`font-medium flex flex-col p-2 mt-4 border tracking-tighter rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:p-0 ${
                isDarkMode
                  ? "bg-gray-900/80 border-gray-700 text-white md:bg-transparent"
                  : "bg-white/80 border-gray-200 text-gray-900 md:bg-transparent"
              }`}
            >
              {["Home", "Project", "Resume", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`block py-2 px-3 rounded transition-colors duration-200 md:p-0 ${
                      isDarkMode
                        ? "hover:bg-gray-800/50 hover:text-orange-400"
                        : "hover:bg-gray-100/50 hover:text-orange-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <div
                  onClick={toggleDarkMode}
                  className={`md:px-2 md:py-2 px-3 py-3 rounded-full text-xl md:text-sm cursor-pointer transition-colors duration-200 ${
                    isDarkMode
                      ? "bg-orange-600 text-white hover:bg-orange-500"
                      : "bg-orange-400 text-gray-900 hover:bg-orange-300"
                  }`}
                >
                  {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;