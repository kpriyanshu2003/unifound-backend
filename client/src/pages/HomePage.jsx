import React from "react";
import "../styles/Home.css";
import Grid from "../Components/Grid";
import HomeCard from "../Components/HomeCard";

const HomePage = () => {
  return (
    <div className="homeScreen">
      <HomeCard />
      <Grid />
    </div>
  );
};

export default HomePage;
