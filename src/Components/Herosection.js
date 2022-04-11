import React from "react";

export default function Herosection() {
  return (
    <div className="herosection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-img">
              <img
                className="img-fluid"
                src="../asserts/images/logo.png"
                alt=""
              />
            </div>

            <div className="hero-bg-img text-center">
              <img
                className="img-fluid"
                src="../asserts/images/buttonbg.png"
                alt=""
              />
            </div>

            <div className="border-uniswap">
              <img
                className="img-fluid"
                src="../asserts/images/hero-border.svg"
                alt=""
              />
            </div>
            <div className="hero-left-h6">
              <a href="">
                <h6>uniswap</h6>
              </a>
            </div>

            <div className="hero-left-h5">
              <div className="border-dextools">
                <img
                  className="img-fluid"
                  src="../asserts/images/hero-border.svg"
                  alt=""
                />
              </div>
              <a href="">
                <h5>dextools</h5>
              </a>
            </div>

            <div className="hero-right-h6">
              <div className="border-twitter">
                <img
                  className="img-fluid"
                  src="../asserts/images/hero-border.svg"
                  alt=""
                />
              </div>
              <a href="">
                <h6>twitter</h6>
              </a>
            </div>

            <div className="hero-right-h5">
              <div className="border-telegram">
                <img
                  className="img-fluid"
                  src="../asserts/images/hero-border.svg"
                  alt=""
                />
              </div>
              <a href="">
                <h5>telegram</h5>
              </a>
            </div>

            <div className="hero-logo-img text-center">
              <img
                className="img-fluid"
                src="../asserts/images/logo-text.png"
                alt=""
              />
            </div>

            <h2>a MeMe token</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
