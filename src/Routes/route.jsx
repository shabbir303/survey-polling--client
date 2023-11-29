import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Dashboard from "../Layout/Dashboard";
import SurveyCreation from "../Dashboard/SurveyCreation";
import ManageUser from "../Dashboard/Admin/ManageUser";
import AllUsers from "../Dashboard/Admin/AllUsers";
const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'surveyCreate',
                element: <SurveyCreation></SurveyCreation>
            },
            {
              path:'mangeUsers',
              element: <ManageUser></ManageUser>
            },
            {
              path:'filterUsers',
              element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default route;