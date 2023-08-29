import styled from "styled-components";
export const StyledAdSpace = styled.div`
  /* background-color: red; */
  margin: 2rem 0;
  text-align: center;
  color: #333;
  margin-right: 2rem;
  margin-left: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
export const StyledLatestAppsAdSpace = styled.div`
  /* background-color: red; */
  background-color: #dce6e9;
  margin: 2rem 0;
  text-align: center;
  color: #333;
  margin-right: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
export const StyledNav = styled.nav`
  background-size: cover;
  position: relative;
  background-color: #b30c07;
  background-repeat: no-repeat;
  font-family: sans-serif;
  font-size: 15px;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: block;
  width: 100%;
  padding: 0;
`;

export const StyledButtonLink = styled.a`
  background: #24b1e4;
  border-radius: 3px;
  font-family: sans-serif;
  transition: background-color 0.3s;
  float: left;
`;
export const StyledButtonLinkItem = styled.a`
  background-color: #2c9bc4;
  border-radius: 3px;
  color: #bf4f74;
  font-weight: bold;
  box-sizing: inherit;
  font-family: sans-serif;
`;
export const StyledSectionButton = styled.button`
  background-color: #09c2d8;
  color: #fff;
  padding: 0.4rem;
  line-height: 3.5;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding-right: 4rem;
  padding-left: 4rem;
  margin-left: 15rem;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.5px;
  -webkit-transition: 0.2s ease-out;
  -o-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  font-size: 15px;
  -webkit-text-size-adjust: 100%;
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  outline: 0;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  font-family: sans-serif;
`;
export const StyledCardBackground = styled.div`
  background: white;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: transform 0.3s ease;
  text-align: center;

  a {
    text-decoration: none;
    color: unset;
  }

  .app-icon {
    text-align: center;
    margin-bottom: 1em;

    img {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .app-name {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 0 0.4rem 0 !important;
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #111;
    font-weight: 600;
  }

  .price-disco {
    color: white;
    background: #54ae45;
    font-weight: 700;
    padding: 1px 3px;
    margin-right: 4px;
    top: -1px;
    position: relative;
    font-size: 0.8rem;
    display: inline-block;
  }
  .price-new {
    font-size: 0.9rem;
    color: #111;
    font-weight: 500;
    padding: 2px;
    display: inline-block;
  }
  .sale-item {
    padding: 1rem;
    display: block;
  }
  .card-panel {
    position: relative;
    margin: 0.5rem 0 1rem 0;
    border-radius: 2px;
    background-color: #fff;
    transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .app-dev {
    text-transform: uppercase;
    color: #999 !important;
    font-size: 0.8rem;
    line-height: 1.05;
    margin: 0 !important;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
  }
  .nav-item {
    transition: background-color 0.3s;
    float: left;
    padding: 0;
    list-style-type: none;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
  }
  text-decoration: none;
  font-family: sans-serif;
`;
export const StyledH2 = styled.h2`
  margin-top: 2.5rem;

  font-family: sans-serif;
  color: #b30c07;
  font-size: 2.5rem;
  margin: 1.25rem 0 1rem 0;
`;

export const StyledHighlightSection = styled.section`
  background-image: url("/images/highlights-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: sans-serif;
`;
export const StyledFreeAppsSection = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  font-family: sans-serif;
  background-image: url("/images/free-apps.jpg");
`;
export const StyledFreeAppsSectionH2 = styled.h2`
  color: white;
  font-weight: 300;
  font-family: sans-serif;
  font-size: 2rem;
  line-height: 110%;
  margin: 1.25rem 0 1rem 0;
`;
export const StyledForDevsDescription = styled.p`
  display: block;
  color: #f5f5f5 !important;
  font-family: sans-serif;
  line-height: 1.5;
`;
export const StyledLatestSalestSection = styled.section`
  background: #fafafa;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: sans-serif;
  border-bottom: 1px solid #dedede;
  /* padding: 4rem 0 1rem; */
  height: auto !important;
  margin-left: 3rem;
`;
export const StyledLatestSalestContainer = styled.div`
  margin: 0 auto;
`;
export const StyledFirstRowLatestSalesContainer = styled.div`
  /* margin-left: auto;
  float: left;
  padding: 0px 4.75rem;
  box-sizing: border-box; */
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;
export const StyledSecondtRowLatestSalesContainer = styled.div`
  height: auto !important;
  /* .col.l4 {
    width: 33.33333%;
    margin-left: auto;
  }
  box-sizing: border-box;
  padding: 0 0.75rem; */
`;
export const StyledSalesAndroidMainCont = styled.div``;

