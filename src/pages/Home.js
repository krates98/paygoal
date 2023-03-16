import React from "react";
import Particle from "./Home/Particles";
import Heading from "./Home/Heading";
import Vision from "./Home/Vision";
import Blocks from "./Home/Blocks";
import Api from "./Home/Api";

const Home = () => {
  return (
    <div>
      <Particle />
      <Heading />
      <Vision />
      <Blocks />
      <Api />
    </div>
  );
};

export default Home;
