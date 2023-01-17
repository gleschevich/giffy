import React, { useContext } from "react"
import GifContext from '../../context/GifContext'
import Gif from "../../components/Gif/Gif"

export default function Detail({params}) {
    const {gifs} =  useContext(GifContext)
   
    const gif = gifs.find(singleGif => singleGif.id ===params.id)
    console.log(gif)
    return <Gif {...gif} />

      
} 
    