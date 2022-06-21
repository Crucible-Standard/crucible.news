import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { style } from "./style";
import Logo from "./logo";

const HeaderContainerStyle = styled.div`
  width: 100%;
  height: 50px;
  border-top: 3px solid ${style.global.secondary_accent_color};
  background: ${style.global.primary_accent_color};
`;

const HeaderStyle = styled.div`
  background: ${style.global.primary_accent_color};
  width: 100%;
`;

const HeaderLogoContainerStyle = styled.div`
  width: 100px;
  height: 96px;
  margin-top: 5px;
  margin-left: -45px;
  z-index: 2;
`;

const NavStyle = styled.nav`
  font-family: ${style.global.font_family};
  line-height: 1.1 rem;
  width: 100%;
  font-size: 10px;
  margin: auto;
  height: 100%;
  color: #FEECE9;

  .active {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: #FEECE9;
    height: 97px;
  }

  ul {
    position: relative;
    top: -80px;
    left: 75px;
    height: 97px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    height: 97px;
    padding: 1rem;
    display: inline;
    font-weight: 900;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 50vw;
    li {
      padding: 2rem;
    }
  }
`;

const Header = ({ siteTitle }) => {
  return (
   <HeaderContainerStyle>
    <HeaderStyle>
      <NavStyle>
        <HeaderLogoContainerStyle>
          <Logo />
        </HeaderLogoContainerStyle>
        <ul>
          <li><Link to='/'>News</Link></li>
          <li><Link to='/finance'>Finance</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
        </ul>
      </NavStyle>
    </HeaderStyle>
   </HeaderContainerStyle>
)
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `crucible.news - your trusted source for news`,
}

export default Header
