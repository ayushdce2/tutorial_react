import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=>(
    <h1>nested Heading</h1>
    );

const Paragraph = ()=> (
    <div>
        <Heading/>
        <p>nested paragraph</p>
    </div>
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Paragraph />);