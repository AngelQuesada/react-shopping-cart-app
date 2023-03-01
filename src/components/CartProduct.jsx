import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { calculateCartTotal } from "../helpers/calculateCartTotals";
import { fireAlert } from "../helpers/sweetAlert";

export const CartProduct = ({title, price, thumbnail, quantity, id}) => {

  const { setCart, cart, setCartTotal } = useContext( ProductContext );

  const changeQuantity = (operation) => {
    const cartProduct = cart.find(cartProduct => {
      return cartProduct.id === id
    })

    switch (operation) {
      case 'sum':
        cartProduct.quantity ++;
        break;
      case 'substract':
        if (cartProduct.quantity === 1) return 
        cartProduct.quantity --;
        break;
      default:
        break;
    }

    const cartIndex = cart.findIndex(cartProduct => {
      return cartProduct.id === id;
    })

    cart[cartIndex] = cartProduct;

    const newCart = [...cart];

    setCart( newCart );
    calculateCartTotal( cart, setCartTotal );
  }

  const removeCartProduct = () => {
    const newCart = cart.filter( product => {
      return product.id !== id;
    })

    setCart( newCart );

    fireAlert('info', 'Product removed from cart', `${title} has been removed from cart`)
  }

  return (
    <div className="card cart-product mt-1">
      <div className="card-body">
        <div className='d-flex'>

          <div className="product-image">
            <img src={thumbnail} alt={title} />
          </div>

          <div className="product-info">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price} €</p>
          </div>

        </div>
        <div className="buttons d-flex justify-content-between align-items-center mt-3">
          <div href="" onClick={() => {changeQuantity('substract')}} className="btn btn-primary">-</div>
          <span>{quantity}</span>
          <div onClick={() => {changeQuantity('sum')}} className="btn btn-primary">+</div>
        </div>
        <div className="remove-button-container w-100 d-flex justify-content-center mt-3">
          <div onClick={removeCartProduct} className="btn btn-outline-danger mr-3">
            <span>Remove Item</span>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
