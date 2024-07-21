import React from "react";
import "./home.scss";
import Title from "./HomeTitle/Title";
import Homecard from "./HomeCard/HomeCard";
import Title2 from "./HomeTitle2.jsx/Title2";
import Cardlist from "./CardLists/CardList";
import Homeblog from "./HomeBlog/Homeblog";
import Cardtrial from "./CardTrial/Cardtrial";

const HomePage = () => {
  return (
    <div className="container">
      <Title />
      <Homeblog />
      <Homecard />
      <Cardlist />
      <Cardtrial />
      <Title2 />
    </div>
  );
};

export default HomePage;
