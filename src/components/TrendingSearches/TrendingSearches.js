import React, { useEffect, useState } from "react";
import getPopularGifs from "../../services/getPopularGifs";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(()=>{
        getPopularGifs() 
            .then(setTrends)
            
    },[])
    return trends
}


