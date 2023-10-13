import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {AiOutlineShoppingCart,AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai';
import "react-tabs/style/react-tabs.css";
import ModalComponent from "./ModalComponent";

const NewArrivals = () => {
  const [modalProduct,setModalProduct]=useState(null)
  const modalOpening=(id)=>{
    setModalProduct(id);
    document.getElementById('my_modal_5').showModal();
  }
  return (
    <div className="w-11/12 mx-auto md:w-10/12">
      <h2 className="text-center text-4xl md:mt-20 mb-10">
        <span className="text-green-400 font-extrabold text-5xl">|</span> New
        Arrivals{" "}
        <span className="text-green-400 font-extrabold text-5xl">|</span>
      </h2>

      <Tabs className="text-center">
        <TabList>
          <Tab>Plants & Seeds</Tab>
          <Tab>Birds</Tab>
          <Tab>Pets</Tab>
          <Tab>Fish</Tab>
          <Tab>Food</Tab>
          <Tab>Medicine</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-4 gap-5 ">
            
            <div className=" h-fit group">
              <div className="relative overflow-hidden">
                <img
                  className="h-64 w-full object-cover"
                  src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
                <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Cart">
                   <AiOutlineShoppingCart/>
                  </div>
                  <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Wishlist">
                   <AiOutlineHeart/>
                  </div>
                  <div onClick={()=>modalOpening('dhwqudh')} className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Quick View">
                   <AiOutlineSearch/>
                  </div>
                 
                </div>
              </div>
              <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
              <del className="text-red-700 text-lg">$49</del>
              <p className="text-xl mt-2 ml-1 inline-block">$35</p>
            </div>
            <div className=" h-fit group">
              <div className="relative overflow-hidden">
                <img
                  className="h-64 w-full object-cover"
                  src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
                <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Cart">
                   <AiOutlineShoppingCart/>
                  </div>
                  <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Wishlist">
                   <AiOutlineHeart/>
                  </div>
                  <div onClick={()=>modalOpening('dhwqudh')} className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Quick View">
                   <AiOutlineSearch/>
                  </div>
                 
                </div>
              </div>
              <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
              <del className="text-red-700 text-lg">$49</del>
              <p className="text-xl mt-2 ml-1 inline-block">$35</p>
            </div>
            <div className="h-fit group">
              <div className="relative overflow-hidden">
                <img
                  className="h-64 w-full object-cover"
                  src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
                <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Cart">
                   <AiOutlineShoppingCart/>
                  </div>
                  <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Wishlist">
                   <AiOutlineHeart/>
                  </div>
                  <div onClick={()=>modalOpening('https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')} className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Quick View">
                   <AiOutlineSearch/>
                  </div>
                 
                </div>
              </div>
              <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
              <del className="text-red-700 text-lg">$49</del>
              <p className="text-xl mt-2 ml-1 inline-block">$35</p>
            </div>
            <div className=" h-fit group">
              <div className="relative overflow-hidden">
                <img
                  className="h-64 w-full object-cover"
                  src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                  alt=""
                />
                <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Cart">
                   <AiOutlineShoppingCart/>
                  </div>
                  <div className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Add to Wishlist">
                   <AiOutlineHeart/>
                  </div>
                  <div onClick={()=>modalOpening('dhwqudh')} className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left" data-tip="Quick View">
                   <AiOutlineSearch/>
                  </div>
                 
                </div>
              </div>
              <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
              <del className="text-red-700 text-lg">$49</del>
              <p className="text-xl mt-2 ml-1 inline-block">$35</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      <div>
      <ModalComponent modalProduct={modalProduct}/>
      </div>
    </div>
  );
};

export default NewArrivals;
