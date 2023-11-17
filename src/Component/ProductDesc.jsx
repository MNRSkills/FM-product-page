import React from "react";
import Cart from "../assets/images/icon-cart.svg";

function ProductDesc(props) {
  console.log(props);
  return (
    <div className="text-left">
      <h2 className="font-header text-orangePrimary mt-16 font-bold">
        SNEAKER COMPANY
      </h2>
      <h1 className="text-blackNoise text-5xl font-bold mt-10">
        Fall Limited Edition Sneakers
      </h1>
      <p className="max-w-md text-base font-content leading-7 mt-10">
        Thees low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everythinghthe
        weather can offer.
      </p>
      <span className="text-blackNoise font-bold text-4xl mt-4">$125.00</span>
      <span className="text-orangePrimary bg-paleOrangePrimary p-2 rounded-lg text-bold text-center">
        50%
      </span>
      <div className="flex mt-20">
        <div className="bg-lightGrayishBlue flex justify-center items-center w-1/2 cursor-pointer text-center mr-2 rounded-xl shadow-sm">
          <span
            className="w-1/3 text-orangePrimary font-bold text-2xl"
            onClick={() => props.removeCount()}
          >
            -
          </span>
          <span className="w-1/3 text-blackNoise font-bold text-2xl">
            {props.counter}
          </span>
          <span
            className="w-1/3 text-orangePrimary font-bold text-2xl"
            onClick={() => props.increaseCount()}
          >
            +
          </span>
        </div>
        <button
          className="bg-orangePrimary p-5 w-1/2 rounded-lg text-whiteNoise flex items-center justify-around"
          onClick={() => props.addToCart(props.productId)}
        >
          {" "}
          <img src={Cart} alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDesc;
