import React from "react";
import ReactDOM from "react-dom/client";

import Container_child_unit from "./components/Container_child";


const Sample_container  = ()=> {

    return(
        <div>
            <Container_child_unit name={"abc"}/>
            <Container_child_unit name={"def"}/>
            <Container_child_unit name={"ghi"}/>
            <Container_child_unit name={"jkl"}/>
            
        </div>
    )
    

}


const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<Sample_container/>);