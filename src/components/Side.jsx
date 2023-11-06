/** @format */

import search from "../assets/search.png";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";

const Side = () => {
  return (
    <div className="grid grid-cols-1 gap-8 w-full md:w-96">
      <div className="w-full bg-custom1 py-8">
        <div className="w-10/12 m-auto">
          <p className="mb-8 text-xs">SEARCH</p>
          <div className="flex w-full">
            <input type="text" className="flex-1 mr-2" />
            <div className="bg-orange-400 h-12 w-16 flex items-center justify-center">
              <img src={search} alt="search" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom1 py-10">
        <div className="w-10/12 m-auto">
          <h1>LATEST STORIES</h1>
          <p className="text-orange-400 underline py-8">HELLO WORLD!</p>
          <div className="mb-5">
            <img src={c1} alt="photo 1" />
            <p className="text-orange-400 py-3 underline">
              Lost in Patagonia's Wilderness
            </p>
          </div>
          <div>
            <img src={c2} alt="" />
            <p className="text-orange-400 underline pt-3 pb-2">
              Adventures Off the Beaten Path
            </p>
            <p>March 31, 2023</p>
          </div>
        </div>
      </div>
      <div className="bg-orange-400 p-5">
        <p className="text-white">QUOTE OF THE DAY</p>
        <p className="text-white py-5">
          “The world is a book and those who do not travel read only one page.”
        </p>
        <p className="text-white">– St. Augustine</p>
      </div>
    </div>
  );
};

export default Side;
