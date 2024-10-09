/** @format */
import a3 from '../assets/nexus-esplanade.jpg';
import a2 from '../assets/Infocity-Bbsr.jpg';
import a1 from '../assets/KIIT-University-Campus.jpg';

const Explore = () => {
  return (
    <div className="w-11/12 m-auto grid grid-cols-1 gap-5 my-10 md:grid-cols-4 md:w-10/12">
      <div>
        <h1 className="text-3xl py-4 dark:text-white">
          Locations
        </h1>
        <p className="dark:text-white pr-8">
        Hungry for adventure?<br/>
         Pick a spot, and we'll dish out the tastiest cafes and restaurants near you. 
         Let your cravings lead the way!
        </p>
      </div>
      <div className="relative h-[430px] overflow-hidden group">
      
        <img
          src={a1}
          alt="photo 1"
          class="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-500 cursor-pointer"
        />
        
        <p className="absolute left-1/2 text-lg -translate-x-1/2 bottom-4 font-semibold text-white border-b border-white ease-in-out group-hover:-translate-y-4 duration-500">
          KIIT Road
        </p>
      </div>
      <div className="relative h-[430px] overflow-hidden group">
        <img
          src={a2}
          alt="photo 2"
          className="w-full h-full object-cover hover:scale-110 ease-in-out duration-500 cursor-pointer"
        />
        <p className="absolute left-1/2 -translate-x-1/2 bottom-4 text-white font-semibold text-lg border-b border-white ease-in-out group-hover:-translate-y-4 duration-500">
          Infocity
        </p>
      </div>
      <div className="relative h-[430px] overflow-hidden group">
        <img
          src={a3}
          alt="photo 3"
          className="w-full h-full object-cover hover:scale-110 ease-in-out duration-500 cursor-pointer"
        />
        <p className="absolute left-1/2 text-lg -translate-x-1/2 bottom-4 font-semibold text-white border-b border-white ease-in-out group-hover:-translate-y-4 duration-500">
          Esplanade
        </p>
      </div>


    </div>
  );
};

export default Explore;
