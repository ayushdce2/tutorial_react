import React, { useState } from "react";
import ReactDom from "react-dom";
import { useState } from "react";

export const Search = ({setfiltered_data,original_data})=>{

const [text,setText]=useState("");

    const searching_text = ()=>{
        // console.log(text,"top level text");

        let filtered_text = original_data.filter((key,index)=>{
            // console.log(key.info.name.includes(text),"text");
            string = key.info.name;
            return (
                string.toLowerCase().includes(text.toLowerCase())
            )
        });
        // console.log(filtered_text,"filtered_text");
        setfiltered_data(filtered_text);

    }

    return(
        <>
            <h1>Search Here</h1>
            <input type="text" placeholder="search" value={text} onChange={(e)=>{setText(e.target.value)}} /> <button onClick={searching_text}>Search Here</button>
            <hr/>    
        </>
    )
}