import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../page/About";
import Details from "../page/Details";
import Home from "../page/Home";
import Inventory from "../page/Inventory";
import Orders from "../page/Orders";

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
]);
