import data from "../api/Api";
import { Top_ratings } from "./Top_ratings";
import { useState } from "react";

const Body = ()=>{
    
    const [new_data,setNew_data]=useState(data);
    // console.log(new_data,"BODY data");
      
    return (
    <>
        
        <button onClick={()=>{Top_ratings(new_data,setNew_data)}}>Show Worst Ratings</button>
        
        {
            new_data.map( (key,index)=>{
                return (
                    <>
                        <div key={index}>
                        <p>Name -{">"}  {index} - {key.info.name}</p>
                        </div>
                        <div>
                            <p>Ratings - {">"} {key.info.avgRating} </p>
                        </div>
                    </>
                )
            })
        }
        
            
        </>
    )
}

export default Body;