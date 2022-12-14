import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import User from "../layout/User";
import About from "../page/About";
// import Checkout from "../page/Checkout";
import Details from "../page/Details";
import Home from "../page/Home";
import Inventory from "../page/Inventory";
import Orders from "../page/Orders";
import Login from "../page/user/Login";
import Register from "../page/user/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        // element: <Checkout />,
        element: <Home />,
      },

      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/user",

    element: <User />,
    children: [
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
    ],
  },
]);
