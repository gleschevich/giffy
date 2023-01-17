import React, {useState}  from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'


export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path,pushLocation] = useLocation ()
  const {gifs} = useGifs()
  
  const handleSubmit = evt =>{
    evt.preventDefault()
    pushLocation(`search/${keyword}`)

  }

  const handleInput = evt => {
    setKeyword(evt.target.value)
  }
    return(
        <>
            <form className='mx-auto m-2' onSubmit={handleSubmit}>
                <input className='p-3 w-3/4' placeholder='Search a gif...' type='text' value={keyword} onChange={handleInput} />
            </form>
            <div className='bg-black mt-5'>
              <h3 className='text-2xl text-white font-extrabold underline'>Ultima búsqueda</h3>
              <ListOfGifs gifs={gifs}/>
            </div>
    
        
            
           
            <div>
            <h2>Popular Gifs</h2>
                <TrendingSearches/>
               
            </div>    
        </>
    )
}