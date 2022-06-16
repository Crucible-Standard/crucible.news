import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { StoreContext } from "../context/store-context"


const HeaderContainerStyle = styled.div`
  position: relative;
  text-align: center;
  border-bottom: thin solid rgb(223, 216, 202);
  top: 0;
  position: sticky;
  z-index: 10;
  background: inherit;
`;

const HeaderStyle = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: #105652;
  }
  nav {
    margin: auto;
    font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
    line-height: 1.1 rem;
    text-shadow: 0 0 2px rgba(100,100,100,0.5);
  }
`;

const NavStyle = styled.nav`
  width: 100%;
  font-size: 10px;
  margin: auto;
  overflow: hidden;
  .active {
    text-decoration: underline;
  }
  ul {
    margin: 0;
    margin-top:1rem;
    padding: 0;
    list-style: none;
  }
  li {
    padding: 0.3rem;
    display:inline;
    span {
      color: #B91646;
    }
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
    li {
      padding: 0.85rem;
    }
  }
`;

const Logo = styled.span`
  color: #B91646;
  font-family: 'Amatic SC';
  font-weight: 700;
  font-size: 3rem;
`;



const Header = ({ siteTitle }) => {
  return (
   <HeaderContainerStyle>
    <HeaderStyle>
      <NavStyle>
        <ul>
          <li><Link to='/'><Logo>news</Logo></Link></li>
          <li><span>|</span></li>
          <li><Link to='/about'>All About Us</Link></li>
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