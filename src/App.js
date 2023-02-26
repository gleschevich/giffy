import React from 'react';
import { Link, Route } from 'wouter';
import './App.css';

import Searcher from './pages/Searcher';
import Home from './pages/Home';
import {GifContextProvider} from './context/GifContext';
import Detail from './pages/Detail';

export default function App() {
  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-center">
      <div className='bg-gradient-to-r from-black to-gray-400 p-7 flex flex-row gap-2'>
      <Link to={'/'}>
        <button className='bg-blue-600 mx-auto p-4 rounded-full w-1/4 basis-1/4'>
            <h1 className='text-3xl text-white font-bold underline font-flower '>
            GIF'SEEKER
            </h1>
       </button>
       </Link>
       <div className='flex flex-row basis-3/4 items-center justify-end gap-10'>
        <div>
          <button className='bg-blue-600'>Sign in</button>
        </div>
        <div>
          <button className='bg-blue-600'>Upload</button>
        </div>
        <div>
          <button className='bg-blue-600'>Random Search</button>
        </div>
       </div>
      </div>  
        <GifContextProvider>
        <Route path='/' component={Home}></Route>
        <Route component={Searcher} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
        </GifContextProvider>
    
    
    </div>
  );
}

