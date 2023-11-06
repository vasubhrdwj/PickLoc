/** @format */

import Header from "../components/Header";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import LearnMore from "../components/LearnMore";
import Quote from "../components/Quote";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="dark:bg-black">
      <Header />
      <Hero />
      <Explore />
      <LearnMore />
      <Quote />
      <Offer />
      <Footer />
    </div>
  );
};

export default HomePage;
