import React from "react"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import  {useGifs}  from "../../hooks/useGifs";



export default function Searcher({params}) {
    const {keyword} = params
    const { gifs, setPage} = useGifs({keyword})
   const handleNextPage = () => setPage(prevPage => prevPage+1)

   
    return <>
   
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs}/>
        <button onClick={handleNextPage}>Mostrar más</button>
    </>
} 
    