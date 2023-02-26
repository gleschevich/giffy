import React  from "react"
import Gif from "../Gif/Gif"

export default function ListOfGifs({gifs}) {
   

return <>
  <div className="columns-2 md:columns-3 xl:columns-4">
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
