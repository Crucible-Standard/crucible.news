import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { style } from "./style";
const pkjson = require("../../package.json");

const FooterContainerStyle = styled.footer`
  position: relative;
  width: 100%;
  background: ${style.global.primary_accent_color};
  color: ${style.global.trinary_accent_color};
  text-align: center;
  margin: auto;
  padding-top: 1rem;

  h3 {
    color: ${style.global.trinary_accent_color};
  }
  p {
    color: ${style.global.trinary_accent_color};
  }
  a {
    text-decoration: none;
    color: ${style.global.trinary_accent_color};
  }
`;

const FooterTop = styled.div`
  width: 100%;
  font-size: 10px;
  color: ${style.global.trinary_accent_color};
  overflow: hidden;
  display: inline-block;

  h3 {
    color: ${style.global.trinary_accent_color};
  }
  p {
    color: ${style.global.trinary_accent_color};
  }
  a {
    text-decoration: none;
    color: ${style.global.trinary_accent_color};
  }

  @media only screen and (min-width: 768px) {
    margin-left: 25vw;
  }
`;

const FooterCol = styled.div`
  color: ${style.global.trinary_accent_color};
  display: inline-block;
  float: right;

  h3 {
    color: ${style.global.trinary_accent_color};
  }
  p {
    color: ${style.global.trinary_accent_color};
  }
  a {
    text-decoration: none;
    color: ${style.global.trinary_accent_color};
  }

  @media only screen and (min-width: 768px) {
    width: 12rem;
  }
`;

const FooterBot = styled.div`
  width: 100%;
  color: ${style.global.trinary_accent_color};
  position: reltative;
  display: inline-block;
  vertical-align: top;
  border-top: 1px solid ${style.global.trinary_accent_color};

  h3 {
    color: ${style.global.trinary_accent_color};
  }
  p {
    color: ${style.global.trinary_accent_color};
  }
  a {
    text-decoration: none;
    color: ${style.global.trinary_accent_color};
  }

  @media only screen and (min-width: 768px) {
    margin-left: 25vw;
  }
`;

const FooterCopy = styled.div`
  display: inline-block;
  float: left;
  padding: 1rem;
`;

const FooterVersion = styled.div`
  display: inline-block;
  float: right;
  padding: 1rem;
`;
const FooterHeadliners = styled.p`
  color: ${style.global.trinary_accent_color};
  font-size: 16px;
  font-weight: 900;
`;


const FooterWrapper = styled.div`
  width: 100%;
  font-size: 10px;
  color: ${style.global.trinary_accent_color};

  p {
    color: ${style.global.trinary_accent_color};
  }
  a {
    text-decoration: none;
    color: ${style.global.trinary_accent_color};
  }

  @media only screen and (min-width: 768px) {
    font-size: 12px;
    width: 50vw;
    max-width: 50vw;
  }
`;


/**
 * Some notes for my future self on what i am thinking about the footer.
 * Right now there are 3 categories of links common in footers for ecommerce sites.:
 * 1. Site logistics (terms of use, privacy policy, site map, etc)
 * 2. Site Interlinks (signup, about us, newsletter signup, etc)
 * 3. Brand Social Media (facebook, twitter, instagram, etc)
 * There is also a category of help / ecom support (contact us, faq, etc) a long with tracking orders and returns
 * Given our site is not actually selling products yet, those will be a later stage feature.
 */
const Footer = () => (
  <FooterContainerStyle>
    <FooterWrapper>
      <FooterTop>
        <FooterCol>
          <FooterHeadliners>About</FooterHeadliners>
          <p><a href="#">Corperate Information</a></p>
          <p><a href="#">Jobs</a></p>
          <p><a href="#">Media Relations</a></p>
          <p><a href="#">Sitemap</a></p>
        </FooterCol>
        <FooterCol>
          <FooterHeadliners>Legal</FooterHeadliners>
          <p><Link to='/faq'>FAQ</Link></p>
          <p><a href="#">Terms of Use</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Do Not Sell my Personal Information</a></p>
        </FooterCol>
      </FooterTop>
      <FooterBot>
        <FooterCopy>
          ©{new Date().getFullYear()} Crucible LLC. All Rights Reserved.
        </FooterCopy>
        <FooterVersion>
          v{pkjson.version}
        </FooterVersion>
      </FooterBot>
    </FooterWrapper>
  </FooterContainerStyle>
);

export default Footer
