/** @format */

import b2 from '../assets/b2.jpg';

const Offer = () => {
  return (
    <div className="w-full bg-black dark:bg-white">
      <div className="w-11/12 h-[650px] ml-auto relative">
        <img src={b2} alt="photo 2" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 left-10">
          <h1 className="text-white text-3xl">Get 20% Off your First Trip</h1>
          <button className="bg-orange-400 text-white py-2 px-4 rounded-full mt-7">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
