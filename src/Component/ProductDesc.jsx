import React from "react";

function ProductDesc() {
  return (
    <div className="text-left pt-32">
      <h2 className="font-header text-orangePrimary">SNEAKER COMPANY</h2>
      <h1 className="font-header text-blackNoise text-5xl font-bold">
        Fall Limited Edition Sneakers
      </h1>
      <p className="max-w-lg text-base font-content leading-7 mt-10">
        Thees low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everythinghthe
        weather can offer.
      </p>
      <span className="text-blackNoise font-bold text-3xl">$125.00</span>
      <span className="text-grayishBlue">50%</span>
      <div className="flex">
        <div className="bg-lightGrayishBlue flex justify-center items-center w-1/2">
          <span>-</span>
          <span>0</span>
          <span>+</span>
        </div>
        <button className="bg-orangePrimary p-5 w-1/2">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDesc;
