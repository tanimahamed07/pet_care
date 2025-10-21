import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import HomePage from "../pages/Home/HomePage";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
        {
            index: true,
            loader: () => fetch('/care.json'),            
            element: <HomePage/>
        },
        {
            path: '/details/:id',
            loader: () => fetch('/care.json'),
            element: <ServiceDetails></ServiceDetails>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
  },
]);