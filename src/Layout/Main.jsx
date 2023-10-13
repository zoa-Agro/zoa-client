import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;