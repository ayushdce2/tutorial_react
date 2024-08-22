import data from "../api/Api";
import { Top_ratings } from "./Top_ratings";

const Body = ()=>{
    console.log(data,"BODY data");
      
    return (
    <>
        <button onClick={()=>{Top_ratings({data})}}>Show Top Ratings</button>
        
        {
            data.map( (key,index)=>{
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