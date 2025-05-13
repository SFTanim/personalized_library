import { Outlet } from "react-router-dom";
import Navbar from './../components/sharedComponents/Navbar';
import Footer from "../components/sharedComponents/Footer";


const Root = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container mx-auto min-h-screen px-4 py-8">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;