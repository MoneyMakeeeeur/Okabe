import React from "react";

export default function Roadmap() {
  return (
    <div className="roadmap" id="roadmap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 bg-blue align-self-center">
            <h1>Roadmap</h1>
            <div className="row mt-5">
              <div className="col-4 col-md-4 text-center align-self-c">
                <h6>Phase 1</h6>
              </div>
              <div className="col-8 col-md-8">
                <h5>
                  launch on 12.04 <br /> 200 holders <br /> 200k mcap <br /> 250
                  tg members
                </h5>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-4 col-md-4 text-center  align-self-c">
                <h6>Phase 2</h6>
              </div>
              <div className="col-8 col-md-8">
                <h5>
                  cmc, cg listing <br /> 750 tg members <br /> dextools trending
                </h5>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-4 col-md-4 text-center align-self-c">
                <h6>Phase 3</h6>
              </div>
              <div className="col-8 col-md-8">
                <h5>
                  cex listing <br /> 5k tg members <br /> token collaboration
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0 bg-img">
            <img
              className="img-fluid"
              src="../asserts/images/roadmap-buy.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
