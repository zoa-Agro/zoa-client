import React, { useState,useRef } from "react";
import plants from "../../../assets/images/plants.png";
import birds from "../../../assets/images/birds1.png";
import pets from "../../../assets/images/pets.png";
import fish from "../../../assets/images/fish.png";
import food from "../../../assets/images/food.png";
import tools from "../../../assets/images/tools.png";
import medicine from "../../../assets/images/medicine.png";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Category.css'


// import required modules
import { Pagination } from 'swiper/modules';

const Categories = () => {
  const navigate= useNavigate()
  const handleCategory=(categoryName) => {  
    navigate('/shop',{state:{data:{categoryName}}})
    
  }
  
  
  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <h2 className="text-center font-medium text-3xl md:text-4xl mb-20">
        <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">|</span> Our
        Categories{" "}
        <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">|</span>
      </h2>
      <Swiper
      slidesPerView={2}
      spaceBetween={10}
      

      pagination={{
        clickable: true,
      }}
    
      breakpoints={{
        '@0.00': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 5,
          spaceBetween: 40,
        }
      }}
      modules={[Pagination]}
      className="mySwiper">
        <SwiperSlide className="mb-10"> <div onClick={()=>handleCategory("plants")} className="text-center border-[#6bb42f] hover:border-b-2 w-[150px]	 ">
          <img src={plants}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700" alt="" />
          <h3  className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Plants & Seeds</h3>
        </div></SwiperSlide>
        <SwiperSlide> <div className="text-center border-[#6bb42f] hover:border-b-2 w-[150px]">
          <img src={birds}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700" alt="" />
          <h3 onClick={()=>handleCategory("birds")} className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Birds</h3>
        </div></SwiperSlide>
        <SwiperSlide><div className="text-center border-[#6bb42f] hover:border-b-2 w-[150px]">
          <img src={fish}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700" alt="" />
          <h3 onClick={()=>handleCategory("fish")} className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Fish</h3>
        </div></SwiperSlide>
        <SwiperSlide><div className="text-center border-[#6bb42f] hover:border-b-2 w-[150px] ">
          <img src={pets}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700" alt="" />
          <h3 onClick={()=>handleCategory("animals")} className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Animals</h3>
        </div></SwiperSlide>
        <SwiperSlide><div className="text-center border-[#6bb42f] hover:border-b-2 w-[150px]">
          <img src={food}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700" alt="" />
          <h3 onClick={()=>handleCategory("food")} className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Food</h3>
        </div></SwiperSlide>
        <SwiperSlide><div className="text-center border-[#6bb42f] hover:border-b-2 w-[150px]">
          <img src={medicine}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700" alt="" />
          <h3 onClick={()=>handleCategory("medicine")} className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Medicine</h3>
        </div></SwiperSlide>
        <SwiperSlide><div className="text-center border-[#6bb42f] hover:border-b-2 w-[150px]">
          <img src={tools}  className="rounded-full shadow-xl  border-2 border-black p-2 hover:border-[#6bb42f] hover:transform hover:-scale-x-100 duration-700 	" alt="" />
          <h3 onClick={()=>handleCategory("tools")} className="mt-2 text-lg font-bold hover:text-[#6bb42f] " >Tools</h3>
        </div></SwiperSlide>
        
       
      </Swiper>
     
    </div>
  );
};

export default Categories;
