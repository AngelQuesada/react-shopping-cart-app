import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import { fireAlert } from '../helpers/sweetAlert';

export const Product = ({title, description, price, category, thumbnail, id}) => {

  const { products, cart, setCart } = useContext( ProductContext );

  const handleAddToCartButton = () => {

    const productInCart = cart.find(product => {
      return product.id === id
    })

    if (productInCart) return;

    const product = products.find(product => {
      return product.id === id
    })

    product.quantity = 1;

    setCart([...cart, product]);

    fireAlert('success', 'Product Added', `${product.title} added succesfully`)
  }

  return (
    <div style={{paddingBottom:'120px'}} className="card">
      <img style={{height:'130px'}} className="card-img-top" src={thumbnail} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p style={{height:'75px', overflow:'hidden'}} className="card-text">{description}</p>
        <div style={{bottom:'80px', left: '0px'}} className='p-2 w-100 d-flex align-items-center justify-content-between position-absolute'>
          <h4><span className="badge bg-secondary">{price} €</span></h4>
          <h6><span className="badge bg-secondary">{category}</span></h6>
        </div>
        <div className='button-container w-100 p-1 position-absolute'>
          <div onClick={handleAddToCartButton} className="w-100 btn btn-primary">Add to cart</div>
        </div>
      </div>
    </div>
  )
}
