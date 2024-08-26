import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./Body";

import Restaurants from "./Restaurants/Restaurants";
import Restaurants_unit from "./Restaurants/Restaurants_unit";
import Error from "./Error";

import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";


 


const App  = ()=>{
    
    

    return (
        <>
            <Body/>
        </>
    )
    
}


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Body/>,
    errorElement: <Error/>
  },
    {
      path: "/Restaurants",
      element:<Restaurants/>
    },
    {
      path: "/Restaurants_unit/:Rest_id",
      element: <Restaurants_unit/>
    }
  
]);

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<RouterProvider router={router} />);