export const Top_ratings = (data)=>{
   console.log(data,"top_ratings DATA");

    return (
        <>
           { data = data.data.filter(
                            (key_new)=>{
                                return key_new.info.avgRating < 4;
                            }
            )}
            {console.log(data,"Updated data")}
        </>
    )
}