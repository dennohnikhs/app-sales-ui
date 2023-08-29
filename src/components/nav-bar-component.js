import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  StyledNav,
  StyledButtonLink,
  StyledNavUlLiA,
  StyledNavLinkUl,
  StyledNavLinkLi,
  LogoImage,
} from "@/styled-components";

const Navbar = () => {
  return (
    <StyledNav id="nav" className="navbar navbar-expand-lg ">
      <div className="nav-wrapper container">
        <a href="/" className="navbar-brand pt-0 pb-0">
          <LogoImage
            src="/images/appsales_logo_claim.jpeg"
            alt="App sales logo"
          />
        </a>
        <StyledNavLinkUl className="navbar-nav">
          <div className=" navbar-collapse" id="navbarNav">
            <StyledNavLinkLi className="nav-item active">
              <StyledNavUlLiA className="nav-link  text text-light " href="/">
                Home
              </StyledNavUlLiA>
            </StyledNavLinkLi>
            <StyledNavLinkLi className="nav-item ">
              <StyledNavUlLiA
                className="nav-link active text text-light"
                href="/highlights/"
              >
                Highlights
              </StyledNavUlLiA>
            </StyledNavLinkLi>
            <StyledNavLinkLi className="nav-item ">
              <StyledNavUlLiA
                className="nav-link active text text-light"
                href="/activesales/"
              >
                Active Sales
              </StyledNavUlLiA>
            </StyledNavLinkLi>
            <StyledNavLinkLi className="nav-item ">
              <StyledNavUlLiA
                className="nav-link active text text-light"
                href="/nowfree/"
              >
                Now Free
              </StyledNavUlLiA>
            </StyledNavLinkLi>
            <StyledNavLinkLi className="nav-item ">
              <StyledNavUlLiA
                className="nav-link active text text-light"
                href="/mostwanted/"
              >
                Charts
              </StyledNavUlLiA>
            </StyledNavLinkLi>
            <StyledNavLinkLi className="nav-item ">
              <StyledNavUlLiA
                className="nav-link active text text-light"
                href="/developer.html"
              >
                For Devs
              </StyledNavUlLiA>
            </StyledNavLinkLi>
            <li className="nav-item ">
              <StyledButtonLink
                className="nav-link active text text-light"
                href="/getapp.html"
              >
                <b>OUR APP</b>
              </StyledButtonLink>
            </li>
          </div>
        </StyledNavLinkUl>
      </div>
    </StyledNav>
  );
};

export default Navbar;
