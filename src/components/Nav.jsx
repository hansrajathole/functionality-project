import { useContext } from 'react'
import React, { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [products] =  useContext(ProductContext)
  let distinctCategory = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
  distinctCategory = [...new Set(distinctCategory)]
  const color = ()=>{
    return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.5)`
  }
  

  return (
    <nav className='w-[15%] h-full bg-zinc-50 flex flex-col  items-center pt-5'>
        <a className='px-5 py-3 borderd rounded border border-blue-300 text-blue-500 ' 
        href="/create">Add New Product</a>
        <hr className='my-2 w-[80%]' />
        <h1 className='text-2xl mb-3 w-[80%] '>Catagory Filter</h1>
        <div className='w-[80%] '>
         {distinctCategory.map((c,i)=> <Link to={`/?category=${c}`} key={i} className='flex items-center'>
            <span
            style={{background : color()}}
            className='w-[12px] h-[12px] inline-block mr-2 rounded-full'></span>
            {c}</Link>
          )}
        </div>
      </nav>  
  )
}

export default Nav
