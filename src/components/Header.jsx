/** @format */

import { useContext, useState } from 'react';
import menu from '../assets/menuWhite.png';
import menuBlack from '../assets/menuBlack.png';
import { ThemeContext } from '../context/ThemeContext';
import ToggleMenu from './ToggleMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsToggleMenuOpen((prevStatus) => !prevStatus);
  };

  return (
    <div className="w-full bg-white h-[72px] flex items-center dark:bg-black">
      <div className="w-11/12 flex items-center justify-between m-auto">
        <Link
          to="/"
          className="text-black text-3xl dark:text-white dark:border-black"
        >
          PickLoc
        </Link>
        {theme === 'dark' ? (
          <img
            src={menu}
            alt="menu"
            className="w-5 cursor-pointer"
            onClick={() => handleToggleMenu()}
          />
        ) : (
          <img
            src={menuBlack}
            alt="menu black"
            className="w-5 cursor-pointer"
            onClick={() => handleToggleMenu()}
          />
        )}
      </div>
      {isToggleMenuOpen && <ToggleMenu handleToggleMenu={handleToggleMenu} />}
    </div>
  );
};

export default Header;
