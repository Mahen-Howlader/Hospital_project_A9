import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/UpdateProfile.jsx/UpdateProfile";
import Service from "../Pages/Service/Service";
import Doctor from "../Pages/Doctor/Doctor";
import Detailspage from "../Compnents/Hospitality/Detailspage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : "/register",
            element : <Register></Register>
        },
        {
            path : "/service",
            element : <Service></Service>
        },
        {
            path : "/doctor",
            element : <Doctor></Doctor>
        },
        {
            path : "/updateprofile",
            element : <UpdateProfile></UpdateProfile>
        },
        {
            path : "/details/:id",
            element : <Detailspage></Detailspage>
        }
    ]
  },
]);

export default router;