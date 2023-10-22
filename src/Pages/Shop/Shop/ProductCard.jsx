import React from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Spinner } from 'react-spinners-css';

const ProductCard = ({products}) => {
if(products.length==0){
    return <h3>No Products Available</h3>
} 
    return (
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
    );
};

export default ProductCard;