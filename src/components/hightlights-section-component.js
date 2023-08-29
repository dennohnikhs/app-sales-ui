import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  StyledSectionButton,
  StyledHighlightSection,
  StyledH2,
} from "../styled-components";
import FeaturedApps from "./featured-apps-component";

const HighlightsSection = () => {
  return (
    <StyledHighlightSection>
      <Container>
        <Row>
          <Col>
            <StyledH2 className="col-12">Highlights</StyledH2>
            <FeaturedApps />

            <div className="col-12 section-buttons">
              <StyledSectionButton href="/highlights/">
                EXPLORE ALL HIGHLIGHTS
              </StyledSectionButton>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledHighlightSection>
  );
};

export default HighlightsSection;
