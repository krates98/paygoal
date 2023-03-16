import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/blocks.css";

AOS.init();

const Blocks = () => {
  return (
    <div className="vision">
      <div
        className="visionHeading"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <h1 className="display-2">Business Payment Hub</h1>
      </div>
      <div className="container text-center belowHeading">
        <div className="row row-cols-1 row-cols-md-3">
          <div
            className="col d-flex justify-content-center mb-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="card border-0 mx-2">
              <img
                src="/images/block1.png"
                className="card-img-top p-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title hubHeadText">
                  Honest & Flexible Pricing
                </h5>
                <p className="card-text hubSubText ">
                  Our flexible pricing plans let you achieve scale and
                  profitability so you can build sustainable business.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col d-flex justify-content-center mb-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="card border-0 mx-2">
              <img
                src="/images/block2.png"
                className="card-img-top p-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title hubHeadText">
                  Go Global With PayGoal
                </h5>
                <p className="card-text hubSubText">
                  Boost conversions with international customers by allowing
                  them to pay in their local currency.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col d-flex justify-content-center mb-4"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="card border-0 mx-2">
              <img
                src="/images/block3.png"
                className="card-img-top p-3"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title hubHeadText">Technical Support</h5>
                <p className="card-text hubSubText">
                  With our live chat support, you quickly get information about
                  the PayGoal payment gateway services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
