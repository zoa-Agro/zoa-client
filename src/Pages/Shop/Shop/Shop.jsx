import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import ModalComponent from "../../Home/NewArrivals/ModalComponent";
import ShopBanner from "./ShopBanner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { Spinner } from "react-spinners-css";

const Shop = () => {
  const [axiosSecure]=useAxiosSecure()
  const [loading, setLoading] = useState(true);
  const [modalProduct, setModalProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const categoryName = location?.state?.data.categoryName;
    setCategory(categoryName);
    console.log(categoryName)
  }, []);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["all-products",setLoading,category,subCategory,setSubCategory],
    queryFn: async () => {

      let url = `/all-products?category=${category}`;

    if (subCategory) {
      url += `&subCategory=${subCategory}`;
    }
    
    console.log(url)
    
      const res = await axiosSecure.get(url);
      setLoading(false);
      
      return res.data;
    },
  });
  // useEffect(() => {
  //   if (category === "Plants and Seeds") {
  //     fetch("Plants.json")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }
  //   if (category === "animals") {
  //     fetch("pets.json")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }
  // }, [category]);
  const handleCategory = (event) => {
    
    setSubCategory(null)
    if (event.target.checked) {
      ///console.log(event.target.value);
      setCategory(event.target.value);
      refetch()
    }
  };
  const handleSubCategory = (event) => {
   
    if (event.target.checked) {
      setSubCategory(event.target.value);
      
      console.log(event.target.value);
      refetch()
    }
  };
  const modalOpening = (id) => {
    setModalProduct(id);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="bg-base-200">
      <div className="w-11/12 md:w-10/12 mx-auto ">
        <div className="h-12"></div>
        <div className="p-5 shadow mb-10 bg-white">
          <img
          className="object-cover object-center w-full"
            src="https://prestashop.mahardhi.com/MT07/greensgarden/01/c/31-category_default/plants.jpg"
            alt="Plants and Seeds"
          />
          <div className="flex justify-between p-5 items-center  ">
            <h3 className="text-3xl font-bold ">
              {category == "Plants and Seeds"
                ? "Plants & Seeds"
                : category == "Birds"
                ? "Birds"
                : category == "Fish"
                ? "Fish"
                : category == "Animals"
                ? "Animals"
                : category == "Medicine"
                ? "Medicine"
                : category == "Tools"
                ? "Tools"
                : "Shop"}
            </h3>
            <h4 className="text-lg font-semibold">Shop / Home</h4>
          </div>
        </div>

        <div className="md:grid grid-cols-5 mx-auto">
          <div className="col-span-1   ">
            <div className="shadow p-5 bg-white">
              <h3 className="uppercase font-bold text-xl border-b-2  mb-5 ">
                Filter By
              </h3>
              <h3 className="text-lg font-semibold">Categories:-</h3>
              <div
                onChange={handleCategory}
                className="cursor-pointer space-y-1  text-md px-2 pb-2 border-b"
              >
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Plants and Seeds"
                    className="radio radio-success"
                    checked={category === "Plants and Seeds" ? true : false}
                  />
                  Plants & Seeds
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Birds"
                    className="radio radio-success"
                    checked={category === "Birds" ? true : false}
                  />
                  Birds
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Fish"
                    className="radio radio-success"
                    checked={category === "Fish" ? true : false}
                  />
                  Fish
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Animals"
                    className="radio radio-success"
                    checked={category === "Animals" ? true : false}
                  />
                  Animals
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Food"
                    className="radio radio-success"
                    checked={category === "Food" ? true : false}
                  />
                  Food
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Medicine"
                    className="radio radio-success"
                    checked={category === "Medicine" ? true : false}
                  />
                  Medicine
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="Tools"
                    className="radio radio-success"
                    checked={category === "Tools" ? true : false}
                  />
                  Tools
                </label>
              </div>

              {category && (
                <h3 className="text-lg font-semibold mt-2">Sub Categories:-</h3>
              )}
              {category == "Plants and Seeds" ? (
                <div
                  onChange={handleSubCategory}
                  className="px-2 space-y-1 border-b pb-3"
                >
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Small Plants"
                      className="radio radio-success"
                    />
                    Small Plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Flower Plants"
                      className="radio radio-success"
                    />
                    Flower Plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Fruits Plants"
                      className="radio radio-success"
                    />
                    Fruit Plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Indoor Plant"
                      className="radio radio-success"
                    />
                   Indoor Plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Medicine Plants"
                      className="radio radio-success"
                    />
                   Medicine Plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Seeds"
                      className="radio radio-success"
                    />
                    Seeds
                  </label>
                </div>
              ) : category == "Animals" ? (
                <div
                  onChange={handleSubCategory}
                  className="px-2 space-y-1 border-b pb-3 "
                >
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Dog"
                      className="radio radio-success"
                    />
                    Dog
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Cat"
                      className="radio radio-success"
                    />
                    Cat
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Squirrel"
                      className="radio radio-success"
                    />
                    Squirrel
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Rabbit"
                      className="radio radio-success"
                    />
                    Rabbit
                  </label>
                </div>
              ) : category == "Birds" ? (
                <div
                  onChange={handleSubCategory}
                  className="px-2 space-y-1 border-b pb-3 "
                >
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Budgie"
                      className="radio radio-success"
                     
                    />
                    Budgie
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Chicken"
                      className="radio radio-success"
                      
                    />
                    Chicken
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Pigion"
                      className="radio radio-success"
                      
                    />
                    Pigion
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Taki / Pea-Cock"
                      className="radio radio-success"
                     
                    />
                    Taki / Pea-Cock
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Coca Tail"
                      className="radio radio-success"
                    />
                    Coca Tail
                  </label>
                </div>
              ) : (
                category == "Fish" && (
                  <div
                    onChange={handleSubCategory}
                    className="px-2 space-y-1 border-b pb-3  "
                  >
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name="group2"
                        value="Axolot"
                        className="radio radio-success"
                      />
                      Axolot
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name="group2"
                        value="Fighter Fish"
                        className="radio radio-success"
                      />
                      Fighter Fish
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name="group2"
                        value="Guppy / Molly / Platy"
                        className="radio radio-success"
                      />
                      Guppy / Molly / Platy
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name="group2"
                        value="Gold Fish / Koi"
                        className="radio radio-success"
                      />
                      Gold Fish / Koi
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name="group2"
                        value="Crab"
                        className="radio radio-success"
                      />
                      Crab
                    </label>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name="group2"
                        value="Tutle"
                        className="radio radio-success"
                      />
                      Tutle
                    </label>
                  </div>
                )
              )}

              <div className="form-control w-full">
                <label className="label">
                  <span className="text-lg font-bold">Price</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Filter by price
                  </option>
                  <option>Low to High</option>
                  <option>High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:ms-10">
            {/* <ShopBanner /> */}
            <div className="bg-white shadow p-3 mb-8 flex justify-between items-center ">
              <h2>There are 122 product's. </h2>
              <div className="flex items-center gap-2 ">
                <span className="text-lg"> Sort by: </span>
                <select className="select select-bordered">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>
              </div>
            </div>
            <div >
              {loading?  <div className="flex justify-center mt-20">
                <Spinner className="mx-auto " color="#6bb42f"/>
              </div> :<ProductCard products={products}/>}
         
            </div>
            <div>
              {/* modal for quick view */}
              <ModalComponent modalProduct={modalProduct} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
