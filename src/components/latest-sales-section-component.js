import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  StyledSectionButton,
  StyledLatestSalestSection,
  StyledH2,
  StyledLatestSalestContainer,
  StyledFirstRowLatestSalesContainer,
  StyledSecondtRowLatestSalesContainer,
} from "../styled-components";
import LatestAppsFeaturedApps from "./featured-latest-aps-component";
import AppSalesCard from "./app-sales-android-component";

const LatestSalesSection = () => {
  return (
    <StyledLatestSalestSection>
      <StyledLatestSalestContainer className="flex flex-wrap">
        {/* <StyledH2>Latest Sales</StyledH2> */}
        <StyledFirstRowLatestSalesContainer className="lg:w-[60%]">
          <LatestAppsFeaturedApps />
        </StyledFirstRowLatestSalesContainer>
        <StyledSecondtRowLatestSalesContainer className="lg:w-[40%]">
          <StyledH2>AppSales Android</StyledH2>
          <AppSalesCard />
        </StyledSecondtRowLatestSalesContainer>
      </StyledLatestSalestContainer>
      <div className="section-buttons">
        <StyledSectionButton href="/activesales/">
          EXPLORE ALL SALES
        </StyledSectionButton>
      </div>
    </StyledLatestSalestSection>
  );
};

export default LatestSalesSection;
