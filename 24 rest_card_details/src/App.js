import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Restaurants from "./Restaurants/Restaurants";
import Restaurants_unit from "./Restaurants/Restaurants_unit";
import Error from "./Error";

import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";


 


const App  = ()=>{
    
    

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
    
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
          path: "/About",
          element: <About/>,
        },
        {
          path: "/Contact",
          element: <Contact/>,
        },
        {
          path: "/Restaurants",
          element:<Restaurants/>
        },
        {
          path: "/Restaurants_unit/:Rest_id",
          element: <Restaurants_unit/>
        }
    ]
  }
  
]);

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<RouterProvider router={router} />);