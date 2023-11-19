import React from "react";
import Logo from "../assets/images/logo.svg";
import Cart from "../Component/Cart";

function Navbar(props) {
  return (
    <nav
      role="navigation"
      className="p-10 border border-bottom border-1 w-4/5 m-auto"
    >
      <div className="container flex justify-around content-center">
        <div className="md:hidden">Burger</div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex justify-center items-center">
          <li className="mx-2">Collection</li>
          <li className="mx-2">Men</li>
          <li className="mx-2">Women</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Contact</li>
        </ul>
        <Cart
          productQuantity={props.productQuantity}
          addToCart={props.addToCart}
          handleDelete={props.handleDelete}
        />
        <span>profile pic</span>
      </div>
    </nav>
  );
}

export default Navbar;
