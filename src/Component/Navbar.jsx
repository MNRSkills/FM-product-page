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
        <ul className="flex justify-center items-center cursor-pointer">
          <li> <div class="h-14 mx-2 active:border-b-4 active:border-orangePrimary "><h1>Collection</h1></div></li>
          <li > <div><h1>Men</h1></div></li>
          <li > <div><h1>Women</h1></div></li>
          <li > <div><h1>About</h1></div></li>
          <li > <div><h1>Contact</h1></div></li>
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
