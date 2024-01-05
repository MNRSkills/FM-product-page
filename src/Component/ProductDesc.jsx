import React from "react";
import Cart from "../assets/images/icon-cart.svg";

function ProductDesc(props) {
  console.log(props);
  return (
    <div className="text-left p-8">
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
      <div className="p-2 md:max-w-64 md:-ml-5 flex items-center">
        <span className="text-blackNoise font-bold text-4xl m-auto">
          $125.00
        </span>
        <span className="text-orangePrimary bg-paleOrangePrimary p-2 rounded-lg text-bold m-auto">
          50%
        </span>
      </div>
      <div className="flex mt-20 flex-col md:flex-row w-full">
        {/* counter action begining  */}
        <div className="bg-lightGrayishBlue w-full p-20 flex justify-center items-center md:max-w-1/3 md:p-5 cursor-pointer text-center md:mr-2 rounded-xl shadow-sm">
          <span
            className="w-3/5 text-orangePrimary font-bold text-3xl"
            onClick={() => props.removeCount()}
          >
            -
          </span>
          <span className="w-1/3 text-blackNoise font-bold text-3xl">
            {props.counter}
          </span>
          <span
            className="w-3/5 text-orangePrimary font-bold text-3xl"
            onClick={() => props.increaseCount()}
          >
            +
          </span>
        </div>
        {/* ----------- */}
        {/* add to cart buttton */}
        <button
          className="bg-orangePrimary md:p-5 w-full p-20 md:max-w-40 rounded-lg text-whiteNoise flex items-center justify-around md:ml-5"
          onClick={() => props.addToCart(props.productId)}
        >
          <img src={Cart} alt="" />
          Add to Cart
        </button>
        {/* ------- */}
      </div>
    </div>
  );
}

export default ProductDesc;
