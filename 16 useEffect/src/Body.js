import { useEffect } from "react";

const Body = ()=>{

    useEffect(()=>{
        fetchData();
    },[])
    fetchData = async ()=>{
        console.log("useeffect works second <br> i.e, useEffect works once componenets are loaded");
        const data = await fetch(
            "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json)

    }

    return (
        <>
            <h1>Worked</h1>
            {console.log("BODY WORKS first")}
        </>
    )
}

export default Body;