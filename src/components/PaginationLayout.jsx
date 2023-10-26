import React from "react";
import arrow from "/assets/icons/chevdown.svg";

const PaginationLayout = () => {
  return (
    <div className=" flex justify-between py-6 ">
      <div className="flex items-center gap-2 px-8 ">
        <p>Page:</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <button className="flex items-center gap-1 rounded-xl bg-btn-color text-custom-w px-3 py-2 ">
        Show more products
        <img src={arrow} />
      </button>
      <div className=" flex items-center px-8 gap-1 ">
        <div className=" bg-nav-color font-semibold text-xs p-1 rounded-md " >336</div>
        <p>Products</p>
      </div>
    </div>
  );
};

export default PaginationLayout;
