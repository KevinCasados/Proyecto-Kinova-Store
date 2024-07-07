import React, {createContext, useState, useEffect} from 'react';
import { json } from 'react-router-dom';

// create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState ([]);
  //fecth products
  useEffect(() => {
    const fecthProducts = async ()=> {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fecthProducts();
  },[]);


  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  )
};

export default ProductProvider;
