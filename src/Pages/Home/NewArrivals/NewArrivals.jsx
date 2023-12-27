import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../../Shop/Shop/ProductCard";
import useProducts from "../../../hooks/useProducts";

const NewArrivals = () => {
  const [plants, setPlants] = useState([]);
  const [birds, setBirds] = useState([]);
  const [fish, setFish] = useState([]);
  const [pets, setPets] = useState([]);
  const [foods, setFoods] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const [tools, setTools] = useState([]);
  const handleDataLoad = (category) => {
    // use products hook for load all products
    const [products] = useProducts();

    useEffect(() => {
      if (category === "plants") {
        const plants = products.filter(
          (product) => product.category == "Plants and Seeds"
        );
        setPlants(plants.slice(0, 15));
      }
      if (category === "animals") {
        const animals = products.filter(
          (product) => product.category == "Animals"
        );
        setPets(animals.slice(0, 15));
      }
      if (category === "birds") {
        const Birds = products.filter((product) => product.category == "Birds");
        setBirds(Birds.slice(0, 15));
      }
      if (category === "foods") {
        const Foods = products.filter((product) => product.category == "Foods");
        setFoods(Foods.slice(0, 15));
      }
      if (category === "fish") {
        const Fish = products.filter((product) => product.category == "Fish");
        setFish(Fish.slice(0, 15));
      }
      if (category === "medicines") {
        const Medicines = products.filter(
          (product) => product.category == "Medicines"
        );
        setMedicine(Medicines.slice(0, 15));
      }
      if (category === "tools") {
        const Tools = products.filter((product) => product.category == "Tools");
        setTools(Tools.slice(0, 15));
      }
    }, [category, products]);
  };
 
  return (
    <div className="w-11/12 mx-auto md:w-10/12 mt-20 ">
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
        <TabList className="mb-10">
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
        <ProductCard products={birds} />
        </TabPanel>
        <TabPanel>
        <ProductCard products={fish} />
        </TabPanel>
        <TabPanel>
          <ProductCard products={pets} />
        </TabPanel>
        <TabPanel>
        <ProductCard products={foods} />
        </TabPanel>
        <TabPanel>
        <ProductCard products={medicine} />
        </TabPanel>
        <TabPanel>
        <ProductCard products={tools} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default NewArrivals;
