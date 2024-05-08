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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../../Layout/DashboardLayout";
import OrderedProducts from "../../OrderedProducts/OrderedProducts";
import User from "../../Dashboard/User/User";
import Worker from "../../Dashboard/Worker/Worker";

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
          <PrivateRoute>
            <AddPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/highlight/:id",
        element: (
          <PrivateRoute>
            <Highlight />
          </PrivateRoute>
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
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/orderedProduct",
        element: (
          <PrivateRoute>
            <OrderedProducts></OrderedProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands",
        element: <Categories></Categories>,
      },
      {
        path: "/selectedBrand/:id",
        element: (
          <PrivateRoute>
            <SelectedBrand></SelectedBrand>
          </PrivateRoute>
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
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <User />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/worker",
        element: (
          <PrivateRoute>
            <Worker />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
