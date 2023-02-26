import {APIKEY} from './config'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  console.log(data)
  return data
}

export default function getPopularGifs(){
    const APIURL = `https://api.giphy.com/v1/trending/searches?api_key=${APIKEY}`

   return  fetch(APIURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
    }
