/** @format */

import bg from '../assets/bg.jpg';

const Hero = () => {
  return (
    <div className="w-full h-[50vh] bg-black dark:bg-white">
      <div className="w-11/12 h-full relative ml-auto">
        <img
          src={bg}
          alt="bg"
          className="w-full h-full object-cover object-center -z-10"
        />
        <div className="absolute left-10 top-1/2 -translate-y-1/2">
          <h1 className="text-4xl text-white pb-7">
            Adventure <br /> Awaits
          </h1>
          <button className="bg-orange-400 text-white py-2 px-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
