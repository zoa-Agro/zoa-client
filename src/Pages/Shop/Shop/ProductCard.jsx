import React, { createContext, useContext, useEffect, useState } from "react";
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
import { CartContext } from "../../../Providers/CartProvider";
import useProducts from "../../../hooks/useProducts";
import ReactPaginate from "react-paginate";

const ProductCard = ({ products }) => {
  const [modalProduct, setModalProduct] = useState(null);
 
  const [productsData]=useProducts();
  const {cart, addToCart } = useContext(CartContext);
  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage] = useState(9);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = productsData.find((product) => product._id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    addToCart(savedCart);
  }, [productsData]);
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }
    addToCart(newCart);
    addToLocalStorage(product._id);
  };
  const modalOpening = (product) => {
    setModalProduct(product);
    document.getElementById("my_modal_5").showModal();
  };
  if (products.length == 0) {
    return <h3>No Products Available</h3>;
  }

  return (
    <div  >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-10">
      {currentItems.map((product) => (
        <div key={product._id} className=" h-fit group border shadow rounded-xl">
          <div className="relative overflow-hidden">
            <img
              className="h-64 w-full object-cover rounded-t-xl"
              src={product?.image}
              alt=""
            />
            <div className="absolute flex flex-col gap-3   items-center right-0  top-2  group-hover:right-3 opacity-0 group-hover:opacity-100 transition-all duration-2000">
              <div   onClick={() => handleAddToCart(product)}
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
            <div
            // onSubmit={(event) => handleCartQuantity(event, product)}
            // action=""
            >
              <div className="flex justify-center  w-3/4 mx-auto    ">
                {/* <input
                  className="w-10 ps-3  bg-base-200 text-black ms-0 font-medium rounded-l-3xl "
                  defaultValue={1}
                  type="number"
                  name="quantity"
                  id=""
                /> */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="rounded-3xl text-white  text-[18px]  font-medium bg-[#6bb42f] py-1 px-3 flex items-center gap-1 cursor-pointer"
                >
                  {" "}
                  <AiOutlineShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Previous"
                renderOnZeroPageCount={null}
              />
      <div>
        <ModalComponent modalProduct={modalProduct}  handleAddToCart={handleAddToCart}/>
      </div>
    </div>
  );
};

export default ProductCard;
