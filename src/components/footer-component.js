import {
  StyledFooterHeaders,
  StyledFooterBackground,
  StyledFooterContent,
  StyledFooterListings,
  StyledFooterContainer,
  StyledFooterContainerRow,
  StyledFooterContainerFirstCol,
  StyledFooterContainerSecondCol,
  StyledFooterContainerUl,
} from "@/styled-components";
import React from "react";
import Copyright from "./copyright-component";

const Footer = () => {
  return (
    <StyledFooterBackground className="page-footer">
      <StyledFooterContainer className="container">
        <StyledFooterContainerRow className="row">
          <StyledFooterContainerFirstCol className="col l6 s12">
            <StyledFooterHeaders className="white-text">
              About AppSales
            </StyledFooterHeaders>
            <StyledFooterContent className="grey-text text-lighten-4">
              Discover the best sales and temporary free apps on Google Play.
              Our free Android app is the #1 sale tracker with more than
              1.000.000 downloads.
            </StyledFooterContent>
          </StyledFooterContainerFirstCol>
          <StyledFooterContainerSecondCol className="col l4 offset-l2 s12">
            <StyledFooterHeaders className="white-text">
              More Apps
            </StyledFooterHeaders>
            <StyledFooterContainerUl>
              <li>
                <StyledFooterListings
                  className="grey-text text-lighten-3"
                  href="https://play.google.com/store/apps/details?id=com.appsfree.android"
                >
                  AppsFree
                </StyledFooterListings>
              </li>
              <li>
                <StyledFooterListings
                  className="grey-text text-lighten-3"
                  href="http://www.contextualappfolder.com/"
                >
                  Contextual App Folder
                </StyledFooterListings>
              </li>
              <li>
                <StyledFooterListings
                  className="grey-text text-lighten-3"
                  href="https://play.google.com/store/apps/details?id=com.tsapps.aycon"
                >
                  Aycon
                </StyledFooterListings>
              </li>
            </StyledFooterContainerUl>
          </StyledFooterContainerSecondCol>
        </StyledFooterContainerRow>
      </StyledFooterContainer>

      <Copyright />
    </StyledFooterBackground>
  );
};

export default Footer;
