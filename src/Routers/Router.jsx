import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/UpdateProfile.jsx/UpdateProfile";
import Service from "../Pages/Service/Service";
import Doctor from "../Pages/Doctor/Doctor";
import Detailspage from "../Compnents/Hospitality/Detailspage";
import Profile from "../Pages/Profile/Profile";
import NotFount from "../Pages/NotFount/NotFount";
import Privaterouter from "../PrivateRouter.jsx/Privaterouter";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement: <NotFount></NotFount>,
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
            element :<Register></Register>
        },
        {
            path : "/doctor",
            element : <Privaterouter><Doctor></Doctor></Privaterouter> ,
            loader: async () => {
                return fetch("/doctor.json")
              },
        },
        {
            path : "/updateprofile",
            element : <Privaterouter><UpdateProfile></UpdateProfile></Privaterouter>
        },
        {
            path : "/profile",
            element : <Privaterouter><Profile></Profile></Privaterouter>
        },
        {
            path : "/details/:id",
            element :<Privaterouter><Detailspage></Detailspage></Privaterouter> 
        }
    ]
  },
]);

export default router;