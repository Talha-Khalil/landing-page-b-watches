import React, { useState } from "react";
import cheveronRight from "/assets/icons/cheveron-right.svg";
import grid from "/assets/icons/grid_icon.svg";
import list from "/assets/icons/list.svg";

const Layout = () => {
  const [showType, setShowType] = useState("grid");
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className="px-4 py-2 flex justify-between items-center ">
      {/* Nav section */}
      <div className="flex items-center">
        <div className="flex items-center font-playfair text-[1.125rem] gap-1">
          <h1>Watches</h1>
          <img src={cheveronRight} />
        </div>
        <div className="flex items-center font-roboto text-[0.7125rem] gap-1">
          <h1>Rolex</h1>
          <img src={cheveronRight} />
        </div>
        <div className="flex items-center font-roboto text-[0.7125rem] gap-1">
          <h1>Rolex Turn O graph</h1>
        </div>
      </div>
      {/* buttons section */}
      <div className="flex gap-4 ">
        <div className="flex items-center gap-1 cursor-pointer ">
          <img src={grid} className="h-[15px] w-[15px]" />
          <p onClick={handleClick}>
            Grid view
          </p>
        </div>
        <div className="flex items-center gap-1 cursor-pointer ">
          <img src={list} />
          <p className="cursor-pointer">List view</p>
        </div>
        <div className="flex items-center gap-1 ">
          <div className="  text-[8px] bg-yellow-100 p-1 rounded-lg ">117</div>
          <p>Products</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
