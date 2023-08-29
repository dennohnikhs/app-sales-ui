import React from "react";

const FeaturedApp = ({ appIcon, appName, appDev, priceDiscount, priceNew }) => {
  return (
    <div className="featured-apps">
      <div className="row">
        <div className="sale-item">
          <div className="card-padel">
            <div className="app-icon">
              <img src={appIcon} alt="App Icon" />
            </div>
            <div className="app-info">
              <p className="app-name">{appName}</p>
              <p className="app-dev">{appDev}</p>
            </div>
            <hr className="hide-on-small-only" />
            <div className="">
              {priceDiscount && (
                <div className="price-disco inline ">
                  {priceDiscount === "true" ? "-100%" : priceDiscount}
                </div>
              )}
              <div className="price-new ">
                {priceNew === "0" ? "FREE" : "$" + priceNew}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedApp;
