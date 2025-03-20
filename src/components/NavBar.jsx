import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/App.min.css";
import logo from "../assets/logo.png";
import { Sun, Moon } from "react-feather";

function NavBar({ hideToggle }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" || false;
  });

  useEffect(() => {
    if (isHomePage) {
      document.body.classList.toggle("dark", darkMode);
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode, isHomePage]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="JobsCraft Logo" className="logo" />
          <span className="logo-text">JobsCraft</span>
        </Link>
      </div>
      {!hideToggle && isHomePage && (
        <label className="toggle-label">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="toggle-slot">
            <div className="sun-icon-wrapper">
              <Sun className="sun-icon" />
            </div>
            <div className="toggle-button"></div>
            <div className="moon-icon-wrapper">
              <Moon className="moon-icon" />
            </div>
          </div>
        </label>
      )}
    </div>
  );
}

export default NavBar;