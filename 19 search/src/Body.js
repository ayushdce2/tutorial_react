import {Api} from "./Utilities";
import { useState,useEffect } from "react";
import loading from "./asset/loading.gif";
import {Search} from "./Search";

const Body = ()=>{
    const [filtered_data,setfiltered_data]=useState([]); //for filtered data

    const [original_data,setOriginal_data]=useState([]); //original data
    // console.log(original_data,"original_data2");
    useEffect(
        ()=>{
            fetchData();
        },[]
    );
    
    const fetchData = async ()=>{
        const response = await fetch(Api);
        const data_json = await response.json();
        // console.log(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setOriginal_data(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfiltered_data(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        // console.log(original_data,"original_data1");
    }
    // console.log(original_data,"original_data");
    
    return filtered_data.length === 0? ( <img src={loading}/>) : (
        <>
            <Search setfiltered_data={setfiltered_data} original_data={original_data}/>
               { filtered_data.map((key,index)=>{
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