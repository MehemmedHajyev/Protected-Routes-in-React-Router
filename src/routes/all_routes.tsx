import Login from "../pages/Login/Login";
import Regions from "../pages/Regions";
import Register from "../pages/Register";

import { Navigate } from "react-router-dom";


//All Routesin Data Tipleri

interface RouteType {
    path: string;
    component: React.ReactElement;
}



// /Public Routes
export const publickRoutes: RouteType = [
    {
        path: "/login",
        component: <Login />
    },

    {
        path: "/register",
        component: <Register />
    },

]


// / /Private Routes

export const protectedRoutes: RouteType[] = [
    {
        path: "/",
        component: <Navigate to="/default" />
    },
    {
        path: "/regions",
        component: <Regions />
    },
    {
        path: "/*",
        component: <Navigate to="/" />
    }

]