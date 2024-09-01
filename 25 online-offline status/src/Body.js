import { useEffect, useState } from "react";

const Body = ()=>{

    const[status,setStatus]=useState("online");

    useEffect(()=>{

        if(window.addEventListener("offline",()=>{
            setStatus(false);
        }));
        if(window.addEventListener("online",()=>{
            setStatus(true);
        }));

    })

    return(
        <>
            <p>
                {status? "ONLINE" : "OFFLINE"}
            </p>
        </>
    )
}

export default Body;