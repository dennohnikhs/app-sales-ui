import React from "react";
import {
  StyledCopyrightBackground,
  StyledCopyrightListings,
  StyledCopyrightContainer,
  StyledCopyrightContainerFirstCol,
  StyledCopyrightContainerSecondCol,
} from "../styled-components";

const Copyright = () => {
  return (
    <StyledCopyrightBackground className="footer-copyright">
      <StyledCopyrightContainer className="container">
        <StyledCopyrightContainerFirstCol className="left">
          © 2018 Copyright TS-Apps |{" "}
          <StyledCopyrightListings
            className="grey-text text-lighten-4"
            href="/impressum.html"
          >
            Impressum
          </StyledCopyrightListings>{" "}
          |{" "}
          <StyledCopyrightListings
            className="grey-text text-lighten-4"
            href="/privacypolicy.html"
          >
            Privacy Policy
          </StyledCopyrightListings>
        </StyledCopyrightContainerFirstCol>

        <StyledCopyrightContainerSecondCol className="right">
          <img id="usa-flag" src="/images/usa_flag.jpg" alt="US Flag" />

          <button
            className="btn-flat waves-effect grey-text text-lighten-4"
            id="chooseLanguage"
          >
            {" "}
            <span id="currencyName">USD</span> | Change currency
          </button>
        </StyledCopyrightContainerSecondCol>
      </StyledCopyrightContainer>
    </StyledCopyrightBackground>
  );
};

export default Copyright;
