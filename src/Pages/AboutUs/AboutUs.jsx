import React from "react";
import image from "../../assets/images/aboutCover.jpg";
import plants from "../../assets/images/plants.png";
import pets from "../../assets/images/pets.png";
import tools from "../../assets/images/tools.png";
import food from "../../assets/images/food.png";
import { Link } from "react-router-dom";
import PageBanner from "../../Shared/PageBanner/PageBanner";
const AboutUs = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <PageBanner name="About Us" previousPage="Home" currentPage="About Us" />

      <div className=" ">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <img className=" hover:opacity-90" src={image} alt="" />
          <div className="space-y-2">
            <h2 className="text-xl text-[#6bb42f] font-medium">
              Welcome to ZOA
            </h2>
            <h1 className="text-3xl font-semibold">Our Journey to Dreams</h1>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              in ea qui suscipit aperiam, eum nam natus consequuntur accusantium
              vitae aspernatur perferendis enim saepe, numquam fuga repellat
              alias et sed magnam ipsa commodi accusamus beatae incidunt
              repudiandae? Tempore quam mollitia aliquam, doloremque facilis
              esse maxime corporis provident perspiciatis sint voluptate.
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
            <p className="">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="text-center 	 ">
            <img src={pets} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Collections of Pets
            </h3>
            <p className="">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="text-center 	 ">
            <img src={tools} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Garden tools
            </h3>
            <p className="">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="text-center  ">
            <img src={food} className="w-32 mx-auto" alt="" />
            <h3 className="mt-2 text-lg hover:text-[#6bb42f] font-semibold mb-2 ">
              Foods for Pets
            </h3>
            <p className="">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
