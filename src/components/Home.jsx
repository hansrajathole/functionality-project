import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import Loding from "./Loding";
import axios from "../utils/Axios";

const Home = () => {

    const [products] =  useContext(ProductContext)
    
    const {search} = useLocation()
    const category = decodeURIComponent(search.split("=")[1])
    const [filteredProduct, setfilteredProduct] = useState(null)
    const getProductsCategory = async ()=>{
        try {
            const {data} = await axios.get(`/products/category/${category}`)
            setfilteredProduct(data)
         
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(() => {
     if(!filteredProduct)setfilteredProduct(products)   
     if(category != "undefined")getProductsCategory()
    }, [category,products])
    
    

        
  return (products?
    <>
     <Nav/> 

      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
       {filteredProduct && filteredProduct.map((product,index)=>
         <Link to={`/details/${index+1}`} key={index} className="card p-5 border rounded w-[20%] h-[35vh] flex flex-col justify-center items-center mr-3 mb-3 ">
         <div
           className="hover:scale-110 w-full h-[80%] mb-3  bg-contain bg-no-repeat bg-center duration-100 ease-linear"
           style={{
             backgroundImage:
               `url(${product.image})`,
           }}
         ></div>
         <h1 className="hover:text-blue-300 cursor-pointer leading-5 text-[0.9em]">
          {product.title}
         </h1>
       </Link>
    )}
      </div>
    </>:<Loding/>
  );
};

export default Home;
