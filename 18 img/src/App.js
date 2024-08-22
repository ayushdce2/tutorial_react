import React from "react";
import ReactDOM from "react-dom/client";
import loading from "./loading.gif";

const App = ()=>{
    return (<><img src={loading} /></>)
}

const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<App/>)