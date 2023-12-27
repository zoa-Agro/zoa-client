import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
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
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="overflow-auto">
        <table className=" table-xs md:table-md table-pin-rows w-full mx-auto table-pin-cols">
          {/* head */}
          <thead>
            <tr className="text-[15px] text-white bg-[#6bb42f]">
              <th className="hidden md:block "></th>
              <th className="text-center">Paid Amount</th>
              <th className="text-center">Transaction Id</th>
              <th className="text-center ">Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {orderedProducts.map((product, index) => (
              <tr key={index + 1} className="hover:shadow hover:bg-[#dfffc4]">
                <td className="hidden md:block">{index + 1}</td>
                <td className="text-center ">
                  <div className=" items-center ">
                    {product.order.totalPayable} Tk
                  </div>
                </td>
                <td className="text-center ">
                  <h3>{product?.transactionId}</h3>
                </td>
                <td className="text-center ">
                  <h3>{product?.date}</h3>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
