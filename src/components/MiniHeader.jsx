import React from "react";

const MiniHeader = () => {
  return (
    <div className=" bg-[color:var(--secondary-color)] flex justify-between text-xs flex-wrap ">
      <div className=" flex items-center p-4 ">
        <p className=" text-custom-w">
          Need Help? Call Us: <span className=" text-custom-yellow " >+1305775567</span>
          {' '}|{' '} US/USD
        </p>
        <img src="/assets/icons/arrow.svg" className=" h-4 w-4 " />
      </div>
      <div className=" p-4 flex items-center  gap-3 ">
        <img src="/assets/icons/user.svg" className="h-3 w-3 mr-[-8px] " />
        <p className=" text-custom-w">
          <a href="#">Sign In</a>
          <span className=" text-custom-yellow "> | </span>
          <a href="#">Sign Out</a>
        </p>
        <a href="#">
          <img src="/assets/icons/appStore.svg" className=" w-20 h-7" />
        </a>
        <a href="#">
          <img src="/assets/icons/googlePlay.svg" className=" w-20 h-7" />
        </a>
      </div>
    </div>
  );
};

export default MiniHeader;
