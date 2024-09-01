import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";



import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";

  const Lazy_loading_component = lazy(()=> import("./Lazy_loading_component"))
 


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
          path: "/Lazy_loading_component",
          element:(
            <Suspense fallback={<h1>Loading . . . </h1>}>
              <Lazy_loading_component/>
            </Suspense>
          )
          
        }
    ]
  }
  
]);

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<RouterProvider router={router} />);