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
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import Cart from "../Pages/Order/Cart";
import useProducts from "../hooks/useProducts";
import cartProductsLoader from "../loaders/cartProductsLoader";
import ProceedToCheckout from "../Pages/Order/ProceedToCheckout";
import PaymentSuccess from "../Pages/Order/PaymentSuccess";
import OrderedProducts from "../Pages/Dashboard/Customer/OrderedProducts";
import PaymentFail from "../Pages/Order/PaymentFail";
import OrderProduct from "../Pages/Dashboard/SellerHome/OrderProduct";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import PaymentHistory from "../Pages/Dashboard/Customer/PaymentHistory";
import AllOrderedProducts from "../Pages/Dashboard/Admin/AllOrderedProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader:cartProductsLoader,
    errorElement: <ErrorPage />,
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
        path: "/blogs",
        element:<Blogs />,
      },
      {
        path: "/about",
        element:<AboutUs />,
      },
      {
        path: "/contact",
        element:<ContactUs />,
      },
      {
        path: "/cart",
        element:<Cart />,
        loader: cartProductsLoader
       
      },
      {
        path: "/checkout",
        element:<PrivateRoutes><ProceedToCheckout /></PrivateRoutes>,
        loader: cartProductsLoader
       
      },
      {
        path: "/payment-success/:tranId",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment-fail",
        element: <PaymentFail />,
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
    errorElement: <ErrorPage />,
    children:[
      //admin dashboard
      {
        path:'/dashboard',
        element:<DashboardHome/>
      },
      {
        path:'admin-home',
        element:<AdminHome/>
      },
      {
        path:'allordered-products',
        element:<AllOrderedProducts/>
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
        path:'order-products',
        element: <OrderProduct/>
      },
      {
        path: 'seller-home',
        element: <SellerHome/>
        
      },
      //customer dashboard route
      {
        path:'ordered-products',
        element: <OrderedProducts
        />
      },
      {
        path:'payment-history',
        element: <PaymentHistory
        />
      }
    ]
  }
]);
export default router;
