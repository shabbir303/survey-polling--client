import { Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import image from '../../assets/fabicon.png'
import { useContext } from 'react';
import { AuthContext } from '../Login/Providers/Authprovider';
import ReactiveButton from 'reactive-button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='max-w-7xl mx-auto'>

            <Navbar fluid rounded className='bg-inherit'>
                <Navbar.Brand href="">
                    <img src={image} className="mr-3 h-6 sm:h-9" alt="" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-teal-900 font-inter">Pulling & Survey</span>
                </Navbar.Brand>
                {user ? <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <img alt='user' src={user?.photoURL} className='rounded-full w-[50px]' />
                        }
                    >
                        <Dropdown.Header className='bg-green-500'>
                            <span className="block text-sm ">{user?.displayName} </span>
                            {/* <span className="block truncate text-sm font-medium">{user?.email} </span> */}
                        </Dropdown.Header>
                        <Dropdown.Item className='bg-cyan-600'>{user?.email} </Dropdown.Item>
                        {/* <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item> */}
                        <Dropdown.Divider />
                        <Dropdown.Item className=''><div className='flex justify-center items-center mx-auto'><ReactiveButton onClick={handleLogOut} href="#" color="red" rounded shadow size="large" idleText="LOGOUT "></ReactiveButton></div></Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div> : <div className="flex md:order-2"> <Link to='/login'><ReactiveButton href="#" color="green" rounded shadow size="large" idleText="LOGIN "></ReactiveButton></Link></div>}
                <Navbar.Collapse>
                    <NavLink></NavLink>
                    <Navbar.Link>
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "white",
                                    // textDecoration: isActive ? "underline" : '',
                                    fontFamily: isActive ? 'mono':'',
                                    fontSize: isActive ?"20px":'',
                                    fontStyle: isActive ?'italic':''
                                };
                            }}
                        >
                            Home
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavLink
                            to="/allSurvey"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "white",
                                    // textDecoration: isActive ? "underline" : '',
                                    fontFamily: isActive ? 'mono':'',
                                    fontSize: isActive ?"20px":'',
                                    fontStyle: isActive ?'italic':''
                                };
                            }}
                        >
                            All Survey
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavLink
                            to="/surveyDetail"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "white",
                                    // textDecoration: isActive ? "underline" : '',
                                    fontFamily: isActive ? 'mono':'',
                                    fontSize: isActive ?"20px":'',
                                    fontStyle: isActive ?'italic':''
                                };
                            }}
                        >
                             Survey Detail
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link >
                    <NavLink
                            to="/membership"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "Red",
                                    // textDecoration: isActive ? "underline" : '',
                                    fontFamily: isActive ? 'mono':'',
                                    fontSize: isActive ?"20px":'18px',
                                    fontStyle: isActive ?'italic':''
                                };
                            }}
                        >
                           Pro Membership
                        </NavLink>
                        </Navbar.Link>
                    <Navbar.Link >
                    <NavLink
                            to="/dashboard"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "blue" : "white",
                                    // textDecoration: isActive ? "underline" : '',
                                    fontFamily: isActive ? 'mono':'',
                                    fontSize: isActive ?"20px":'',
                                    fontStyle: isActive ?'italic':''
                                };
                            }}
                        >
                            Dashboard
                        </NavLink>
                        </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;

