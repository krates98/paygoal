import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/api.css";

AOS.init();

const Api = () => {
  return (
    <div className="vision">
      <div
        className="visionHeading"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <h1 className="display-2">Seamless PayGoal integration</h1>
      </div>
      <div className="container text-center belowHeading">
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Api;
