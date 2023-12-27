import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteShoppingCart } from "../../utilities/LocalStorage";
import Swal from "sweetalert2";
import { CartContext } from "../../Providers/CartProvider";

const PaymentSuccess = () => {
  const { tranId } = useParams();

  const { addToCart, cart } = useContext(CartContext);
  useEffect(() => {
    if (tranId) {
      deleteShoppingCart();
      addToCart([]);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, []);
  return (
    <div className="text-center my-20 space-y-2">
      <h1 className="text-[#6bb42f] text-4xl">Payment Successful</h1>
      <h4>Transaction Id: {tranId}</h4>
    
      <Link to={"/dashboard/ordered-products"} className="btn bg-[#6bb42f]">
        Ordered Products
      </Link>
      <br />
      Click to see ordered products
    </div>
  );
};

export default PaymentSuccess;
