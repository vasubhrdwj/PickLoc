/** @format */

import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebookBlack from '../assets/facebook-black.png';
import twitterBlack from '../assets/twitter-black.png';
import instagramBlack from '../assets/instagram-black.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="bg-white w-full h-24 flex items-center dark:bg-black">
      <div className="w-10/12 m-auto flex justify-between">
        <p className="text-black text-lg dark:text-white">OUTLAND</p>
        <div className="flex items-center">
          {theme === 'dark' ? (
            <img src={facebook} alt="facebook" className="w-5 mr-5" />
          ) : (
            <img src={facebookBlack} alt="facebook" className="w-5 mr-5" />
          )}
          {theme === 'dark' ? (
            <img src={twitter} alt="twitter" className="w-5 mr-5" />
          ) : (
            <img src={twitterBlack} alt="twitter" className="w-5 mr-5" />
          )}
          {theme === 'dark' ? (
            <img src={instagram} alt="instagram" className="w-5" />
          ) : (
            <img src={instagramBlack} alt="instagram" className="w-5" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
