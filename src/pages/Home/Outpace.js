import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/outpace.css";

const Outpace = () => {
  return (
    <div className="vision">
      <div
        className="visionHeading"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <h1 className="display-2 outspaceHeader">Outpace with PayGoal</h1>
      </div>
      <div className="container text-center belowHeading">
        <div className="row row-cols-auto">
          <div
            className="col-md d-flex align-items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-left">
              <div class="card border-0 mx-2">
                <div class="card-body">
                  <h5 class="card-title outspaceHead">
                    Accept All Payment Modes
                  </h5>

                  <p class="card-text outspaceSub">
                    At PayGoal Payment Gateway, We support 100+ Payment Options.
                  </p>
                </div>
              </div>
              <div class="card border-0 mx-2">
                <div class="card-body">
                  <h5 class="card-title outspaceHead">Analytics & Reporting</h5>

                  <p class="card-text outspaceSub">
                    Be on top of your cash flows, get clear reports on your
                    settlements and fees.
                  </p>
                </div>
              </div>
              <div class="card border-0 mx-2">
                <div class="card-body">
                  <h5 class="card-title outspaceHead">Powerful Dashboard</h5>

                  <p class="card-text outspaceSub">
                    Get reports and detailed statistics on payments,
                    settlements, refunds and much more.
                  </p>
                </div>
              </div>
              <div class="card border-0 mx-2">
                <div class="card-body">
                  <h5 class="card-title outspaceHead">
                    Honest & Flexible Pricing
                  </h5>

                  <p class="card-text outspaceSub">
                    Our flexible pricing plans let you achieve scale and
                    profitability.
                  </p>
                </div>
              </div>
            </p>
          </div>
          <div className="col-md" data-aos="fade-left" data-aos-duration="1500">
            <img src="/images/outpacing.png" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outpace;
