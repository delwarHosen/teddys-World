import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ProductMenu from "../Pages/ProductMenu/ProductMenu/ProductMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes"
import ContactPage from "../Pages/ContactPage/ContactPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import PaymentCart from "../Pages/Dashboard/PaymentCart/PaymentCart";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
        path: 'productMenu',
        element: <ProductMenu></ProductMenu>
      },
      {
        path: "order/:category",
        element: <Order></Order>
      },
      {
        path: "contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoutes> <Secret></Secret></PrivateRoutes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
    children: [
      {
        path: 'carts',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <PaymentCart></PaymentCart>
      },
      {
        path: "pahmentHistory",
        element: <PaymentHistory></PaymentHistory>
      }
      ,
      // admin
      {
        path: 'addProduct',
        element: <AdminRoutes><AddProduct></AddProduct></AdminRoutes>
      },
      {
        path: 'manageProduct',
        element: <AdminRoutes><ManageProduct></ManageProduct></AdminRoutes>
      },
      {
        path: 'updateProduct/:id',
        element: <AdminRoutes><UpdateProduct></UpdateProduct></AdminRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "allUser",
        element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
      }
    ]
  }
]);
