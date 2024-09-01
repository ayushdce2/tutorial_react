import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./Body";



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
    element: <Body/>
  }
  
]);

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<RouterProvider router={router} />);