import React from "react";
import enterArrow from "/assets/icons/arrowenter.svg";
import socialIcons from "/assets/icons/socialicons.svg";

const Footer = () => {
  return (
    <div className="bg-footer-bg text-custom-w p-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h3>Mobile apps</h3>
          <p>Find us on Appstore</p>
          <p>Find us on playstore</p>
        </div>
        <div className=" flex flex-col gap-3 ">
          <h3>Our Company</h3>
          <p>About us</p>
          <p>Our team</p>
        </div>
        <div className=" bg-btn-color m-10 p-6 flex flex-col gap-2 text-custom-w">
          <h3>Subscribe to our newsletter</h3>
          <div>
            <input
              type="email"
              placeholder="enter email"
              className=" outline-none px-3 py-1 "
            ></input>
            <button className="bg-black p-2.5">
              <img src={enterArrow} />
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="flex items-center justify-between flex-wrap">
        <h1 className=" font-playfair text-[2rem] font-extrabold leading-normal text-custom-w p-4">
          Brickell Watches
        </h1>
        <div className="flex gap-6 items-center">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
        <img src={socialIcons} />
      </div>
    </div>
  );
};

export default Footer;
