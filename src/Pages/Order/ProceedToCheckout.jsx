import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProceedToCheckout = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const [userInfo, setUserInfo] = useState([]);
  const [payDisable, setDisable] = useState(true);
  const products = useLoaderData();
  let total = 0;
  let productsPrice = 0;
  let quantity = 0;
  let deliveryCharge = 0;
  const cartProducts=[];

  for (const product of products) {
    quantity = product.quantity + quantity;
    product.delivery_status="Pending";
    cartProducts.push(product);
    productsPrice = productsPrice + product.price * product.quantity;
    if (userInfo.area === "outside dhaka") {
      deliveryCharge = 150;
      total = productsPrice + deliveryCharge;
    } else if (userInfo.area === "inside dhaka") {
      deliveryCharge = 100;
      total = productsPrice + deliveryCharge;
    } else {
      total = productsPrice;
    }
    userInfo.totalPayable = total
  }
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setDisable(false);
    data.orderedProducts = cartProducts;
    setUserInfo(data);
  };

  const handlePayment = ()=>{
    axiosSecure.post("/order", userInfo).then((data) => {
      window.location.replace(data.data.url)

    })

  }
  return (
    <div className="w-11/12 md:w-10/12 mx-auto ">
      <PageBanner name="Checkout" previousPage="Cart" currentPage="Checkout" />
      <div className="md:grid grid-cols-3 gap-10">
        <div className="col-span-2 space-y-6 mb-10 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=" "
            className="border p-10 rounded-xl shadow"
          >
            <h3 className="text-center text-2xl font-semibold">
              Personal Information
            </h3>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text ">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full mb-4 bg-base-200 "
                {...register("userName", { required: true })}
                readOnly
              />
              {errors.userName?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Name is required
                </p>
              )}

              <label className="label">
                <span className="label-text ">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Name"
                defaultValue={user?.email}
                className="input input-bordered w-full mb-4 bg-base-200 "
                {...register("userEmail", { required: true })}
                readOnly
              />
              {errors.userEmail?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Email is required
                </p>
              )}

              <label className="label">
                <span className="label-text ">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your phone number"
                className="input input-bordered w-full mb-4 bg-base-200 "
                {...register("phone", { required: true })}
              />
              {errors.phone?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Phone Number is required
                </p>
              )}
              <label className="label">
                <span className="label-text ">Your Address</span>
              </label>
              <textarea
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered w-full mb-4 bg-base-200 pt-2 h-32 "
                {...register("address", { required: true })}
              />
              {errors.address?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Address is required
                </p>
              )}
              <label className="label">
                <span className="label-text">Area</span>
              </label>
              <select
                className="select select-bordered bg-base-200 mb-4"
                {...register("area", { required: true })}
              >
                <option value="">Choose Area</option>
                <option value="inside dhaka">Inside Dhaka</option>
                <option value="outside dhaka">Outside Dhaka</option>
              </select>
              {errors.area?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Area is required
                </p>
              )}
              <input
                type="submit"
                value="Submit"
                className="btn w-1/2 mx-auto bg-[#6bb42f] text-white hover:text-[#6bb42f] rounded-3xl"
              />
            </div>
          </form>
        </div>
        <div className="">
          <div className="border p-5 space-y-5 rounded-xl shadow">
            <h3 className="text-3xl space-x-2  text-center">
              <span>Total Product: </span>
              <span> {quantity}</span>
            </h3>

            <h4 className="text-xl flex justify-between ">
              {" "}
              <span className="font-bold">Products Price :</span>{" "}
              <span className="font-bold">{productsPrice} Tk</span>
            </h4>
            <h4 className="text-xl flex justify-between ">
              {" "}
              <span className="font-bold">Delivery Charge :</span>{" "}
              <span className="font-bold">{deliveryCharge} Tk</span>
            </h4>
            <h4 className="text-xl flex justify-between ">
              {" "}
              <span className="font-bold">Total Price :</span>{" "}
              <span className="font-bold">{total} Tk</span>
            </h4>

            <div className="flex justify-center ">
              <button onClick={handlePayment}
            
                disabled={payDisable}
                className="btn w-1/2  bg-[#6bb42f] text-white hover:text-[#6bb42f] rounded-3xl"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProceedToCheckout;
