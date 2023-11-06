/** @format */

import { useContext, useEffect, useState } from "react";
import menu from "../assets/menuWhite.png";
import menuBlack from "../assets/menuBlack.png";
import { ThemeContext } from "../context/themeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-full bg-black h-[72px] flex items-center dark:bg-white">
      <div className="w-10/12 flex items-center justify-between m-auto">
        <p
          className="text-white border-b border-white dark:text-black dark:border-black"
          onClick={() => toggleTheme()}
        >
          OUTLAND
        </p>
        {theme === "dark" ? (
          <img src={menuBlack} alt="menu" className="w-5" />
        ) : (
          <img src={menu} alt="menu black" className="w-5" />
        )}
      </div>
    </div>
  );
};

export default Header;
