import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=>(
    <h1>hello</h1>
    );

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Heading />);