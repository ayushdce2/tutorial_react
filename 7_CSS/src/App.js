import React from "react";
import ReactDOM from "react-dom/client"
import "./style.css";

const newtitle = {
    color: "green",
    backgroundColor: "yellow"
  };

const title = (
    <>

    <p>External Css</p>
    <p className="title">This is sample paragraph</p>
    
    <hr/>
    <p>Internal Css</p>
    <p style={newtitle}>This is sample paragraph</p>
    
    <hr/>
    <p>Inline Css</p>
    <p style={{color: 'blue',fontWeight:'bold'}}>This is sample paragraph</p>
    
    </>
);

const root= ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(title);