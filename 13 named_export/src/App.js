import React from "react";
import ReactDOM from "react-dom";
import { Child,New_Child } from "./Child_component"; //named import

const Main_app = ()=>{
    return(
    <>
        <p>qwerty</p>
        <h2>xyz</h2>
        <Child/>
        <New_Child/>
    </>
    )
}

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<Main_app/>);