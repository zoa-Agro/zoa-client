import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const products=useLoaderData()
    return (
        <div>
            <Navbar products={products}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;