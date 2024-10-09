/** @format */

import bg from '../assets/wallpaperflare.com_wallpaper.jpg';

const Hero = () => {
  return (
    <div className="w-full h-[50vh] bg-black dark:bg-white">
      <div className="w-11/12 h-full relative ml-auto mr-auto">
        <img
          src={bg}
          alt="bg"
          className="w-full h-full object-cover object-center -z-10"
        />
        <div className="absolute left-10 top-1/2 -translate-y-1/2">
          <h1 className="text-3xl text-white font-semibold pb-7">
            Going Somewhere ?<br />
            We Got You Covered!
          </h1>
          <button className="bg-amber-400 text-white py-2 px-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
