import React, { useState } from "react";

import MainLayout from "../layouts/MainLayout";

const Landing = () => {
  const [numberState, setNumberState] = useState(0);

  const changeNumber = (payload) => {
    return setNumberState((prevState) => {
      if (payload === "inc") {
        return prevState + 2;
      } else if (payload === "dec") {
        if (prevState < 2) {
          return 0;
        }
        return prevState - 2;
      }
    });
  };

  return (
    <MainLayout>
      <div className="section" id="main">
        <div className="page-container">
          <div className="d-flex justify-content-center">
            <div className="heading">Day One Sale</div>
          </div>

          <div className="mint-box">
            <div className="nft-container">
              <img src="/assets/imgs/nft.png" alt="nft" />
            </div>

            <div className="number-wrap">
              <img
                className="c-pointer"
                src="/assets/vectors/arrow-left.svg"
                alt="arrow-left"
                onClick={() => {
                  changeNumber("dec");
                }}
              />
              <div className="number">{numberState}</div>
              <img
                className="c-pointer"
                src="/assets/vectors/arrow-right.svg"
                alt="arrow-right"
                onClick={() => {
                  changeNumber("inc");
                }}
              />
            </div>

            <div className="text-center my-3">
              <div className="minted">0/5,5556 Minted</div>

              <div className="d-flex align-items-center justify-content-center gap-3">
                <div>Price:</div> <h3>0.01 ETH</h3>
              </div>
            </div>

            <div className="btn mint-btn">Mint</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
