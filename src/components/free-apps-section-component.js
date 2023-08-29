import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  StyledSectionButton,
  StyledFreeAppsSection,
  StyledFreeAppsSectionH2,
} from "../styled-components";
import FeaturedApps from "./featured-apps-component";

const FreeAppsSection = () => {
  return (
    <StyledFreeAppsSection>
      <Container>
        <Row>
          <Col>
            <StyledFreeAppsSectionH2 className="col-12">
              These apps are temporarily free!
            </StyledFreeAppsSectionH2>
            <FeaturedApps />

            <div className="col-12 section-buttons">
              <StyledSectionButton href="/activesales/">
                EXPLORE ALL FREE APPS
              </StyledSectionButton>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledFreeAppsSection>
  );
};

export default FreeAppsSection;
