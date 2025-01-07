import axios from './Axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
const Context = (props) => {
    const getProduct = async () =>{
        try {
            const {data} = await axios("/products")
            setproducts(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getProduct()
    }, [])
    

    const [products, setproducts] = useState(null)
  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
