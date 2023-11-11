import React from "react";
import Photo from "../assets/images/image-product-1.jpg";

function ProductImage(props) {
  console.log(props.imageState);

  return (
    <div className="p-10">
      <h1>Product Page secone </h1>
      {/* {props.product.src.map((pic, index) => {
        console.log("The pic", pic[0])
      })} */}

      <div className=" border border-2 m-auto rounded-lg max-w-lg">
        <img
          src={props.selected}
          alt=""
          className="object-cover rounded-lg w-full"
          onClick={() => props.lightHouse()}
        />
      </div>
      <div className="rounded-lg mt-2 flex justify-around items-center md:gap-2">
        {props.imageState.map((item, index) => {
          return (
            <div key={index} className="rounded-lg mt-10">
              <img
                src={`./` + `${item}`}
                alt="product"
                onClick={() => {
                  props.handleImage(item);
                }}
                className=" w-24 rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
