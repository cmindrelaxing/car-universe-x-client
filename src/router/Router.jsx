import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import About from "../pages/About/About";
import AddProduct from "../pages/AddProduct/AddProduct";
import Details from "../pages/Details/Details";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import MyCart from "../pages/My Cart/MyCart";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://car-universe-x-server-dhgxlr0vn-shakil-ahmeds-projects-043baff6.vercel.app/cars')
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/addProduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: '/updateProduct/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`https://car-universe-x-server-dhgxlr0vn-shakil-ahmeds-projects-043baff6.vercel.app/cars/${params.id}`)
        },
        {
          path: '/cars/:id',
          element: <Details></Details>,
          loader: () => fetch(`https://car-universe-x-server-dhgxlr0vn-shakil-ahmeds-projects-043baff6.vercel.app/cars`)
        },
        {
          path: '/myCart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
          loader: () => fetch('https://car-universe-x-server-dhgxlr0vn-shakil-ahmeds-projects-043baff6.vercel.app/cars')
        },
        {
          path: '/login',
          element: <LoginPage></LoginPage>
        },
        {
          path: '/signup',
          element: <SignupPage></SignupPage>
        }
      ],
    },
]);

export default myCreatedRoute;