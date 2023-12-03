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
// import { axiosSecure } from "../Pages/hooks/useAxiosSecure";
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
            },
            {
                path:'membership',
                element: <MemberShip></MemberShip>
              },
              {
              path:'allSurvey',
              element: <AllSurvey></AllSurvey>
            },
            {
              path:"surveyDetail/:id",
              element: <SurveyDetail></SurveyDetail>,
              loader:()=>fetch('http://localhost:5000/surveys')
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
            },
            {
              path:'payments',
              element: <Payment></Payment>
            },
            {
              path:'paymentDetails',
              element: <PaymentDetails></PaymentDetails>
            },
            {
              path: 'surveyStatus',
              element: <SurveyStatus></SurveyStatus>
            }
            
        ]
    }
]);

export default route;