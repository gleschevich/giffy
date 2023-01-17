import {APIKEY} from './config'

export default function getPopularGifs(){
    const APIURL = `https://api.giphy.com/v1/trending/searches?api_key=${APIKEY}`

   return  fetch(APIURL)
    .then(res=>res.json())
    .then(response => {
        const {data} = response
        return data
    })
}