import React from "react";

const Hero = () => {
  return (
    <div className="absolute top-[15%] md:top-1/4  w-full text-center mx-auto">
      <div className="hero-title text-white">
      <p className="text-xs  mt-3">| Give you full of love from zoa |</p>
        <p className="text-3xl md:text-6xl mb-2  md:mt-5">Zone Of Agriculture </p>
        <p className="text-xs md:text-xl  ">Buy the best product from ZOA.</p>
        <button className="text-sm md:text-xl font-semibold py-1 px-3 md:py-2 md:px-8 bg-green-400 mt-5 border border-green-400 hover:bg-white hover:text-green-400 ">Show All Products</button>
      </div>
    
    </div>
  );
};

export default Hero;
