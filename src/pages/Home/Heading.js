import React from "react";
import "./Styles/heading.css";
const Heading = () => {
  return (
    <div className="titleBox">
      <h1 className="display-1">Amplify Your Business With PayGoal!</h1>
      <h5>
        The fastest and easiest way to collect payments and make payouts for
        growing business
      </h5>
      <button type="button" className="btn btn-primary btn-lg getstarted">
        Get Started
      </button>
    </div>
  );
};

export default Heading;
