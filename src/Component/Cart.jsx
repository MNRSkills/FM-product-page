import React, { useState } from "react";
import CartIMG from "../assets/images/icon-cart.svg";
import Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Trash from "../assets/images/icon-delete.svg";

function Cart(props) {
  if (props.addToCart < 1) {
    return (
      <div className="absolute rounded-lg w-96 top-20 shadow-md -left-24 bg-whiteNoise z-10">
        <div className="flex justify-around items-center mt-12">
          <h1 className="my-10 text-2xl"> Your cart is empty.</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative px-5 text-darkGrayishBlue">
        <div className="absolute rounded-lg w-96 top-20 shadow-md -left-24 bg-whiteNoise z-10">
          <div className="flex justify-around items-center mt-12">
            <img src={Thumbnail} alt="" className="w-14" />
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
              <img src={Trash} alt="delete" className="w-6" />
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
      </div>
    );
  }
}

export default Cart;
