import React, { useState } from "react";
import CartIMG from "../assets/images/icon-cart.svg";
import Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Trash from "../assets/images/icon-delete.svg";

function Cart(props) {
  const [showDetail, setCartDetail] = useState(false);
  return (
    <div className="relative px-5 text-darkGrayishBlue">
      <div className="relative">
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
      {showDetail == true ? (
        <div className="absolute rounded-lg md:w-80 top-20 shadow-md -left-24 bg-whiteNoise z-10">
          <div className="flex justify-around items-center mt-12 mx-2">
            <img src={Thumbnail} alt="" className="w-14"/>
            <div className="container">
              <h2 className="max-w-md"> Fall Limited Edition Sneakers</h2>
              <br />
              <span>
                $125.00 x
                {props.addToCart === 0 ? 0 : `${props.productQuantity}`}
              </span>
              <span className="text-bold text-blackNoise">
                {"\n$" + `${props.addToCart}`}
              </span>
            </div>
            <span className="" onClick={() => props.handleDelete()}>
              <img src={Trash} alt="delete" className="w-6 mr-2" />
            </span>
          </div>
          <button
            className="bg-orangePrimary 
                       w-5/6
                       py-5
                       rounded-xl
                     text-whiteNoise
                       my-6
                       ml-6"
          >
            Checkout
          </button>
        </div>
      ) : null}
      
    </div>
  );
}

export default Cart;
