import React from "react";
import { FaHome, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { GiConfirmed, GiTeacher, GiWallet } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { NavLink, Link, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { BsDatabaseFillAdd } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Dashboard = () => {
   const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();
   const [isSeller] = useSeller();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-neutral w-full drawer-button lg:hidden">
          <RiMenuUnfoldFill className="text-2xl"></RiMenuUnfoldFill>
        </label>
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="menu  md:w-80 h-full text-lg font-medium bg-[#8ac559]  text-base-content">
          <div className=" bg-white  flex justify-between items-center p-2 rounded md:px-5 mb-5">
            <div>
            <img className=" w-20 md:w-32" src={logo} alt="" />
            <p className="text-xs md:text-sm ">Zone of Agriculture</p>
            </div>
            {/* <div>
              <span className="px-0 text-xs  md:text-2xl tracking-[0.18rem] font-extrabold ">
                Athlete<span className="text-purple-600">Xcel</span>
              </span>
            </div> */}
            <div className="">
            {
              user?.photoURL?  <img
              className="h-16 rounded-full object-cover cursor-pointer  object-center"
              src={user?.photoURL}
              data-toggle="tooltip"
              title={user?.displayName}
              placement="bottom"
              alt=""
            />: <img 
              className=" w-16 rounded-full cursor-pointer"
              data-toggle="tooltip"
              title={user?.displayName}
              placement="bottom"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1685422406~exp=1685423006~hmac=e59b31bb2d641320f0cbcf5687b1c566606e735e651c1a9963ef78acdf217c56"
              alt=""
            />
            }
           
          </div>
          </div>
          
          <div>
            {" "}
            <ul>
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/admin-home">
                      <FaHome /> Admin Home
                    </NavLink>
                  </li>
                 
                  <li>
                    <NavLink to="/dashboard/manage-user">
                      <MdManageAccounts /> Manage Users
                    </NavLink>
                  </li>
                </>
              ) : isSeller ? (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard/seller-home">
                      <FaHome /> Seller Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/add-product">
                      <BsDatabaseFillAdd /> Add a Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manage-products">
                      <SiGoogleclassroom /> Manage Products
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard/Student-home">
                      <FaHome /> User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/bookedclass">
                      <FaShoppingCart/> My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/enrollclass">
                      <GiConfirmed /> Ordered Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="dashboard/payment-history">
                      <GiWallet /> Payment History
                    </NavLink>
                  </li>
                </>
              )}
              <div className="divider before:bg-white after:bg-white"></div>
              <li>
                <Link to="/">
                  {" "}
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <GiTeacher /> Shop
                </Link>
              </li>
             
              <li>
                <Link onClick={logOut} to="/">
                  <FaSignOutAlt /> Sign Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
