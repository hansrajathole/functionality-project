
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from '../utils/Axios';
import { use } from 'react'
import Loding from './Loding'

const Details = () => {
  const {id} =  useParams()
  console.log(id);
  
  const [product, setproduct] = useState(null)
  
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
      console.log(data);
    
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
   getSingleProduct()
  }, [])
  

  return product?(
    <div className='w-[70%] h-full flex m-auto justify-between items-center p-[10%]'>
      <img 
      className=' w-[40%] h-[80%] object-contain'
      src={`${product.image}`} alt="" />
      <div className='w-[50%]'>
        <h1 className='text-3xl font-medium'>{product.title}</h1>
        <h3 className=' text-zinc-400 my-3'>{product.category}</h3>
        <h2 className='text-red-300 mt-3'>$ {product.price}</h2>
        <p className=' mb-4'>{product.description}</p>
        <Link className='px-5 py-2 mr-8 borderd rounded border border-blue-300 text-blue-500 ' >Edit</Link>
        <Link className='px-5 py-2 borderd rounded border border-red-300 text-red-500 ' >Delete</Link>
      </div>
    </div>
  ):(<Loding/>)
}

export default Details
