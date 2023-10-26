import React from "react";
import watchImg from "/assets/images/image.png";
import starIcon from "/assets/icons/star.svg";
import shareIcon from "/assets/icons/share.svg";
import whatsApp from "/assets/icons/whatsapp.svg";

const Card = () => {
  return (
    <div className="relative bg-card-bg border-[1px] border-solid rounded-xl border-card-border">
      {/* img div */}
      <div className="">
        <img src={watchImg} className="h-[100%] w-[100%] object-contain rounded-xl " />
        <div className=" absolute top-[20px] right-[1px] text-xs py-1 px-1 font-semibold rounded-lg text-custom-w bg-red-500 ">
          Discount
        </div>
        <div className=" absolute top-[20px] left-[1px] text-xs py-1 px-3 font-semibold rounded-lg text-custom-w bg-green-500 ">
          New
        </div>
      </div>
      {/* text section */}
      <div className="flex items-center justify-between">
        <div className="p-4">
          <h2 className=" lg:text-md md:text-sm font-bold">Rolex Datejust </h2>
          <p className=" text-sm">Item#:16434067</p>
          <h3 className=" lg:text-md font-semibold ">$2200</h3>
          <h6 className=" text-xs text-red-500 ">$2500</h6>
        </div>
        {/* icons section */}
        <div className="flex flex-col items-center gap-3 px-4 pl-0 ">
          <div className=" flex items-center gap-2 cursor-pointer p-3 ">
            <img src={starIcon} />
            <img src={shareIcon} />
            <img src={whatsApp} />
          </div>
          <button className=" bg-btn-color text-custom-w rounded-lg text-xs p-1 ">
            Make offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
