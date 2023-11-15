import React from "react";
import Photo from "../assets/images/image-product-1.jpg";

function ProductImage(props) {
  // console.log(props.imageState);

  return (
    <div className="p-10">
      <div className="border-2 m-auto rounded-lg max-w-lg">
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
            <div
              key={index}
              className="rounded-lg 
                         mt-10
                         hover:opacity-25
                         hover:border-2
                       hover:border-orangePrimary
                         relative
                         "
            >
              <img
                src={`./` + `${item}`}
                alt="product"
                onClick={() => {
                  props.handleImage(item);
                }}
                className=" w-24
                            focus:border-4
                            rounded-lg 
                            before:content-none
                            before:absolute
                            before:inset-0
                            before:top-0
                            before:bottom-0
                            before:right-0
                            before:left-0
                            
                            "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
