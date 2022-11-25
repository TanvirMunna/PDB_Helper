import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import PageNotFound from "../../404Page/404Page";
import Home from "../../Home/Home";
import Advertisement from "../../Home/Home/Advertisement/Advertisement";
import Blogs from "../../Home/Home/Blogs/Blogs";
import Myorders from "../../Home/Home/Myorders/Myorders";
import AddProducts from "../../Home/Home/AddProducts/AddProducts";
import Myproducts from "../../Home/Home/MyProducts/Myproducts";
import Categories from "../../Home/Home/Categories/Categories";
import SelectedBrand from "../../SelectedBrand/SelectedBrand";
import Signup from "../../Signup/Signup";
import Login from "../../Signup/Login";
import Dashboard from "../../Dashboard/Dashboard";
import Privaterout from "../Privaterout/Privaterout";

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
                path: '/addProduct',
                element: <Privaterout><AddProducts></AddProducts></Privaterout>
            },
            {
                path: '/myOrders',
                element: <Privaterout><Myorders></Myorders></Privaterout>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myProducts',
                element: <Privaterout><Myproducts></Myproducts></Privaterout>
            },
            {
                path: '/brands',
                element: <Categories></Categories>
            },
            {
                path: '/selectedBrand',
                element: <SelectedBrand></SelectedBrand>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <Privaterout><Dashboard></Dashboard></Privaterout>
            }
        ]
        
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])