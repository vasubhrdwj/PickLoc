/** @format */

import { useContext } from 'react';
import close from '../assets/close.png';
import theme from '../assets/theme.png';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const ToggleMenu = (props) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-10/12 h-screen absolute top-0 right-0 z-10 bg-black md:w-1/3">
      <div className="w-11/12 m-auto flex justify-end mt-5 items-center">
        <img
          src={theme}
          alt="dark mode"
          className="w-8 mr-5 cursor-pointer"
          onClick={() => toggleTheme()}
        />
        <img
          src={close}
          alt=""
          className="w-8 cursor-pointer"
          onClick={() => props.handleToggleMenu()}
        />
      </div>
      <ul className="mt-4">
        <Link to="/" className="text-white py-3 text-center block">
          Home
        </Link>
        <Link to="/about" className="text-white py-3 text-center block">
          About
        </Link>
        <Link to="/blog" className="text-white py-3 text-center block">
          Blog
        </Link>
      </ul>
    </div>
  );
};

export default ToggleMenu;
