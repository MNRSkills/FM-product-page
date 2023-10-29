import React from "react";
import Logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <nav role="navigation" className="">
      <div className="container flex justify-around items-center">
        <div className="md:hidden">Burger</div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex justify-around items-center">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <span>cart</span>
        <span>profile pic</span>
      </div>
    </nav>
  );
}

export default Navbar;
