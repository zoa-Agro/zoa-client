import React, { useState } from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import { FaTrashAlt } from "react-icons/fa";
import {
  removeFromLocalStorage,
} from "../../utilities/LocalStorage";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const Cart = () => {
  const products =useLoaderData()
  
  const [cart, setCart] = useState(products);
  let total = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = product.quantity + quantity;
    total = total + product.price * product.quantity;
  }
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromLocalStorage(id);
  };
  return (
    <div className="w-11/12 md:w-10/12 mx-auto ">
       <Helmet>
        <title>Cart | Green Agro </title>
      </Helmet>
      <PageBanner name="Shopping Cart" previousPage="Home" currentPage="Cart" />

      <div className="md:grid grid-cols-3 gap-10">
        <div className="col-span-2 space-y-6 mb-10 ">
          {cart.map((product) => (
            <div
              key={product._id}
              className="flex  items-center justify-between  shadow rounded-xl p-5 "
            >
              <div className="flex items-center gap-5">
                <img
                  src={product?.image}
                  alt="Movie"
                  className=" w-20 h-20 md:w-32 md:h-32 object-cover object-center rounded-xl"
                />

                <div className=" ">
                  <h2 className="card-title">{product?.name}</h2>
                  <p>Price: {total} Tk</p>
                  <p>Quantity: {product?.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(product._id)}
                className="btn btn-circle text-red-600"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
        <div className="">
          <div className="border p-5 space-y-5 rounded-xl shadow">
            <h3 className="text-3xl space-x-5 ">
              <span>Total Product: </span>
              <span> {quantity}</span>
            </h3>
            <h4 className="text-xl">Total Price: {total} Tk</h4>
            <div className="flex justify-center ">
              <Link to='/checkout' className="btn  bg-[#6bb42f] text-white hover:text-[#6bb42f] rounded-3xl">
                Proceed to CheckOut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
