import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop/Shop";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from '../Pages/Dashboard/ManageProducts/ManageProducts'
import SellerHome from "../Pages/Dashboard/SellerHome/SellerHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element:<Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      //admin dashboard
      {
        path:'admin-home',
        element:<AdminHome/>
      },
      {
        path:'manage-user',
        element:<ManageUser/>
      },
      //seller dashboard
      {
        path: 'add-product',
        element:<AddProduct/>
      },
      {
        path: 'manage-products',
        element: <ManageProducts/>
        
      },
      {
        path: 'seller-home',
        element: <SellerHome/>
        
      }
    ]
  }
]);
export default router;
