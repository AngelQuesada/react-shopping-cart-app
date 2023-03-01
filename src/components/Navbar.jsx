import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import logo from "../assets/images/app-icon.png";

export const Navbar = () => {

  const { cartIsOpen, setCartIsOpen, cart } = useContext( ProductContext );

  const onClickCartIcon = () => {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <span> &nbsp; ShoppingCart APP</span>
        </div>
        <span className={ cart.length ? '':'cart-empty' } data-badge={cart.length}>
          <i onClick={onClickCartIcon} type="button" className="cursor-pointer fa-solid fa-cart-shopping fa-lg"></i>
        </span>
      </div>
    </nav>
  )
}
