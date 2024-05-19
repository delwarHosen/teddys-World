import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductMenu from "../Pages/ProductMenu/ProductMenu/ProductMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/productMenu',
        element: <ProductMenu></ProductMenu>
      }
    ]
  },
]);
