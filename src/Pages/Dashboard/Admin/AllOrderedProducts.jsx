import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { GiConfirmed } from "react-icons/gi";

const AllOrderedProducts = () => {
  const { user } = useAuth();
  const email = user?.email;
  const [axiosSecure] = useAxiosSecure();
  const { data: orderedProducts = [], refetch } = useQuery({
    queryKey: ["allordered-products", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allordered-products`);
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
              
              <th className="text-center">Picture / Name</th>
              <th className="text-center">Contact</th>
              <th className="text-center">Address</th>
             
            </tr>
          </thead>
          <tbody>
            {orderedProducts.map((product, index) => (
              <tr key={index + 1} className="hover:shadow hover:bg-[#dfffc4] border-b-2">
               
                <td className="">
                    {
                        product?.order.orderedProducts.map(product =>
                           <div className="flex items-center gap-4"> <img className=" mask mask-squircle w-12 h-12 mb-2" src={product.image} alt="" />
                           <div>
                           <h3>{product.name}</h3>
                           <h3>Quantity:{product.quantity}</h3></div></div>
                            )
                    }
                </td>
                <td className="text-center ">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    
                    <div>
                      <div className="font-bold">{product?.order.userName}</div>
                      <h2>{product?.order.phone}</h2>
                    </div>
                  </div>
                </td>
                <td className="text-center ">
                  <h3>{product?.order.address}</h3>
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

export default AllOrderedProducts;
