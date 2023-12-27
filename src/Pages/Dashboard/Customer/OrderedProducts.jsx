import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxPencil2 } from "react-icons/rx";

const OrderedProducts = () => {
  const { user } = useAuth();
  const email = user?.email;
  const [axiosSecure] = useAxiosSecure();
  const { data: orderedProducts = [], refetch } = useQuery({
    queryKey: ["ordered-products", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ordered-products?email=${email}`);
      return res.data;
    },
  });
  const orderProductsArray = [];
  orderedProducts.map((p) => {
    const products = p.order.orderedProducts;
  
    products.map((product, index) => {
  
      // Push the product name into the array
      orderProductsArray.push(product);
    });
  });

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="overflow-auto">
        <table className=" table-xs md:table-md table-pin-rows w-full mx-auto table-pin-cols">
          {/* head */}
          <thead>
            <tr className="text-[15px] text-white bg-[#6bb42f]">
              <th className="hidden md:block "></th>
              <th className="text-center">Picture / Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Price</th>
              <th className="text-center ">Delivery Status</th>
            </tr>
          </thead>
          <tbody>
          {orderProductsArray.map((product, index) => (
            <tr key={index+1} className="hover:shadow hover:bg-[#dfffc4]">
              <td className="hidden md:block">{index + 1}</td>
              <td className="text-center ">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 md:w-16 h-12 md:h-16">
                      <img
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product?.name}</div>
                  </div>
                </div>
              </td>
              <td className="text-center ">
                <h3>{product?.quantity}</h3>
              </td>
              <td className="text-center " >Tk {product?.price * product?.quantity}</td>
              <td className="flex items-center mt-2 md:mt-4 justify-center ">
               <h1>{product.delivery_status}</h1>
              
              </td>
              {/* modal for update product */}
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderedProducts;
