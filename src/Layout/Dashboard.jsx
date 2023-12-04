import { Dropdown } from "flowbite-react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import { FaHandPointLeft, FaHandPointRight, FaHandPointUp, FaHandPointer, FaHome, FaList, FaMoneyCheck, FaStackOverflow, FaUsers } from "react-icons/fa";
import useAdmin from "../Pages/hooks/useAdmin";
import useSurveyor from "../Pages/hooks/useSurveyor";
import useProUser from "../Pages/hooks/useProUser";
import { FaTty } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
// import useUser from "../Pages/hooks/useUser";
// import { faUser} from "@fortawesome/fontawesome-svg-core"

const Dashboard = () => {
    // todo:getAdmin value to the database
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    const [isProUser] = useProUser();
    // const [isUser] = useUser();
    console.log(isSurveyor, isAdmin, isProUser);
    return (
        <div className="flex font-cinzel max-w-7xl mx-auto">
            <Helmet>
                <title>Polling | Dashboard</title>
            </Helmet>
            <div className=" w-64 min-h-screen bg-green-500">

                <ul className=" p-[30px] text-[18px] font-[600]">
                    {
                        isAdmin &&
                            <>
                                <h1 className="text-center my-[30px] text-[20px] font-[700] underline text-teal-900">Admin Dashboard</h1>
                                <li className="py-1">
                                    {/* <NavLink to='mangeUsers' className='flex items-center  gap-[5px]' */}
                                    <NavLink to='filterUsers' className='flex items-center  gap-[5px]'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    ><FaList></FaList> Manage Users</NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to='mangeUsers' className='flex items-center  gap-[5px]'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    ><FaUsers></FaUsers> All Users</NavLink>
                                </li >
                                <li className="py-1">
                                    <NavLink to='surveyStatus' className='flex items-center  gap-[5px]'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    ><FaStackOverflow></FaStackOverflow> Survey Status</NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to='paymentDetails' className='flex items-center  gap-[5px]'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    ><FaMoneyCheck/> Payment Details</NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to='surveyResponse' className='flex items-center  gap-[5px]'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    ><FaHandPointRight></FaHandPointRight> Survey Response</NavLink>
                                </li>
                            </> 
                            
                            || isSurveyor &&

                            <>
                            <h1 className="text-center my-[30px] text-[20px] font-[700] underline text-teal-900">Surveyor Dashboard</h1>
                                <li className="py-1">
                                <NavLink to='surveyCreate'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >Survey Creation</NavLink>
                                </li>
                                
                            </>||
                            isProUser &&
                            <>
                            <h1 className="text-center my-[30px] text-[20px] font-[700] underline text-teal-900">Prouser Dashboard</h1>
                                <li className="py-1">
                                <NavLink to='surveyCreate'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >Survey Creation</NavLink>
                                </li>
                                
                            </>
                            ||  
                            <>
                            <h1 className="text-center my-[30px] text-[20px] font-[700] underline text-teal-900">User Dashboard</h1>
                              <li className="py-1">
                                    <NavLink to='payments'
                                        style={({ isActive }) => {
                                            return {
                                                // fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "blue" : "black",
                                                // textDecoration: isActive ? "uppercase" : '',
                                                fontFamily: isActive ? 'mono' : '',
                                                fontSize: isActive ? "20px" : '',
                                                // fontStyle: isActive ?'italic':''
                                            };
                                        }}
                                    >Payment Section</NavLink>
                                </li>
                            </>
                    }

                    <Dropdown.Divider className=" my-4" />
                    <li className="py-1 flex">
                        <NavLink to='/'className='flex items-center justify-center gap-[5px]'
                        >
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li className="py-1 flex">
                        <NavLink to='/' className='flex items-center justify-center gap-[5px]'
                        ><FaUserCog />
                            {/* <FaHome className="text-center"></FaHome> */}
                            About Us</NavLink>
                    </li>
                    <li className="py-1 flex">
                        <NavLink to='/'className='flex items-center justify-center gap-[5px]'
                        ><FaTty />
                            {/* <FaHome className="text-center"></FaHome> */}
                            Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;