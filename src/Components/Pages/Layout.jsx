import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;