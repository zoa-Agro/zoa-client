import {AiOutlineHeart} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {RxDashboard} from 'react-icons/rx'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  
  );
  const profileDropdown=<><div
  tabIndex={1}
  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-300 shadow"
>
  <div className="card-body">
   
    <div className="card-actions">
      
      <Link to="/dashboard" className="btn btn-success btn-block "><RxDashboard/> Dashboard</Link>
      <button onClick={logOut} className="btn btn-success btn-block"><FiLogOut/> Logout</button>
    </div>
  </div>
</div></>
  return (
    <div
      className="navbar 
   md:px-[8%]"
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
        <a className="">
        <img className='w-32' src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
      </div>
      <div className="navbar-end gap-4">
      <div className='text-xl relative'>
            <AiOutlineHeart/>
              <span className="badge badge-sm absolute -top-2 left-3 indicator-item bg-[#6bb42f] text-white border-none">7</span>
          </div>
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
              <span className="badge badge-sm indicator-item bg-[#6bb42f] text-white border-none">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        {user ? (
          user?.photoURL ? (
            <div className='dropdown dropdown-end'>
              <img tabIndex={1}
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
            <div className='dropdown dropdown-end'>
              <img tabIndex={1}
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
