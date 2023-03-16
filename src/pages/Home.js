import React from "react";
import Particle from "./Home/Particles";
import Heading from "./Home/Heading";
import Vision from "./Home/Vision";
import Blocks from "./Home/Blocks";
import Api from "./Home/Api";
import Outpace from "./Home/Outpace";

const Home = () => {
  return (
    <div>
      <Particle />
      <Heading />
      <Vision />
      <Blocks />
      <Api />
      <Outpace />
    </div>
  );
};

export default Home;
