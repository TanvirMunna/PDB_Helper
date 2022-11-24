import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import Advertisement from "../../Home/Home/Advertisement/Advertisement";
import Blogs from "../../Home/Home/Blogs/Blogs";
import Myorders from "../../Home/Home/Myorders/Myorders";
import MyProducts from "../../Home/Home/MyProducts/MyProducts";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/advertisement',
                element: <Advertisement></Advertisement>
            },
            {
                path: '/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/myOrders',
                element: <Myorders></Myorders>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
        
    }
])