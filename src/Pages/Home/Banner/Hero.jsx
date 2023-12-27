import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="absolute top-[15%] md:top-1/3  w-full text-center mx-auto">
      <div className="hero-title text-white">
      <p className="text-xs  mt-3">| Give you full of love from Green Agro |</p>
        <p className="text-3xl md:text-6xl mb-2  md:mt-5">Green Agriculture </p>
        <p className="text-xs md:text-xl  ">Buy the best product from Green Agro.</p>
        <Link to={'/shop'} className="text-sm btn rounded-none font-semibold py-1 px-3 md:py-2 md:px-8 bg-[#6bb42f] mt-5 border border-[#6bb42f]  ">Show All Products</Link>
      </div>
    
    </div>
  );
};

export default Hero;
