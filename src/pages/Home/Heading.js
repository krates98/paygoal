import React from "react";
import "./Styles/heading.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Heading = () => {
  return (
    <div className="heading">
      <div className="titleBox">
        <h1 className="display-1" data-aos="flip-left" data-aos-duration="3000">
          Amplify Your Business With PayGoal!
        </h1>
        <h5>
          The fastest and easiest way to collect payments and make payouts for
          growing business
        </h5>
        <button
          type="button"
          className="btn btn-primary btn-lg getstarted"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Heading;
