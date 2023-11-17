import React from "react";
import CartIMG from "../assets/images/icon-cart.svg";
import Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Trash from "../assets/images/icon-delete.svg";

function Cart(props) {
  return (
    <div className="relative px-5">
      <div>
        <img src={CartIMG} alt="Cart" />
      </div>
      <div className="absolute w-96 top-20 shadow-lg -left-24 bg-whiteNoise z-10">
        <div className="flex justify-around items-center mt-12">
          <img src={Thumbnail} alt="" className="w-14" />
          <div className="grid grid-rows-2">
            <h2>Fall Limited Edition Sneakers</h2>
            $125.00 x{props.addToCart === 0 ? 0 : `${props.productQuantity}`}
            {"\n$" + `${props.addToCart}`}
          </div>
          <img src={Trash} alt="delete" />
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

export default Cart;
