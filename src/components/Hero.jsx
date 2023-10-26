import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import List from "./List";
import PaginationLayout from "./PaginationLayout";

const Hero = () => {
  const cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(<Card key={i} />);
  }
  return (
    <div>
      <Layout />
      <div className="gap-5 flex p-5">
        <Sidebar/>
        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 ">
          {cards}
        </div>
      </div>
      <PaginationLayout/>
    </div>
  );
};

export default Hero;
