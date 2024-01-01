import React from "react";
import image from "../../assets/images/aboutCover.jpg";
import plants from "../../assets/images/plants.png";
import pets from "../../assets/images/pets.png";
import tools from "../../assets/images/tools.png";
import food from "../../assets/images/food.png";
import { Link } from "react-router-dom";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
       <Helmet>
        <title>About Us | Green Agro </title>
      </Helmet>
      <PageBanner name="About Us" previousPage="Home" currentPage="About Us" />

      <div className=" ">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <img className=" hover:opacity-90" src={image} alt="" />
          <div className="space-y-2">
            <h2 className="text-xl text-[#6bb42f] font-semibold">
              Welcome to Green Agro
            </h2>
            <h1 className="text-3xl font-semibold">Our Journey to Dreams</h1>
            <p className="">
              <span className="text-[#6bb42f]">GreenAgro</span> is an agriculture E-commerce website in Bangladesh.
              Established in September 2023, this B2C site has become a trusted
              marketplace for both sellers & customers. We have both high-priced
              branded products and low-priced branded products on our site. <br />
              <span className="text-[#6bb42f]">GreenAgro</span> is the only site in Bangladesh where you can find every
              type of product like - fish, birds, food, medicine, equipment,
              exotic animals, plants, seeds, etc. Around Every day, new products
              are added to our collection.
            </p>
            <div>
              <Link to={"/shop"} className="btn bg-[#6bb42f] mt-5">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-20 my-20">
          <div className="text-center 	 ">
            <img src={plants} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Plants & Seeds Supply
            </h3>
            <p className="">Find some plant combination for decoration .</p>
          </div>
          <div className="text-center 	 ">
            <img src={pets} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Collections of Pets
            </h3>
            <p className="">Let’s find a Pet for you & save your time.</p>
          </div>
          <div className="text-center 	 ">
            <img src={tools} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Garden tools
            </h3>
            <p className="">Let’s find garden tools to save your time.</p>
          </div>
          <div className="text-center  ">
            <img src={food} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Foods for Pets
            </h3>
            <p className="">Let’s find some food for your pets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
