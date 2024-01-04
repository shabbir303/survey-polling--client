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
import MemberShip from "../Pages/MemberShip/MemberShip";
import Payment from "../Dashboard/User/Payments/Payment";
import AllSurvey from "../Pages/Survey/AllSurvey";
import PaymentDetails from "../Dashboard/Admin/PaymentDetails";
import SurveyStatus from "../Dashboard/Admin/SurveyStatus";
import SurveyDetail from "../Pages/SurveyDetail/SurveyDetail";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SurveyResponse from "../Dashboard/Admin/SurveyResponse";
import Error from "../Pages/Error/Error";
// import { axiosSecure } from "../Pages/hooks/useAxiosSecure";
const route = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
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
            },
            {
                path:'membership',
                element: <PrivateRoute><MemberShip></MemberShip></PrivateRoute>
              },
              {
              path:'allSurvey',
              element: <AllSurvey></AllSurvey>
            },
            {
              path:"surveyDetail/:id",
              element: <PrivateRoute><SurveyDetail></SurveyDetail></PrivateRoute> ,
              loader:()=>fetch('http://localhost:5000/surveys')
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
            {
                path:'surveyCreate',
                element: <PrivateRoute><SurveyCreation></SurveyCreation></PrivateRoute>
            },
            {
              path:'mangeUsers',
              element:  <AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
              path:'filterUsers',
              element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
              path:'payments',
              element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
              path:'paymentDetails',
              element: <AdminRoute><PaymentDetails></PaymentDetails></AdminRoute>
              
            },
            {
              path: 'surveyStatus',
              element: <AdminRoute><SurveyStatus></SurveyStatus></AdminRoute>
            },
            {
              path: 'surveyResponse',
              element: <SurveyResponse></SurveyResponse>
            }
            
        ]
    }
]);

export default route;