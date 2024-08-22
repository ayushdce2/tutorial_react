export const Top_ratings = (new_data,setNew_data)=>{
   
    
   
   let new_data_filtered;

        new_data_filtered = new_data.filter(
            (key_new)=>{
                return key_new.info.avgRating < 4;
        })

        // console.log(new_data,"top_ratings props");
        // console.log(new_data_filtered,"top_ratings new_data_filtered");    
        setNew_data( new_data_filtered ); 
            
        

}