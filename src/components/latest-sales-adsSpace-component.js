import React, { useEffect } from "react";
import { StyledAdSpace, StyledLatestAppsAdSpace } from "../styled-components";

const LatestSalesAdsSpace = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <StyledLatestAppsAdSpace id="pagetop" className="adspace">
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9043346163535096"
        data-ad-slot="9381777964"
        data-ad-format="auto"
      ></ins>
    </StyledLatestAppsAdSpace>
  );
};

export default LatestSalesAdsSpace;
