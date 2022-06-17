import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StoreContext } from "../context/store-context"
import { style } from "./style";

const HeaderContainerStyle = styled.div`
  position: relative;
  height: 50px;
  border-top: 5px solid #FE7E6D;
  background: ${style.global.primary_accent_color};
  top: 0;
  position: sticky;
`;

const HeaderStyle = styled.div`
  background: ${style.global.primary_accent_color};
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    color: #FEECE9;
  }

  nav {
    min-width: 50vw;
    font-family: ${style.global.font_family};
    line-height: 1.1 rem;
  }
`;

const NavStyle = styled.nav`
  width: 100%;
  font-size: 10px;
  margin: auto;
  overflow: hidden;
  padding-left: 5vw;

  .active {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: #FEECE9;
  }

  ul {
    margin: 0;
    margin-top:20px;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline;
    font-weight: 900;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 50vw;
    li {
      padding: 0.85rem;
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 5px;
  left: 23vw;
  border-radius: 50%;
  width: 90px;
  height: 90px;
`;

const Header = ({ siteTitle }) => {
  return (
   <HeaderContainerStyle>
    <HeaderStyle>
      <NavStyle>
        <ul>
          <li><Logo src="https://raw.githubusercontent.com/BeauBouchard/BeauBouchard/main/assets/media/images/logos/crucible.png" /></li>
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
