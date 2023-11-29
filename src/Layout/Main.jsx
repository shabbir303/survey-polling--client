import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Navbar/Header";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')||location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooter||<Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;