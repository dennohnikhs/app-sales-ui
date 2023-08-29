"use client";
import React from "react";
import CookieConsent from "@/components/cookie-consent-component";
// import AdSpace from "@/components/ads-component";
import Navbar from "@/components/nav-bar-component";
import HighlightsSection from "@/components/hightlights-section-component";
import LatestSalesSection from "@/components/latest-sales-section-component";
import FreeAppsSection from "@/components/free-apps-section-component";
import Footer from "@/components/footer-component";
import ForDevsSection from "@/components/for-devs-section-component";
import AdComponent from "@/components/ads-component";
// import Copyright from "@/components/copyright-component";

const App = () => {
  return (
    <div className="App">
      <CookieConsent />
      {/* <AdSpace /> */}
      <AdComponent />
      <Navbar />
      <HighlightsSection />
      <ForDevsSection />
      <LatestSalesSection />
      <FreeAppsSection />
      <Footer />
      {/* <Copyright /> */}
    </div>
  );
};

export default App;
