import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../../Shop/Shop/ProductCard";


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
         <ProductCard products={plants} />
        </TabPanel>
        <TabPanel>
          <h2>Birds</h2>
        </TabPanel>
        <TabPanel>
          <h2>Fish</h2>
        </TabPanel>

        <TabPanel>
          <ProductCard products={pets}/>
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
     
    </div>
  );
};

export default NewArrivals;
