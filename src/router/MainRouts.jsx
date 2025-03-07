import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";

import AccountDashboard from "../component/account/AccountDashboard";
import AccountBilling from "../component/account/AccountBilling";
import AccountLayout from "./layout/AccountLayout";
import Home from "../component/Home";

const routers=[
    {
        path:'/',
        element:<Home/>,
    },  
    {
        path:'/account',
        element:<AccountLayout/>,
        children:[
            {
                index:'true',
                //path:'dashboard',
                element:<AccountDashboard/>
            },
            {
                path:'dashboard', 
                element:<AccountDashboard/>
            },
            {
                path:'billing',
                element:<AccountBilling/>
            }
        ]
    }
]

const router=createBrowserRouter(routers)
export default router

