import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Navbar/Header";
import Footer from "../Pages/Footer/Footer";
import bg from "../assets/surveyBg.jpg"

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')||location.pathname.includes('register');
    const bgClass = noHeaderFooter? "h-screen " :"";
    return (
        <div className={`bg-cover bg-fixed bg-black bg-blend-overlay bg-opacity-70 ${bgClass}`} style={{backgroundImage:`url(${bg})`}}>
            {noHeaderFooter||<Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;