
  //busca los Gifs segun la keyword
  import {useContext, useEffect, useState } from "react"
  import getGifs from "../services/getGifs"
import GifContext from "../context/GifContext"
  const INITIAL_PAGE=0
  export function useGifs({keyword} = {keyword:null}){
      const { gifs, setGifs} = useContext(GifContext)
      const [loading, setLoading] = useState(false)
      const [page, setPage] = useState(INITIAL_PAGE)
      const keywordToUse = keyword ||  localStorage.getItem('lastKeyword') || 'random'
      useEffect (()=>{
          
          setLoading(true)
          getGifs({keyword:keywordToUse}).then(gifs=> {
              setGifs(gifs)
              setLoading(false)  
              localStorage.setItem('lastKeyword', keywordToUse)   
            } )
            
        },[keyword, keywordToUse, setGifs])
        
      useEffect(() => {
        
        if (page===INITIAL_PAGE) return
        getGifs({keyword:keywordToUse , page})
          .then(nextGifs => {
              setGifs(prevGifs=> prevGifs.concat(nextGifs))
            
      })
      
      }, [keywordToUse, page, setGifs])
        return {loading, gifs,setPage}
    }
