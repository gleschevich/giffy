import React  from "react"
import Gif from "../Gif/Gif"

export default function ListOfGifs({gifs}) {
   

return <>
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-12 gap-3">
  {
    gifs.map(({id,title,url}) => 
    <Gif 
    id ={id} 
    key={id} 
    title={title}  
    url={url} />
    )
  }
  </div>

</> 
}
