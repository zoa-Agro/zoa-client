import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ModalComponent from "./ModalComponent";
import {
  addToLocalStorage,
  getShoppingCart,
} from "../../../utilities/LocalStorage";
import useCartData from "../../../hooks/useCartData";

const ProductCard = ({ products }) => {
  const [modalProduct, setModalProduct] = useState(null);

  const { cart, addToCart } = useCartData();
 
  const handleCartQuantity = (event, product) => {
    event.preventDefault();
    console.log(parseInt(event.target.quantity.value), product);
    const productQuantity = parseInt(event.target.quantity.value);
   
    const storedCart = getShoppingCart();
    let cartQuantity = productQuantity;
    if (storedCart)
    {
      
      for (const id in storedCart) {
        cartQuantity = cartQuantity + storedCart[id] ;
      }
     
    }
    addToCart(cartQuantity);

   
  

    addToLocalStorage(product._id, productQuantity);
  };
  const modalOpening = (product) => {
    setModalProduct(product);
    document.getElementById("my_modal_5").showModal();
  };
  if (products.length == 0) {
    return <h3>No Products Available</h3>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {products.map((product) => (
        <div className=" h-fit group border">
          <div className="relative overflow-hidden">
            <img
              className="h-64 w-full object-cover "
              src={product?.image}
              alt=""
            />
            <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
              <div
                className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40  hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                data-tip="Add to Cart"
              >
                <AiOutlineShoppingCart />
              </div>
              <div
                className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                data-tip="Add to Wishlist"
              >
                <AiOutlineHeart />
              </div>
              <div
                onClick={() => modalOpening(product)}
                className=" text-gray-800 text-xl p-3 bg-gray-300 bg-opacity-40 hover:bg-[#6bb42f] hover:text-white tooltip tooltip-left"
                data-tip="Quick View"
              >
                <AiOutlineSearch />
              </div>
            </div>
          </div>
          <h2 className="mt-3 text-xl capitalize">{product?.name}</h2>
          <del className="text-red-700 text-sm">
            Tk{(product?.price + 5).toFixed(2)}
          </del>
          <p className="text-lg mt-2 ml-1 inline-block text-[#6bb42f] ">
            Tk {product?.price}
          </p>
          <div className="my-5">
            <form
              onSubmit={(event) => handleCartQuantity(event, product)}
              action=""
            >
              <div className="flex justify-center  w-3/4 mx-auto   ">
                <input
                  className="w-1/4 ps-4 bg-base-200 text-black ms-0 font-medium rounded-l-3xl "
                  defaultValue={1}
                  type="number"
                  name="quantity"
                  id=""
                />
                <button className="rounded-r-3xl text-white text-sm  font-medium bg-[#6bb42f] p-3 py-1 flex items-center gap-1 cursor-pointer">
                  {" "}
                  <AiOutlineShoppingCart />
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      ))}
      <div>
        <ModalComponent modalProduct={modalProduct} />
      </div>
    </div>
  );
};

export default ProductCard;
