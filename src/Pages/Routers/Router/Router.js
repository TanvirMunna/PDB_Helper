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
                element: <AddProducts></AddProducts>
            },
            {
                path: '/myOrders',
                element: <Myorders></Myorders>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myProducts',
                element: <Myproducts></Myproducts>
            },
            {
                path: '/brands',
                element: <Categories></Categories>
            },
            {
                path: '/selectedBrand',
                element: <SelectedBrand></SelectedBrand>
            }
        ]
        
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])