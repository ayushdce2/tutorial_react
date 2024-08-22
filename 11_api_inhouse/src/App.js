import react from "react"
import reactDOM from "react-dom"
import Child_unit from "./component/Child_unit.js"
import sample_api from "./component/Api.js"



const Heading = ()=>{
    return(
       <>
        <Child_unit name={sample_api.user1}/>
        <hr/>
        <Child_unit name={sample_api.user2}/>
       </>
        
    )
}

const Root = reactDOM.createRoot(
    document.getElementById("root")
);

Root.render(<Heading/>);