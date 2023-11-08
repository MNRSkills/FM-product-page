import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Navbar from "./Component/Navbar";
import ProductImage from "./Component/productImage";
import ProductDesc from "./Component/ProductDesc";

function App() {
  // ---- STATE OF THE IMAGE ----
  const [product, setProduct] = useState({
    id: 1,
    src: [
      "images/image-product-1.jpg",
      "images/image-product-2.jpg",
      "images/image-product-3.jpg",
      "images/image-product-4.jpg",
    ],
    quantity: 1,
    display: false,
  });
  const [count, setCount] = useState(1);
  const [selected, setSelection] = useState("images/image-product-1.jpg");
  const [addCart, setAddToCart] = useState({});

  // ----------------------------------

  // FILTERING MY STATE FOR AN IMAGE TO SHOWCASE --
  const handleImage = (id) => {
    product.src
      .filter((show) => show === id)
      .map((selection) => {
        setSelection(selection);
      });
  };
  // ---------------------------------- //

  // QUANTITY BUTTONS AND COUNTER ---
  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const removeCount = () => {
    count > 1 ? setCount((count) => count - 1) : null;
  };
  //-------------------------- //

  const addToCart = (id) => {
    // console.log(id, "SoMthing here");
    setAddToCart(id);
  };

  useEffect(() => {}, []);
  return (
    <div className="app">
      <Navbar />
      <div className="grid grid-cols-2 h-screen p-20">
        <ProductImage
          imageState={product.src}
          handleImage={handleImage}
          selected={selected}
          product={product.src}
        />

        <ProductDesc
          counter={count}
          increaseCount={increaseCount}
          removeCount={removeCount}
          addToCart={addToCart}
          // productId={display}
        />
      </div>
    </div>
  );
}

export default App;
