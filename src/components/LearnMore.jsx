/** @format */

import b1 from '../assets/prc-1.jpg';
import b2 from '../assets/prc-3.jpg';
import b3 from '../assets/prc-2.jpeg';
import b5 from '../assets/prc-4.jpg';

import { useEffect, useState } from 'react';

const LearnMore = () => {
  const images = [b1, b2, b3, b5];
  const interval = 5000;

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, interval);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-11/12 m-auto md:w-10/12">
      <div className="flex flex-col py-20 md:flex-row gap-10">
        <h1 className="text-3xl dark:text-white">
        Click your cravings away and uncover local gems
        </h1>
        <p className="dark:text-white">
        From quick bites to fine dining, we'll guide you to the perfect spot based on your preferences and current location. 
        <br/>Start your food journey now!

        </p>
      </div>
      <div className="w-full h-[650px] relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover absolute"
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full bg-white focus:outline-none ${
                index === currentImage ? 'opacity-100' : 'opacity-50'
              }`}
            ></button>
          ))}
        </div>
      </div>
      {/* <div className="w-full grid grid-cols-1 gap-5 py-10 md:grid-cols-3">
        <div>
          <h1 className="text-2xl dark:text-white">Excellence</h1>
          <p className="my-6 dark:text-white">
            We create unparalleled experiences that exceed your expectations
            with a passion for perfection and attention to detail.
          </p>
          <p className="text-orange-400 underline">LEARN MORE</p>
        </div>
        <div>
          <h1 className="text-2xl dark:text-white">Professionalism</h1>
          <p className="my-6 dark:text-white">
            We deliver top-notch service, and handle requests with expertise,
            ensuring your journey is smooth and hassle-free.
          </p>
          <p className="text-orange-400 underline">LEARN MORE</p>
        </div>
        <div>
          <h1 className="text-2xl dark:text-white">Expertise</h1>
          <p className="my-6 dark:text-white">
            Our intimate knowledge of destinations worldwide allows us to craft
            tailored, extraordinary journeys.
          </p>
          <p className="text-orange-400 underline">LEARN MORE</p>
        </div>
      </div> */}
    </div>
  );
};

export default LearnMore;
