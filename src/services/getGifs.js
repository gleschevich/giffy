import {APIKEY,LIMIT} from './config'

export default function getGifs({keyword = 'dance', page =0} = {}){
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=${LIMIT}&offset=${page * LIMIT}&rating=g&lang=en`
    
   return  fetch(APIURL)
    .then(res=>res.json())
    .then(response => {
        const {data} = response
        const gifsBuscados= data.map (image => {
            const {images,title,id} = image
            const {url}= image.images.downsized_medium
            return {title,id,url}
        })
        return gifsBuscados
    })
}