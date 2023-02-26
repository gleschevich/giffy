import  { useEffect, useState } from "react";
import getPopularGifs from "../../services/getPopularGifs";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])
    useEffect(()=>{
        getPopularGifs() 
            .then(setTrends)
            
        
    },[])
    
    return (
        <>  
            <div className="grid grid-cols-7 gap-2">
            {
                trends.map((trend)=>
                <div className="bg-sky-600 hover:bg-sky-900 rounded-md text-white font-bold shadow-lg">{trend}</div>
                )
            }
        
        </div>

        </>
    )
    
}


