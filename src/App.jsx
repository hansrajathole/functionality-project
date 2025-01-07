import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  return (
    <div className='h-screen w-screen flex '>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='details/:id' element={<Details/>}> </Route>
       
      </Routes>
      
    </div>
  )
}

export default App
