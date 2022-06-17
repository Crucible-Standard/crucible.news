import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { style } from "../components/style";

const PreStyle = styled.div`
  width: 100%;
  margin: auto;
  margin-top: -2rem;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  background-color: #fff;

  p {

  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 50vw;
    min-height: 700px;
  }
`;

const Question = styled.p`
  font-size: 20px;
  font-weight: 900;
`;

const Answer = styled.p`

`;



const FAQPage = () => (
  <Layout>
		<SEO
			title="The Crucible Standard"
			description="The Crucible Standard - America's Second Most Trusted Source"
    />
    <PreStyle>
      <h1>The Crucible Standard</h1>
			<h2>FAQ</h2>
      <Question>Is this a REAL News Organization?</Question>
      <Answer>Isn't all main stream media fake?</Answer>
    </PreStyle>
  </Layout>
)

export default FAQPage
