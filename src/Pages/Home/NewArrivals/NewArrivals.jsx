import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import "react-tabs/style/react-tabs.css";
import ModalComponent from "./ModalComponent";

const NewArrivals = () => {
  const [plants, setPlants] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const handleDataLoad = () => {
    useEffect(() => {
      fetch("plants.json")
        .then((res) => res.json())
        .then((data) => setPlants(data));
    }, []);
  };
  const modalOpening = (id) => {
    setModalProduct(id);
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div className="w-11/12 mx-auto md:w-10/12">
      <h2 className="text-center text-4xl md:mt-20 mb-10">
        <span className="text-green-400 font-extrabold text-5xl">|</span> New
        Arrivals{" "}
        <span className="text-green-400 font-extrabold text-5xl">|</span>
      </h2>

      <Tabs className="text-center">
        <TabList>
          <Tab onClick={handleDataLoad()}>Plants & Seeds</Tab>
          <Tab>Birds</Tab>
          <Tab>Pets</Tab>
          <Tab>Fish</Tab>
          <Tab>Food</Tab>
          <Tab>Medicine</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-4 gap-5 ">
            {plants.map((plant) => 
              <div className=" h-fit group border">
                <div className="relative overflow-hidden">
                  <img
                    className="h-64 w-full object-cover"
                    src={plant.image}
                    alt=""
                  />
                  <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                    <div
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-black hover:text-white tooltip tooltip-left"
                      data-tip="Add to Cart"
                    >
                      <AiOutlineShoppingCart />
                    </div>
                    <div
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left"
                      data-tip="Add to Wishlist"
                    >
                      <AiOutlineHeart />
                    </div>
                    <div
                      onClick={() => modalOpening("dhwqudh")}
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left"
                      data-tip="Quick View"
                    >
                      <AiOutlineSearch />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 text-xl capitalize">{plant.name}</h2>
                <del className="text-red-700 text-lg">${(plant.price + 5).toFixed(2) }</del>
                <p className="text-xl mt-2 ml-1 inline-block">${plant.price}</p>
              </div>
            )}
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
        <ModalComponent modalProduct={modalProduct} />
      </div>
    </div>
  );
};

export default NewArrivals;
