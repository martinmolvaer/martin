import React, { useState } from "react";

const Nav = () => {
  const [darkMode, setDarkMode] = useState("");

  const clickDarkMode = () => {
    setDarkMode("dark");
    console.log("clik");
  };

  return (
    <div className={`nav  ${darkMode}`}>
      <a href="https://github.com/martinmolvaer">
        <p className={`nav-item ${darkMode}`}>Github</p>
      </a>
      <p onClick={clickDarkMode} className={`nav-item`}>
        🌖
      </p>
    </div>
  );
};

export default Nav;
