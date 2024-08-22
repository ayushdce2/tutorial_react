import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import About from "./About";
import Error from "./Error";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>,
      }
  ]);


const App  = ()=>{
    
    

    return (
        <>
            <Body/>
        </>
    )
    
}

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<RouterProvider router={router} />);