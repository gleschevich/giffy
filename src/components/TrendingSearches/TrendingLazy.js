import React, {Suspense} from "react";
import  {useNearScreen}  from "../../hooks/useNearScreen";

//Import dinamico, es asincrono y devuelve una promesa.
const TrendingSearches = React.Lazy(
    () => import ('./TrendingSearches')
        
)

export default function LazyTrending() {
    
    
    const {isNearScreen, elementRef} = useNearScreen({distance:'0px'})

   
    return <div ref={elementRef}>
    <Suspense fallback={'Estoy cargando....'}>
        {isNearScreen? <TrendingSearches/> : null}
        </Suspense>
    </div>
 
}