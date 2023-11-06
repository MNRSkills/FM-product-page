import React from "react";
import Photo from "../assets/images/image-product-1.jpg";

function ProductImage(props) {
  console.log(props);
  return (
    <div className="bg-red-500 p-10">
      <h1>Product Page secone </h1>

      <div className=" border border-2 m-auto rounded-lg">
        <img src={props.selected} alt="" className="object-cover rounded-lg" />
      </div>
      <div className="flex justify-center content-center w-full m-auto gap-8">
        {props.imageState.map((item, index) => {
          return (
            <div key={index} className="h-40 rounded-lg mt-10">
              <img
                src={`./` + `${item.src}`}
                alt="product"
                onClick={() => {
                  props.handleImage(item.id);
                }}
                className=" w-full rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
