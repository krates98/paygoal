import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/vision.css";

AOS.init();

const Vision = () => {
  return (
    <div className="vision">
      <div
        className="visionHeading"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <h1 className="display-2">Vision & Values</h1>
      </div>
      <div class="container text-center mt-2 container">
        <div class="row row-cols-auto">
          <div class="col-md" data-aos="fade-left" data-aos-duration="1500">
            <img src="/images/vision.png" width="100%" />
          </div>
          <div
            class="col-md d-flex align-items-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p>
              Accept All Payment Modes with our Powerful Dashboard Quickly go
              live with PayGoal and experience the future of payments. Accept
              domestic and international payments with 100+ payment options.
              Choose from a range of integrations to give the best checkout
              experience to you customers. PayGoal works on any device with the
              PayGoal API, iOS, and Android SDK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
