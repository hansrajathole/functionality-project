import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './components/Details'

const App = () => {

  const { search,pathname} =  useLocation()
  console.log(search,pathname);
  

  return (
    <div className='h-screen w-screen flex '>
      
      {(pathname != "/" || search.length >0)&& (<Link to="/" className="text-red-300 absolute left-[17%] top-[3%]" >Home</Link>)}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='details/:id' element={<Details/>}> </Route>
       
      </Routes>
      
    </div>
  )
}

export default App
