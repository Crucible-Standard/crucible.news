import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { style } from "./style";

const LogoStyle = styled.div`
	position: absolute;
	width: 90px;
	height: 90px;
	overflow: hidden;
	border: 3px solid #FFFFFF;
	background: ${style.global.primary_accent_color};
	z-index: 2;

	p {
		display: block;
		margin: 0;
		width: 100%;
		height: 68px;
		text-align: right;
		line-height: 1.4rem;
		font-size: 1.05rem;
		color: #FFFFFF;
		font-family: ${style.global.primary_font_family};
		font-weight: 900;
	}
`;

const InfoStyle = styled.div`
	display: block;
	height: 22px;
	border: 3px solid #FFFFFF;
	margin-left: -3px;
	text-align: center;
	width: 90px;
	background: ${style.global.secondary_accent_color};

	p {
		display: block;
		width: 100%;
		margin-top: 1px;
		font-size: 1.1rem;
		color: #FFFFFF;
		text-align: center;
		font-weight: 900;
		text-indent: 0;
		font-family: Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
	}
`;


const Logo = ({ info }) => {
  return (
  <LogoStyle>
		<p>The Crucible Standard</p>
		<InfoStyle><p>LIVE</p></InfoStyle>
  </LogoStyle>
)
};

Logo.propTypes = {
  info: PropTypes.string,
}

Logo.defaultProps = {
  info: `LIVE`,
}

export default Logo