import React from "react";
import Close from "../assets/images/icon-close.svg";
import Next from "../assets/images/icon-next.svg";
import Previous from "../assets/images/icon-previous.svg";

function LightHouse(props) {
  // console.log(props, "PROPS");
  console.log(props.productImg);

  return (
    <div className="bg-overlay h-screen w-full absolute z-10 top-0">
      <span className="p-10 my-10" onClick={() => props.lightHouse()}>
        <img src={Close} alt="" className="m-auto h-10" />
      </span>
      <div className="m-auto rounded-lg max-w-lg z-20 relative">
        {/* {props.productImg.map((previous, index) => {
          console.log("THIS is Previous", previous);
        })} */}

        <div
          className="absolute bottom-60 -left-4 px-3 py-2 rounded-full bg-whiteNoise"
          onClick={() => props.handlePrevious()}
        >
          <img src={Previous} alt="" className="" />
        </div>
        <img
          src={props.productImg[props.currentPhoto]}
          alt=""
          className="object-cover rounded-lg w-full"
        />
        <div
          className="absolute bottom-60 -right-4 px-3 py-2 rounded-full bg-whiteNoise"
          onClick={() => props.handleNext()}
        >
          <img src={Next} alt="" className="" />
        </div>
      </div>
      <div className="rounded-lg m-auto flex justify-around items-center md:gap-2 w-96 z-20">
        {props.productImg.map((item, index) => {
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

export default LightHouse;
