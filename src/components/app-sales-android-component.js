import React from "react";
import {
  StyledSalesAndroidCardAction,
  StyledSalesAndroidCardActionLink,
  StyledSalesAndroidConAd,
  StyledSalesAndroidConCard,
  StyledSalesAndroidMainCont,
} from "@/styled-components";
import LatestSalesAdsSpace from "./latest-sales-adsSpace-component";

const AppSalesCard = () => {
  return (
    <StyledSalesAndroidMainCont className="">
      <StyledSalesAndroidConCard className="card">
        <div className="card-image">
          <a href="https://play.google.com/store/apps/details?id=net.tsapps.appsales">
            <img src="/images/promo_01.jpg" alt="App Image" />
          </a>
        </div>
        <StyledSalesAndroidCardAction className="card-action">
          <StyledSalesAndroidCardActionLink id="card-link" href="getapp.html">
            More Details
          </StyledSalesAndroidCardActionLink>
        </StyledSalesAndroidCardAction>
      </StyledSalesAndroidConCard>

      {/* Sidebar ad */}
      <StyledSalesAndroidConAd className="side-bung">
        <LatestSalesAdsSpace />
      </StyledSalesAndroidConAd>
    </StyledSalesAndroidMainCont>
  );
};

export default AppSalesCard;
