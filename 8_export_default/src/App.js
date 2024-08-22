import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";


const AppLayout  = ()=> {

    return(
        <div className="food_wrap">
            <Header/>
            
        </div>
    )
    

}


const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<AppLayout/>);