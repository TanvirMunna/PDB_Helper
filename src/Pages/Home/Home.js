import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Banner from "./Home/Banner/Banner";
import Categories from "./Home/Categories/Categories";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Banner></Banner>
      <Categories></Categories>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
