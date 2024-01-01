import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import ShopBanner from "./ShopBanner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { Spinner } from "react-spinners-css";
import PageBanner from "../../../Shared/PageBanner/PageBanner";
import { Helmet } from "react-helmet";

const Shop = () => {
  const [axiosSecure] = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const categoryName = location?.state?.data.categoryName;
    setCategory(categoryName);
  }, []);
  const { data: products = [], refetch } = useQuery({
    queryKey: [
      "all-products",
      setLoading,
      category,
      subCategory,
      setSubCategory,
      sortDirection,
    ],
    queryFn: async () => {
      let url = `/all-products?category=${category}&sortDirection=${sortDirection}`;

      if (subCategory) {
        url += `&subCategory=${subCategory}`;
      }

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
    setSubCategory(null);
    if (event.target.checked) {
      ///console.log(event.target.value);
      setCategory(event.target.value);
      refetch();
    }
  };
  const handleSubCategory = (event) => {
    if (event.target.checked) {
      setSubCategory(event.target.value);
      refetch();
    }
  };
  const handleProductByPrice = (event) => {
    setSortDirection(event.target.value);
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto ">
       <Helmet>
        <title>Shop | Green Agro </title>
      </Helmet>
      <div className="h-12"></div>
      <PageBanner name={category} previousPage="Home" currentPage="Shop" />
      {/* <div className="p-5 shadow-xl mb-10 bg-white">
          <img
          className="object-cover object-center w-full h-52"
            src="https://img.freepik.com/free-photo/elevated-view-yellow-goldenrods-solidago-gigantea-limonium-flowers-wooden-backdrop_23-2148066403.jpg?w=900&t=st=1698314898~exp=1698315498~hmac=f583fd34c015d7ac8da7851020eda666e5943a0964402bb3d8e0e1fb3c7571d0"
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
        </div> */}

      <div className="md:grid grid-cols-5 mx-auto">
        <div className="col-span-1   ">
          <div className="shadow p-5 bg-white border">
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
                  value="Foods"
                  className="radio radio-success"
                  checked={category === "Foods" ? true : false}
                />
                Food
              </label>
              <label className="flex gap-2">
                <input
                  type="radio"
                  name="group1"
                  value="Medicines"
                  className="radio radio-success"
                  checked={category === "Medicines" ? true : false}
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
                    value="Fruit Plants"
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
              <select
                onChange={handleProductByPrice}
                className="select select-bordered"
              >
                <option disabled selected>
                  Filter by price
                </option>
                <option value="low to high">Low to High</option>
                <option value="high to low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:ms-10">
          {/* <ShopBanner /> */}
          <div className="bg-white shadow border p-3 mb-8 flex justify-between items-center ">
            <h2>There are {products.length} product's. </h2>
            <div className="flex items-center gap-2 ">
              <span className="text-lg"> Sort by: </span>
              <select
                onChange={handleProductByPrice}
                className="select select-bordered"
              >
                <option disabled selected>
                  Choose
                </option>
                <option value="low to high">Price, low to high</option>
                <option value="high to low">Price, high to low</option>
              </select>
            </div>
          </div>
          <div>
            {loading ? (
              <div className="flex justify-center mt-20">
                <Spinner className="mx-auto " color="#6bb42f" />
              </div>
            ) : (
              <ProductCard products={products} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
