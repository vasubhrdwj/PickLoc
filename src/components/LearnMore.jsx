/** @format */

import b1 from "../assets/b1.jpg";

const LearnMore = () => {
  return (
    <div className="w-11/12 m-auto md:w-10/12">
      <div className="flex flex-col py-20 md:flex-row gap-10">
        <h1 className="text-3xl dark:text-white">
          A travel company that does things differently
        </h1>
        <p className="dark:text-white">
          We believe that travel is about creating unforgettable memories. Our
          trips are designed to leave a lasting impression.
        </p>
      </div>
      <img src={b1} alt="photo" />
      <div className="w-full grid grid-cols-1 gap-5 py-10 md:grid-cols-3">
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
      </div>
    </div>
  );
};

export default LearnMore;
