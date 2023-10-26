import React from "react";
import bell from "/assets/icons/bell.svg";
import annotation from "/assets/icons/annotation.svg";

const Header = () => {
  return (
    <div className="bg-custom-w  flex items-center flex-wrap justify-between">
      <div id="logo" className="pl-8 ">
        <h1 className=" font-playfair text-[2rem] font-extrabold leading-normal text-custom-header-color">
          Brickell Watches
        </h1>
        <p className=" text-[0.6875rem] font-normal leading-normal text-custom-sub-heading-color ">
          Danny D. Nissim Wholesale Brickell Jewelers (Retail)
        </p>
      </div>
      <div className="flex relative ">
        <input
          type="search"
          placeholder="Search watches..."
          className=" outline-none px-[6rem] py-[0.5rem] rounded-md "
        ></input>
        <img
          src="/assets/icons/search.svg"
          className=" h-6 w-6 absolute top-[10px] left-[8px]  "
        />
        <button className=" bg-custom-header-color rounded-r-md text-custom-w p-[0.625rem] font-semibold ">
          Search
        </button>
      </div>
      {/* accounts section */}
      <div className="flex items-center m-5 w-[10rem] ">
        <div className="flex justify-center items-center">
          <img src="/assets/icons/user_outlined.svg" />
          <div className="flex flex-col justify-center items-center m-4 text-sm">
            <p className=" cursor-pointer ">Sign In</p>
            <h3>Account</h3>
          </div>
        </div>
        {/* icons section */}
        <div className="flex items-center relative ">
          <div>
            <img src={bell} className=" h-[30px] w-[30px] " />
            <div
              className="absolute w-[2px] h-[2px] rounded-[50%] bg-red-900 p-2 flex justify-center items-center text-[10px] 
             bottom-[15px] left-[10px] text-custom-w "
            >
              2
            </div>
          </div>
          <div>
            <img src={annotation} className=" h-[30px] w-[30px] " />
            <div
              className="absolute w-[2px] h-[2px] rounded-[50%] bg-red-900 p-2 flex justify-center items-center text-[10px] 
             bottom-[15px] right-[1px] text-custom-w "
            >
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
