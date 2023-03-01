import Modal from 'react-modal';

import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartProduct } from './CartProduct';
import { calculateCartTotal } from '../helpers/calculateCartTotals';
import { addCartToLocalStorage } from '../helpers/addCartToLocalStorage';
import { cartModalStyles } from '../styles/json_styles/cartModalStyles';

const customStyles = cartModalStyles;

Modal.setAppElement('#root');

export const CartModal = () => {

  const { cartIsOpen, cart, cartTotal, setCartTotal, setCartIsOpen } = useContext( ProductContext );

  const onCloseModal = () => {
    setCartIsOpen(false);
  }

  useEffect(() => {

    calculateCartTotal( cart, setCartTotal );
    addCartToLocalStorage( cart );
  }, [ cart, setCartTotal ]);

  return (
    <Modal
      isOpen={cartIsOpen}
      style={customStyles}
      onRequestClose={onCloseModal}
    >
      <h3>Shopping Cart</h3>
      <hr></hr>
      <div className="cart-products">
        {
          cart.map( cartProduct => {
            return <CartProduct key={`cart-${cartProduct.id}`} {...cartProduct}/>
          })
        }
      </div>
      <div className="buy-button-container w-100 position-absolute bottom-0">
        <div className="btn btn-success w-100">
          <span>{cartTotal} €</span>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      
    </Modal>
  );

}