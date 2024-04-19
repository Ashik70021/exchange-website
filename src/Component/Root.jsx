import { Outlet } from "react-router-dom";
import Navabr from "./Navabr";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;