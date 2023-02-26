import React, {useState}  from 'react'
import { useLocation } from 'wouter'
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
            <div className='bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 mt-5'>
              <h3 className='text-2xl text-white font-extrabold underline mb-8'>Ultima búsqueda</h3>
              <ListOfGifs gifs={gifs}/>
            </div>
    
            <div className='bg-gradient-to-r from-teal-200 to-blue-500'>
            <h2 className='italic font-extrabold mb-3 text-lg'>Popular Gifs</h2>
            <TrendingSearches/>
            
         
    
              
               
             </div>
        </>
    )
}