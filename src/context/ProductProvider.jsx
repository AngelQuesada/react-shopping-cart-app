import { ProductContext } from "./ProductContext";
import productsjson from '../mocks/products.json';
import { useMemo, useState } from "react";
import { getCartFromLocalStorage } from "../helpers/getCartFromLocalStorage";

export const ProductProvider = ({ children }) => {

  const initialCart = getCartFromLocalStorage();

  const [priceFilter, setPriceFilter] = useState('no');
  const [cart, setCart] = useState(initialCart);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  
  const getCategories = () => {
    
    const categories = ['all'];
    
    productsjson.products.forEach( product => {
      if(!categories.find(category => category === product.category)) {
        categories.push(product.category);
      }
    })
    
    return categories;
  }
  
  const categories = useMemo( () => getCategories(), [])
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const productsData = {
      products,
      setProducts,
      priceFilter,
      setPriceFilter,
      activeCategory,
      setActiveCategory,
      categories, 
      setCart,
      cart,
      cartIsOpen,
      setCartIsOpen,
      cartTotal,
      setCartTotal
  }

  return (
      <ProductContext.Provider value={productsData}>
          { children }
      </ProductContext.Provider>
  )
}