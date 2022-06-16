import React from "react";
import PropTypes from "prop-types";
import styled,{ createGlobalStyle }  from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";

import Header from "./header";
import Footer from "./footer";

import "./layout.css";

const GLOBAL_BACKGROUND_COLOR       = "#FDFAF5";
const GLOBAL_LINK_COLOR             = "#FE7E6D";
const GLOBAL_VLINK_COLOR            = "#CCD1E4";
const GLOBAL_HLINK_COLOR            = "#CCD1E4";
const GLOBAL_TEXT_COLOR             = "#323232";
const GLOBAL_PRIMARY_ACCENT_COLOR   = "#2F3A8F";
const GLOBAL_SECONDARY_ACCENT_COLOR = "#FE7E6D";
const GLOBAL_TRINARY_ACCENT_COLOR   = "#CCD1E4";
const GLOBAL_PRIMARY_FONT_FAMILY    = `"Didot"` ;
const GLOBAL_SECONDARY_FONT_FAMILY  = `"Didot"`;
const GLOBAL_FONT_FAMILY            = `'Helvetica Neue', Helvetica, Arial, serif`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${GLOBAL_BACKGROUND_COLOR};
  }
`;

const LayoutContainerStyle = styled.div`
  width: 100%;
  font-family: ${GLOBAL_FONT_FAMILY};
  background-color: ${GLOBAL_BACKGROUND_COLOR};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;

  p {
    text-align: justify;
    text-justify: inter-word;
    text-indent: 1.5rem;
  }

  .accent {
    color: ${GLOBAL_PRIMARY_ACCENT_COLOR};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${GLOBAL_FONT_FAMILY};
    color: ${GLOBAL_TEXT_COLOR};
    font-weight: 700;
    text-shadow: 0 0 2px rgba(100,100,100,0.5);
  }

  h1 {
    font-family: ${GLOBAL_PRIMARY_FONT_FAMILY};
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: ${GLOBAL_LINK_COLOR};
  }

  a:hover {
    color: ${GLOBAL_HLINK_COLOR};
  }

  a:visited {
    color: ${GLOBAL_VLINK_COLOR};
  }
`;

const LayoutStyle = styled.div`
  width: 100%;
  background-color: ${GLOBAL_BACKGROUND_COLOR};
  font-size: 16px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <CookiesProvider>
      <GlobalStyle/>
      <LayoutContainerStyle>
        <LayoutStyle>
          <Header/>
            <main>{children}</main>
          <Footer/>
        </LayoutStyle>
      </LayoutContainerStyle>
    </CookiesProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
