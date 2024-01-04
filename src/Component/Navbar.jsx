import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";
import Cart from "../Component/Cart";
import CartIMG from "../assets/images/icon-cart.svg";

function Navbar(props) {
  const [showDetail, setCartDetail] = useState(false);
  return (
    <nav
      role="navigation"
      className="p-10 border border-bottom border-1 w-4/5 m-auto"
    >
      <div className="container flex justify-around items-center">
        <div className="md:hidden">Burger</div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex justify-center items-center cursor-pointer text-darkGrayishBlue">
          <li className="mx-2">
            {" "}
            <a href="#" className="mx-2 focus:text-blackNoise">
              Collection
            </a>
          </li>
          <li className="mx-2">
            {" "}
            <a href="#" className="mx-2 focus:text-blackNoise">
              Men
            </a>
          </li>
          <li>
            <a href="#" className="mx-2 focus:text-blackNoise">
              Women
            </a>
          </li>
          <li className="mx-2">
            {" "}
            <a href="#" className="mx-2 focus:text-blackNoise">
              About
            </a>
          </li>
          <li className="mx-2 focus:border-b-4 focus:border-orangePrimary">
            {" "}
            <a href="#" className="mx-2 focus:text-blackNoise">
              Contact
            </a>
          </li>
        </ul>
        <div className="relative px-5 text-darkGrayishBlue">
          <div className="relative ">
            {props.addToCart > 1 ? (
              <span className="absolute rounded-lg px-2 bg-orangePrimary text-whiteNoise -top-2 -right-2">
                {props.productQuantity}
              </span>
            ) : null}

            <img
              src={CartIMG}
              alt="Cart"
              className="w-9"
              onClick={() => setCartDetail(!showDetail)}
            />
          </div>
          {showDetail !== false ? (
            <Cart
              productQuantity={props.productQuantity}
              addToCart={props.addToCart}
              handleDelete={props.handleDelete}
              showDetail={showDetail}
            />
          ) : null}
        </div>
        <span className="border-2 border-orangePrimary rounded-full">
          <img src={Avatar} alt="" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
