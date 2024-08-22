import React from "react";
import ReactDOM from "react-dom/client";

import Container_child_unit from "./components/Container_child";


const Sample_container  = ()=> {

    return(
        <div>
            <Container_child_unit name={"abc"} class_cat={"1"}/>
            <Container_child_unit name={"def"} class_cat={"2"}/>
            <Container_child_unit name={"ghi"} class_cat={"3"}/>
            <Container_child_unit name={"jkl"} class_cat={"4"}/>
            
        </div>
    )
    

}


const Root = ReactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<Sample_container/>);