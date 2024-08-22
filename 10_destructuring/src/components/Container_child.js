import React from "react";
import ReactDOM from "react-dom/client";


const Container_child_unit  = (props)=> {
    const{name, class_cat} = props;
    return(
        <div>
            <p>{name} - {class_cat}</p>
        </div>
    )
    

}

export default Container_child_unit;