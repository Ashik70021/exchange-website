import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Component/Root';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import ItemDetails from './Component/ItemDetails';
import Mycart from './Component/Mycart';
import Error from './Component/Error';
import Shop from './Component/Shop';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/itemdetails",
        element: <ItemDetails></ItemDetails>,
      },
      {
        path: "/mycart",
        element: <Mycart></Mycart>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
