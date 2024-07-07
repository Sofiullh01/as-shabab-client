import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Nabber from "../Components/Shared/Nabber/Nabber";


const Main = () => {
    return (
        <div>
            <Nabber></Nabber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;