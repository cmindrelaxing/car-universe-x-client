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


const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/cars')
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
          element: <AddProduct></AddProduct>
        },
        {
          path: '/updateProduct/:id',
          element: <UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
        },
        {
          path: '/cars/:id',
          element: <Details></Details>,
          loader: () => fetch(`http://localhost:5000/cars`)
        },
        {
          path: '/myCart',
          element: <MyCart></MyCart>,
          loader: () => fetch('http://localhost:5000/cars')
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