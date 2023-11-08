import React from "react";
import Photo from "../assets/images/image-product-1.jpg";

function ProductImage(props) {
  console.log(props.imageState);

  return (
    <div className="bg-red-500 p-10">
      <h1>Product Page secone </h1>
      {/* {props.product.src.map((pic, index) => {
        console.log("The pic", pic[0])
      })} */}

      <div className=" border border-2 m-auto rounded-lg">
        <img src={props.selected} alt="" className="object-cover rounded-lg" />
      </div>
      <div className="rounded-lg mt-10 flex">
        {props.imageState.map((item, index) => {
          return (
            <div key={index} className="rounded-lg mt-10">
              <img
                src={`./` + `${item}`}
                alt="product"
                onClick={() => {
                  props.handleImage(item);
                }}
                className=" w-full rounded-lg h-40"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
