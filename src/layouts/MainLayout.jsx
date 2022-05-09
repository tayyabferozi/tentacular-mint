import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <div id="header" className="section">
        <div className="page-container">
          <img className="logo" src="/assets/imgs/logo.png" alt="logo" />

          <div className="btn">
            <div className="btn-text">Connect Wallet</div>
          </div>
        </div>
      </div>

      <div id="main-body">
        {children}
        <img className="bg" src="/assets/imgs/bg.png" alt="bg" />
        <img className="trees" src="/assets/imgs/bottom.png" alt="trees" />
      </div>
    </div>
  );
};

export default MainLayout;
