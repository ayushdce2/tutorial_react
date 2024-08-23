import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
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
          path: "/about",
          element: <About/>,
        }
    ]
  }
  
]);

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<RouterProvider router={router} />);