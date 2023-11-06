import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Navbar from "./Component/Navbar";
import ProductImage from "./Component/productImage";
import ProductDesc from "./Component/ProductDesc";

function App() {
  // ---- STATE OF THE IMAGE ----
  const [count, setCount] = useState(0);
  const [selected, setSelection] = useState("images/image-product-1.jpg");
  const [display, setDisplayIMG] = useState([
    {
      id: 1,
      src: "images/image-product-1.jpg",
      display: false,
    },
    {
      id: 2,
      src: "images/image-product-2.jpg",
      display: false,
    },
    {
      id: 3,
      src: "images/image-product-3.jpg",
      display: false,
    },
    {
      id: 4,
      src: "images/image-product-4.jpg",
      display: false,
    },
  ]);
  // ----------------------------------

  // FILTERING MY STATE FOR AN IMAGE TO SHOWCASE --
  const handleImage = (id) => {
    display
      .filter((show) => show.id === id)
      .map((selection) => {
        setSelection(selection.src);
      });
  };
  // ---------------------------------- //

  return (
    <div className="app">
      <Navbar />
      <div className="grid grid-cols-2 h-screen p-20">
        <ProductImage
          imageState={display}
          handleImage={handleImage}
          selected={selected}
        />
        <ProductDesc counter={count} />
      </div>
    </div>
  );
}

export default App;
