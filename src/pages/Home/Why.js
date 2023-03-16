import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles/why.css";
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
        <h1 className="display-2 whyHead">Why Choose PayGoal ?</h1>
      </div>
      <div className="container text-left belowHeading">
        <div class="container">
          <div class="row " data-aos="zoom-in-up" data-aos-duration="1500">
            <div class="col-md-6">
              <ul class="list-group listOut text-center ">
                <li class="list-group-item p-2">
                  <div class="card border-0">
                    <i class="bi bi-credit-card-2-front iconList"></i>
                    <div class="card-body">
                      <h5 class="card-title">Instant Refund</h5>
                      <p class="card-text">
                        For online payments and cash on delivery payments.
                        Independent of banking hours.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item p-2">
                  <div class="card border-0">
                    <i class="bi bi-wallet2 iconList"></i>
                    <div class="card-body">
                      <h5 class="card-title">On-Demand Payouts</h5>
                      <p class="card-text">
                        Disburse bulk payments instantly. Simpler and faster
                        than almost all banks.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item p-2">
                  <div class="card border-0">
                    <i class="bi bi-bank iconList"></i>
                    <div class="card-body">
                      <h5 class="card-title">Bank Verification</h5>
                      <p class="card-text">
                        Verify bank account, UPI ID, name before onboarding and
                        sending money
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-group listOut text-center">
                <li class="list-group-item p-2">
                  <div class="card border-0">
                    <i class="bi bi-tags iconList"></i>
                    <div class="card-body">
                      <h5 class="card-title">White Label</h5>
                      <p class="card-text">
                        You can offer payment gateway solution under your
                        brand's name. Independent & Various Integration API
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item p-2">
                  <div class="card border-0">
                    <i class="bi bi-coin iconList"></i>
                    <div class="card-body">
                      <h5 class="card-title">Payment Tokenization</h5>
                      <p class="card-text">
                        This process will replacing the 16-digit payment card
                        number with a unique digital identifier known as a
                        'token'
                      </p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item p-2">
                  <div class="card border-0">
                    <i class="bi bi-whatsapp iconList"></i>
                    <div class="card-body">
                      <h5 class="card-title">Live Chat Support</h5>
                      <p class="card-text">
                        With our live chat support, you quickly get information
                        about the PayGoal payment gateway services.
                      </p>
                    </div>
                  </div>
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
