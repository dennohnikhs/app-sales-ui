import {
  StyledForDevsDescription,
  StyledForDevsSection,
  StyledForDevsCardPanel,
  StyledFreeAppsSectionH2,
  StyledForDevsSectionContainer,
  StyledForDevsSectionRow,
  StyledForDevsSectionFirstCol,
  StyledForDevsSectionSecCol,
  StyledForDevsLink,
} from "@/styled-components";
import React from "react";

const ForDevsSection = () => {
  return (
    <StyledForDevsSection id="fordevs">
      <StyledForDevsSectionContainer className="container">
        <StyledForDevsSectionRow className="row">
          <StyledForDevsSectionFirstCol className="col s12 l4">
            <StyledForDevsCardPanel className="card-panel image-panel"></StyledForDevsCardPanel>
          </StyledForDevsSectionFirstCol>
          <StyledForDevsSectionSecCol className="col s12 l8">
            <StyledFreeAppsSectionH2>
              Get your App listed on AppSales
            </StyledFreeAppsSectionH2>
            <StyledForDevsDescription>
              <strong>
                Got a paid Android app you want to promote through a limited
                time sale?
              </strong>
              <br />
              Check out our minimum requirements and find out how to get your
              app listed on our app and website:
              <br />
              <StyledForDevsLink href="/developer.html">
                How to get your App listed – Information for Developers and
                Publishers
              </StyledForDevsLink>
              &nbsp;&nbsp;
            </StyledForDevsDescription>
          </StyledForDevsSectionSecCol>
        </StyledForDevsSectionRow>
      </StyledForDevsSectionContainer>
    </StyledForDevsSection>
  );
};

export default ForDevsSection;
