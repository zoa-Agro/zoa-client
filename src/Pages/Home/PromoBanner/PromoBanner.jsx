import React from "react";
import promoBanner1 from "../../../assets/images/promobanner1.jpg";
import promoBanner2 from "../../../assets/images/promobanner2.jpg";
import promoBanner3 from "../../../assets/images/promobanner3.jpg";

const PromoBanner = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 ">
      <div className="hero hover:scale-110 transition duration-500 cursor-pointer" style={{ backgroundImage: `url(${promoBanner2})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md z-30">
            <h1 className="mb-2 text-sm ">Well Trained</h1>
            <p className="mb-5 text-3xl font-bold ">
             Get Your Pet
              
            </p>
            <button className="btn border border-[#6bb42f] hover:border-[#6bb42f] text-white duration-400  bg-[#6bb42f] hover:text-[#6bb42f] ">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="hero hover:scale-110 transition duration-500 cursor-pointer " style={{ backgroundImage: `url(${promoBanner1})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center  h-[220px] text-white">
          <div className="max-w-md border px-16 py-2">
            <h1 className="mb-2 text-sm ">Best Quality Products</h1>
            <p className="mb-5 text-3xl font-bold">
              Buy Plants & Seeds
              
            </p>
            <button className="btn border border-[#6bb42f] hover:border-[#6bb42f] text-white duration-400  bg-[#6bb42f] hover:text-[#6bb42f]  ">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="hero hover:scale-110 transition duration-500 cursor-pointer" style={{ backgroundImage: `url(${promoBanner3})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-sm ">All Tools</h1>
            <p className="mb-5 font-bold text-3xl">
             Purchase Tools 
              
            </p>
            <button className="btn border border-[#6bb42f] hover:border-[#6bb42f] text-white duration-400  bg-[#6bb42f] hover:text-[#6bb42f] ">Shop Now</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PromoBanner;
