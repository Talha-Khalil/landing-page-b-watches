import React from "react";
import arrow from "/assets/icons/arrowLayer.svg";
import cart from "/assets/icons/cart.svg";

const Navbar = () => {
  return (
    <div className=" bg-nav-color h-[2.875rem] flex px-9 justify-between ">
      <div className="flex items-center gap-8 ">
        <div className="flex items-center">
          <p>Watches</p>
          <img src={arrow} />
        </div>
        <div className="flex items-center">
          <p>Jewelry</p>
          <img src={arrow} />
        </div>
        <div className="flex items-center">
          <p>Bags</p>
          <img src={arrow} />
        </div>
      </div>
      <div className="flex items-center my-2 rounded-md p-2 gap-[0.5rem] bg-gradient-diagonal shadow-md h-[1.875rem] ">
        <button className="text-custom-w text-md ">Sell us your watch</button>
        <img src={cart} />
      </div>
    </div>
  );
};

export default Navbar;
