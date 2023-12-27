import { AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import logo from "../../assets/images/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  deleteShoppingCart,
} from "../../utilities/LocalStorage";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { FaTrashAlt } from "react-icons/fa";
import useSeller from "../../hooks/useSeller";
import useAdmin from "../../hooks/useAdmin";

const Navbar = ({ products }) => {
  const { user, logOut } = useAuth();
  const { addToCart, cart } = useContext(CartContext);
  const [cartData, setCartData] = useState(cart);

  useEffect(() => {
    if (cart.length == 0) {
      setCartData(products);
    } else {
      setCartData(cart);
    }
  }, [products, cart]);

  let total = 0;
  let quantity = 0;
  for (const product of cartData) {
    quantity = product.quantity + quantity;
    total = total + product.price * product.quantity;
  }
  const handleClearCart = () => {
    addToCart([]);
    deleteShoppingCart();
  };
 // const link = isAdmin ? '/dashboard/manage-user' :isSeller? '/dashboard/manage-products':'/dashboard/ordered-products';

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  const profileDropdown = (
    <>
      <div
        tabIndex={1}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-300 shadow"
      >
        <div className="card-body">
          <div className="card-actions">
            <Link to={'/dashboard'} className="btn btn-success btn-block ">
              <RxDashboard /> Dashboard
            </Link>
            <button onClick={logOut} className="btn btn-success btn-block">
              <FiLogOut /> Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div
      className="navbar 
   md:px-[8%] border-b "
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
          >
            {navItems}
          </ul>
        </div>
        <Link to='/' className="">
          <img className="w-20" src={logo} alt="" />
         
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        {/* <div className="text-xl relative">
          <AiOutlineHeart />
          <span className="badge badge-sm absolute -top-2 left-3 indicator-item bg-[#6bb42f] text-white border-none">
            7
          </span>
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-[#6bb42f] text-white border-none">
                {quantity}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                Selected Items: {quantity}
              </span>
              <span className="text-lg ">
                Total: <span className="text-[#6bb42f]">{total} Tk</span>
              </span>
              <div className="card-actions">
                <button
                  onClick={handleClearCart}
                  className="btn btn-outline border-red-600 text-red-600 btn-block"
                >
                  Clear Cart <FaTrashAlt />
                </button>
                <Link
                  to="/cart"
                  className="btn bg-[#6bb42f] border-[#6bb42f] btn-block"
                >
                  Review Order{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {user ? (
          user?.photoURL ? (
            <div className="dropdown dropdown-end">
              <img
                tabIndex={1}
                className="w-10 h-10 rounded-full cursor-pointer"
                data-toggle="tooltip"
                title={user?.displayName}
                placement="bottom"
                src={`${user?.photoURL}`}
                alt=""
              />
              {profileDropdown}
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <img
                tabIndex={1}
                className="w-10 h-10 rounded-full cursor-pointer"
                data-toggle="tooltip"
                title={user?.displayName}
                placement="bottom"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1685422406~exp=1685423006~hmac=e59b31bb2d641320f0cbcf5687b1c566606e735e651c1a9963ef78acdf217c56"
                alt=""
              />
              {profileDropdown}
            </div>
          )
        ) : (
          <>
            <Link
              className="btn bg-[#0F7BF2] text-white hover:text-black border border-[#0F7BF2] hover:border-[#0F7BF2]"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
