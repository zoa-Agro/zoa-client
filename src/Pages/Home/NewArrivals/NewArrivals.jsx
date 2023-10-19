import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import "react-tabs/style/react-tabs.css";
import ModalComponent from "./ModalComponent";

const NewArrivals = () => {
  const [plants, setPlants] = useState([]);
  const [pets, setPets] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const handleDataLoad = (category) => {
    useEffect(() => {
      if (category === "plants") {
        fetch("plants.json")
          .then((res) => res.json())
          .then((data) => setPlants(data));
      }
      if (category === "animals") {
        fetch("pets.json")
          .then((res) => res.json())
          .then((data) => setPets(data));
      }
    }, []);
  };
  const modalOpening = (product) => {
    setModalProduct(product);
    document.getElementById("my_modal_5").showModal();
  };
  return (
    <div className="w-11/12 mx-auto md:w-10/12 mt-20">
      <h2 className="text-center font-medium text-3xl  md:text-4xl mb-10">
        <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">
          |
        </span>{" "}
        New Arrivals{" "}
        <span className="text-[#6bb42f] font-extrabold text-3xl md:text-5xl">
          |
        </span>
      </h2>

      <Tabs className="text-center text-lg font-semibold">
        <TabList>
          <Tab onClick={handleDataLoad("plants")}>Plants & Seeds</Tab>
          <Tab onClick={handleDataLoad("birds")}>Birds</Tab>
          <Tab onClick={handleDataLoad("fish")}>Fish</Tab>
          <Tab onClick={handleDataLoad("animals")}>Animals</Tab>
          <Tab onClick={handleDataLoad("foods")}>Foods</Tab>
          <Tab onClick={handleDataLoad("medicines")}>Medicines</Tab>
          <Tab onClick={handleDataLoad("tools")}>Tools</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {plants.map((plant) => (
              <div className=" h-fit group border">
                <div className="relative overflow-hidden">
                  <img
                    className="h-64 w-full object-cover "
                    src={plant.image}
                    alt=""
                  />
                  <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                    <div
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                      data-tip="Add to Cart"
                    >
                      <AiOutlineShoppingCart />
                    </div>
                    <div
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                      data-tip="Add to Wishlist"
                    >
                      <AiOutlineHeart />
                    </div>
                    <div
                      onClick={() => modalOpening(plant)}
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                      data-tip="Quick View"
                    >
                      <AiOutlineSearch />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 text-xl capitalize">{plant.name}</h2>
                <del className="text-red-700 text-sm">
                  Tk{(plant.price + 5).toFixed(2)}
                </del>
                <p className="text-lg mt-2 ml-1 inline-block text-[#6bb42f] ">
                  Tk {plant.price}
                </p>
                <div className="my-5">
                  <form action="">
                    <div className="flex justify-center  w-3/4 mx-auto   ">
                      <input
                        className="w-1/4 ps-4 bg-base-200 text-black ms-0 font-medium rounded-l-3xl "
                        defaultValue={1}
                        type="number"
                        name=""
                        id=""
                      />
                      <button className="rounded-r-3xl text-white text-sm  font-medium bg-[#6bb42f] p-3 py-1 flex items-center gap-1 cursor-pointer">
                        {" "}
                        <AiOutlineShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Birds</h2>
        </TabPanel>
        <TabPanel>
          <h2>Fish</h2>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-4 gap-5 ">
            {pets.map((pet) => (
              <div className=" h-fit group border">
                <div className="relative overflow-hidden">
                  <img
                    className="h-64 w-full object-cover"
                    src={pet.image}
                    alt=""
                  />
                  <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                    <div
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                      data-tip="Add to Cart"
                    >
                      <AiOutlineShoppingCart />
                    </div>
                    <div
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                      data-tip="Add to Wishlist"
                    >
                      <AiOutlineHeart />
                    </div>
                    <div
                      onClick={() => modalOpening(pet)}
                      className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                      data-tip="Quick View"
                    >
                      <AiOutlineSearch />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 text-xl capitalize">{pet.name}</h2>
                <del className="text-red-700 text-sm">
                  Tk{(pet.price + 5).toFixed(2)}
                </del>
                <p className="text-lg mt-2 ml-1 inline-block text-[#6bb42f] ">
                  Tk {pet.price}
                </p>
                <div className="my-5">
                  <form action="">
                    <div className="flex justify-center  w-3/4 mx-auto   ">
                      <input
                        className="w-1/4 ps-4 bg-base-200 text-black ms-0 font-medium rounded-l-3xl "
                        defaultValue={1}
                        type="number"
                        name=""
                        id=""
                      />
                      <button className="rounded-r-3xl text-white text-sm  font-medium bg-[#6bb42f] p-3 py-1 flex items-center gap-1 cursor-pointer">
                        {" "}
                        <AiOutlineShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>foods</h2>
        </TabPanel>
        <TabPanel>
          <h2>Medicines</h2>
        </TabPanel>
        <TabPanel>
          <h2>Tools</h2>
        </TabPanel>
      </Tabs>
      <div>
        <ModalComponent modalProduct={modalProduct} />
      </div>
    </div>
  );
};

export default NewArrivals;
