import {Api} from "./Utilities";
import { useState,useEffect } from "react";
import loading from "./asset/loading.gif";

const Body = ()=>{
    const [new_data,setNew_data]=useState(""); //data variable has custom api, original api is located in useEffect

    useEffect(
        ()=>{
            fetchData();
        },[]
    );
    
    const fetchData = async ()=>{
        const response = await fetch(Api);
        const data_json = await response.json();
        // console.log(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setNew_data(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    
    return new_data.length === 0? ( <img src={loading}/>) : (
        <>
            
               { new_data.map((key,index)=>{
                    return <>
                                <div key={index} >
                                    <h3>id - {key.info.id}</h3>
                                    <p>Name - {key.info.name}</p>
                                    <br/>
                                </div>
                            </> 
                })
            }
            

        </>
    )
}

export default Body;