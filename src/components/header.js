import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StoreContext } from "../context/store-context"
import { style } from "./style";

const HeaderContainerStyle = styled.div`
  position: relative;
  top: 0;
  position: sticky;
  height: 50px;
  border-top: 5px solid #FE7E6D;
  background: ${style.global.primary_accent_color};
  color: ${style.global.trinary_accent_color};
`;

const HeaderStyle = styled.div`
  background: ${style.global.primary_accent_color};
  width: 100%;
  height: 100%;
  color: ${style.global.trinary_accent_color};

  a {
    text-decoration: none;
    color: ${style.global.trinary_accent_color};
  }
`;

const NavStyle = styled.nav`
  color: ${style.global.trinary_accent_color};
  font-family: ${style.global.font_family};
  line-height: 1.1 rem;
  width: 100%;
  font-size: 10px;
  margin: auto;
  padding-left: 20vw;

  .active {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: #FEECE9;
  }

  ul {
    position: absolute;
    top: 20px;
    height: 50px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 1rem;
    display: inline;
    font-weight: 900;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 50vw;
    padding-left: 15vw;
    li {
      padding: 2rem;
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 5px;
  left: 2rem;
  width: 90px;
  height: 90px;
  border-radius: 50%;

  @media only screen and (min-width: 768px) {
    position: relative;
    top: -20px;
    left: 20vw;
    width: 180px;
    height: 180px;
  }
`;

const Header = ({ siteTitle }) => {
  return (
   <HeaderContainerStyle>
    <HeaderStyle>
     <Logo src="https://raw.githubusercontent.com/BeauBouchard/BeauBouchard/main/assets/media/images/logos/crucible.png" />
      <NavStyle>
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
