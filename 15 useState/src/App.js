import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body";

const App = ()=>{
    return(
        <>
            <Body/>
        </>
    )
}

const Root = ReactDOM.createRoot(
    document.getElementById('root')
);

Root.render(<App />);