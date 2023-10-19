import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";
import ModalComponent from "../../Home/NewArrivals/ModalComponent";
import ShopBanner from "./ShopBanner";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const categoryName = location?.state?.data.categoryName;
    setCategory(categoryName);
  }, []);

  useEffect(() => {
    if (category === "plants") {
      fetch("plants.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    if (category === "animals") {
      fetch("pets.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [category]);
  const handleCategory = (event) => {
    if (event.target.checked) {
      setCategory(event.target.value);
    }
  };
  const handleSubCategory = (event) => {
    if (event.target.checked) {
      console.log(event.target.value);
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
            src="https://prestashop.mahardhi.com/MT07/greensgarden/01/c/31-category_default/plants.jpg"
            alt="Plants"
          />
          <div className="flex justify-between p-5 items-center  ">
            <h3 className="text-3xl font-bold ">
              {category == "plants"
                ? "Plants & Seeds"
                : category == "birds"
                ? "Birds"
                : category == "fish"
                ? "Fish"
                : category == "animals"
                ? "Animals"
                : category == "medicine"
                ? "Medicine"
                : category == "tools"
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
                    value="plants"
                    className="radio radio-success"
                    checked={category === "plants" ? true : false}
                  />
                  Plants & Seeds
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="birds"
                    className="radio radio-success"
                    checked={category === "birds" ? true : false}
                  />
                  Birds
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="fish"
                    className="radio radio-success"
                    checked={category === "fish" ? true : false}
                  />
                  Fish
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="animals"
                    className="radio radio-success"
                    checked={category === "animals" ? true : false}
                  />
                  Animals
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="food"
                    className="radio radio-success"
                    checked={category === "food" ? true : false}
                  />
                  Food
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="medicine"
                    className="radio radio-success"
                    checked={category === "medicine" ? true : false}
                  />
                  Medicine
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name="group1"
                    value="tools"
                    className="radio radio-success"
                    checked={category === "tools" ? true : false}
                  />
                  Tools
                </label>
              </div>

              {category && (
                <h3 className="text-lg font-semibold mt-2">Sub Categories:-</h3>
              )}
              {category == "plants" ? (
                <div
                  onChange={handleSubCategory}
                  className="px-2 space-y-1 border-b pb-3"
                >
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Small plants"
                      className="radio radio-success"
                    />
                    Small plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Flower plants"
                      className="radio radio-success"
                    />
                    Flower plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="Fruits plants"
                      className="radio radio-success"
                    />
                    Fruits plants
                  </label>
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="group2"
                      value="House plants"
                      className="radio radio-success"
                    />
                    House plants
                  </label>
                </div>
              ) : category == "animals" ? (
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
              ) : category == "birds" ? (
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
                category == "fish" && (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {products.map((product) => (
                <div className=" h-fit group border bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      className="h-64 w-full object-cover border-b-2"
                      src={product.image}
                      alt=""
                    />
                    <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
                      <div
                        className=" text-gray-800 text-lg p-3 bg-gray-300 bg-opacity-40  hover:bg-black hover:text-white tooltip tooltip-left"
                        data-tip="Add to Cart"
                      >
                        <AiOutlineShoppingCart />
                      </div>
                      <div
                        className=" text-gray-800 text-lg p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left"
                        data-tip="Add to Wishlist"
                      >
                        <AiOutlineHeart />
                      </div>
                      {/* modal opening button */}
                      <div
                        onClick={() => modalOpening(product)}
                        className=" text-gray-800 text-lg p-3 bg-gray-300 bg-opacity-40 hover:bg-black hover:text-white tooltip tooltip-left"
                        data-tip="Quick View"
                      >
                        <AiOutlineSearch />
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-3 text-lg capitalize text-center">
                    {product.name}
                  </h2>
                  <del className="text-red-700 text-lg">
                    ${(product.price + 5).toFixed(2)}
                  </del>
                  <p className="text-lg mt-2 ml-1 inline-block">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {/* modal for quick view */}
              <ModalComponent modalProduct={modalProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
