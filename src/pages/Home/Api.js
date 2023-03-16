import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/api.css";
import "bootstrap-icons/font/bootstrap-icons.css";

AOS.init();

const Api = () => {
  return (
    <div className="vision">
      <div
        className="visionHeading"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <h1 className="display-2 apiHead">Seamless PayGoal integration</h1>
      </div>
      <div className="container text-left belowHeading">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <ul class="list-group listText">
                <li class="list-group-item p-5">
                  <i class="bi bi-arrow-right-square-fill m-3" />
                  API Integration
                </li>
                <li class="list-group-item p-5">
                  <i class="bi bi-arrow-right-square-fill m-3" />
                  Pre-built Payment Page
                </li>
                <li class="list-group-item p-5">
                  <i class="bi bi-arrow-right-square-fill m-3" />
                  Application Integration
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-group listText">
                <li class="list-group-item p-5">
                  <i class="bi bi-arrow-right-square-fill m-3" />
                  Secure Payment Link
                </li>
                <li class="list-group-item p-5">
                  <i class="bi bi-arrow-right-square-fill m-3" />
                  Automated Receipts
                </li>
                <li class="list-group-item p-5">
                  <i class="bi bi-arrow-right-square-fill m-3" />
                  Payment Tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
