import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Restaurants = ()=>{

    const [Allrestaurants, setAllrestaurants] = useState("");
    useEffect(()=>{
        collect_data();
    },[])

    const collect_data= async ()=>{
        try{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data_json = await data.json();
        // console.log(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,"data")
        setAllrestaurants(data_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            
    }catch(err){    console.log(err,"<---56565--->")}
    }


    return Allrestaurants.length==0? <p>Wait restaurants</p>: (

        <>
        <div style={{display:"flex",flexWrap:"wrap",gap:"5px",wordBreak:"break-all"}}>
                       {
                
            Allrestaurants.map((key)=>{
                return  <> 
                    <Link to={"/Restaurants_unit/"+key.info.id} key={key.info.id}>
                    <div style={{border:"1px solid red",width:"100px",minHeight:"100px"}}>
                            {key.info.name}
                                <hr/>
                            {key.info.cuisines.join("---")}
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+key.info.cloudinaryImageId} style={{height:"100px",width:"100%"}}/>
                    </div>
                    </Link>

                </>
            })

        }
        </div>
        </>
    )
}

export default Restaurants;