export const StyledSalesAndroidConCard = styled.div`
  margin-right: 2rem;
`;
export const StyledSalesAndroidCardAction = styled.div`
  #card-link {
    color: #ffab40;
    margin-left: 2rem;
    margin-bottom: 2rem;
    transition: color 0.3s ease;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const StyledSalesAndroidConAd = styled.div``;
export const StyledSalesAndroidCardActionLink = styled.a`
  /* padding: 3rem;
  margin: 3rem; */
`;
export const StyledForDevsLink = styled.p`
  color: white;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 500;
`;
export const StyledFooterBackground = styled.footer`
  background-image: url("/images/headerimage.jpg");
  margin-top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 20px;
  color: #f5f5f5 !important;
  font-family: sans-serif;
  background-color: #b30c07;
`;
export const StyledFooterHeaders = styled.h5`
  color: #ffffff !important;
  font-weight: 700;
  line-height: 110%;
  margin: 0.6rem 0 0.48rem 0;
  display: block;
  font-size: 1.2rem;
  line-height: 110%;
  margin: 0.6rem 0 0.48rem 0;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: sans-serif;
`;
export const StyledFooterContainerUl = styled.ul`
  padding: 0;
  list-style-type: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
export const StyledFooterContent = styled.p`
  color: #f5f5f5 !important;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: sans-serif;
`;
export const StyledCopyrightBackground = styled.div`
  /* background-color: #850a06;
  font-weight: 300;
  margin-top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 20px;
  color: #f5f5f5 !important;
  font-family: sans-serif; */
  ::after,
  ::before {
    box-sizing: border-box;
  }
  :after,
  :before {
    box-sizing: inherit;
  }
  background-color: rgba(51, 51, 51, 0.3);
  height: auto;
  font-weight: 300;
  overflow: hidden;
  line-height: 50px;
  color: rgba(255, 255, 255, 0.8);
`;
export const StyledFooterListings = styled.li`
  color: #f5f5f5 !important;
  font-family: sans-serif;
`;
export const StyledNavUlLiA = styled.a`
  text-transform: uppercase;
  transition: background-color 0.3s;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  height: 100%;
`;
export const StyledNavLinkUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: block;
`;
export const StyledNavLinkLi = styled.li`
  float: left;
  padding: 0.6em 0.2em;
  text-transform: uppercase;
  border-bottom: 3px solid transparent;
  height: 100%;

  &:hover,
  &.active {
    background-color: #a1110c;
    border-bottom: 3px solid white;
  }
`;
export const StyledCopyrightListings = styled.a`
  color: #f5f5f5 !important;
  text-decoration: none;
  font-family: sans-serif;
`;
export const StyledForDevsSection = styled.section`
  background-color: #444;
  border-bottom: 1px solid #dedede;
  padding: 2rem 0 1rem;
  border-bottom: 1px solid #dedede;
  padding: 2rem 0 1rem;
`;
export const StyledForDevsSectionContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  max-width: 1280px;
`;
export const StyledForDevsSectionRow = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-bottom: 20px;
`;
export const StyledForDevsSectionFirstCol = styled.div`
  width: 33.33333%;
  margin-left: auto;
  float: left;
  padding: 0 2.75rem;
  box-sizing: border-box;
`;
export const StyledForDevsSectionSecCol = styled.div`
  width: 66.66667%;
  margin-left: auto;
  float: left;
  padding: 0 0.75rem;
  box-sizing: border-box;
`;
export const StyledFooterContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  max-width: 1280px;
  font-size: 15px;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
`;
export const StyledFooterContainerRow = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  font-size: 15px;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  display: flex;
`;
export const StyledFooterContainerFirstCol = styled.div`
  width: 100%;
  margin-left: auto;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
`;
export const StyledCopyrightContainerFirstCol = styled.p`
  // background-color: blue;
  font-size: 11px;
  letter-spacing: 0;
`;
export const StyledCopyrightContainerSecondCol = styled.div`
  // background-color: black;
  #chooseLanguage {
    text-transform: uppercase;
    font-size: 10px;
    font-family: sans-serif;
  }
  #usa-flag {
    height: 20px;
    width: 30px;
    margin-right: 8px;
    margin-top: 23px;
  }
  position: relative;
  display: flex;
  font-family: sans-serif;
  font-weight: 300;
`;
export const StyledCopyrightContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
`;
export const StyledFooterContainerSecondCol = styled.div`
  margin-left: 5rem;
  width: 33.33333%;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  font-size: 15px;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
`;
export const StyledForDevsCardPanel = styled.div`
  background-image: url("/images/image_highlights.jpg");
  height: 288px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  position: relative;
  transition: box-shadow 0.1s, -webkit-box-shadow 0.1s;
  padding: 20px;
  margin: 0.5rem 0 1rem 0;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
export const LogoImage = styled.img`
  max-height: 100%;
  padding: 16px 0 12px;
  border: 0;
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;
  white-space: nowrap;
`;
