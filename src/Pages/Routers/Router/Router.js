import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import PageNotFound from "../../404Page/404Page";
import Home from "../../Home/Home";
import Highlighted from "../../Home/Home/Highlighted/Highlighted";
import Blogs from "../../Home/Home/Blogs/Blogs";
import Highlight from "../../Home/Home/Highlight/Highlight";
import AddPost from "../../Home/Home/AddPost/AddPost";
import MyPosts from "../../Home/Home/MyPosts/MyPosts";
import Categories from "../../Home/Home/Categories/Categories";
import SelectedBrand from "../../SelectedBrand/SelectedBrand";
import Signup from "../../Signup/Signup";
import Login from "../../Signup/Login";
import Dashboard from "../../Dashboard/Dashboard";
import Privaterout from "../Privaterout/Privaterout";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Sellers from "../../Dashboard/Sellers/Sellers";
import Buyers from "../../Dashboard/Buyers/Buyers";
import OrderedProducts from "../../OrderedProducts/OrderedProducts";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/highlighted",
        element: <Highlighted />,
      },
      {
        path: "/addPost",
        element: (
          <Privaterout>
            <AddPost />
          </Privaterout>
        ),
      },
      {
        path: "/highlight/:id",
        element: (
          <Privaterout>
            <Highlight />
          </Privaterout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://smart-resale-stall-server.vercel.app/orderedProducts/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/myPost",
        element: (
          <Privaterout>
            <MyPosts />
          </Privaterout>
        ),
      },
      {
        path: "/orderedProduct",
        element: (
          <Privaterout>
            <OrderedProducts></OrderedProducts>
          </Privaterout>
        ),
      },
      {
        path: "/brands",
        element: <Categories></Categories>,
      },
      {
        path: "/selectedBrand/:id",
        element: (
          <Privaterout>
            <SelectedBrand></SelectedBrand>
          </Privaterout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://smart-resale-stall-server.vercel.app/allBrandsProducts/${params.id}`
          ),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Privaterout>
        <DashboardLayout></DashboardLayout>
      </Privaterout>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <Privaterout>
            <Sellers />
          </Privaterout>
        ),
      },
      {
        path: "/dashboard/worker",
        element: (
          <Privaterout>
            <Buyers />
          </Privaterout>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
