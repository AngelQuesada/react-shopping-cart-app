import { useCallback, useContext, useEffect } from "react";
import { ProductContext } from '../context/ProductContext';
import productsjson from '../mocks/products.json';



export const useProductList = () => {

  const { priceFilter, activeCategory, products, setProducts } = useContext( ProductContext );

  
  const getProductsToShow = useCallback(() => {

    const productsJson = productsjson.products;
    
    let productsToShow = productsJson;

    if ( activeCategory !== 'all' ) {
      productsToShow = productsToShow.filter(product => {
          return product.category === activeCategory
      })
    }

    if (priceFilter === 'asc') {
      productsToShow = [...productsToShow].sort(({price:a}, {price:b}) => a-b)
    } 
    
    if (priceFilter === 'desc') {
      productsToShow = [...productsToShow].sort(({price:a}, {price:b}) => b-a)
    };

    return productsToShow;

  }, [ activeCategory, priceFilter ])
  
  useEffect(() => {

      const productsToShow = getProductsToShow();
      setProducts(productsToShow);
    
  }, [ activeCategory, priceFilter, setProducts, getProductsToShow ])

  return {
    products
  }

}

