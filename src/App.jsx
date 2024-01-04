import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Navbar from "./Component/Navbar";
import ProductImage from "./Component/productImage";
import ProductDesc from "./Component/ProductDesc";
import LightHouse from "./Component/lightHouse";

function App() {
  // ---- STATE OF THE IMAGE & PRODUCT ----
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
    price: 125,
  });
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [lightOn, setLightHouse] = useState(false);
  const [selected, setSelection] = useState("images/image-product-1.jpg");
  const [addCart, setAddToCart] = useState(0);

  // ---------------------------------- //

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
    setProduct({ ...product, quantity: product.quantity + 1 });
  };

  const removeCount = () => {
    product.quantity > 1
      ? setProduct({ ...product, quantity: product.quantity - 1 })
      : null;
  };
  //-------------------------- //

  // ---------- ADD TO CART ------- //
  const addToCart = (id) => {
    setAddToCart(product.price * product.quantity);
  };
  // ----------------------- //

  // ---- TOGGLE MODAL OR LIGHTHOUSE ---
  const toggleLight = () => {
    setLightHouse(!lightOn);
  };
  // --------------------------- //

  // -------- HANDLE next previous buttons -----
  const handlePrevious = () => {
    console.log("Previous click");
    if (currentPhoto > 0) {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  const handleNext = () => {
    if (currentPhoto < product.src.length - 1) {
      setCurrentPhoto((currentPhoto) => currentPhoto + 1);
    }
  };

  // ------------------------------  //

  // ----- DELETE CART ---------
  const handleDelete = () => {
    setAddToCart(0);
    setProduct({ ...product, quantity: 1 });
  };

  // -------------------------- //

  // useEffect(() => {
  //   <
  // },[])
  return (
    <div className="app">
      <Navbar
        handleDelete={handleDelete}
        productQuantity={product.quantity}
        addToCart={addCart}
      />
      <div className="grid md:grid-cols-2 h-screen p-5 md:p-20 relative">
        {lightOn == true ? (
          <LightHouse
            lightHouse={toggleLight}
            productImg={product.src}
            selected={selected}
            handleImage={handleImage}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            currentPhoto={currentPhoto}
          />
        ) : null}
        <ProductImage
          imageState={product.src}
          handleImage={handleImage}
          selected={selected}
          product={product.src}
          lightHouse={toggleLight}
        />

        <ProductDesc
          counter={product.quantity}
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
