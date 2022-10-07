import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../page/About";
import Home from "../page/Home";
import Inventory from "../page/Inventory";
import Orders from "../page/Orders";
import Shop from "../page/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch("db.json");
        },
      },
      {
        path: "shop",
        element: <Shop />,
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
    ],
  },
]);
