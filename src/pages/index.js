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

const IndexPage = () => (
  <Layout>
		<SEO
			title="The Crucible Standard"
			description="The Crucible Standard - America's Second Most Trusted Source"
    />
    <PreStyle>
      <h1>The Crucible Standard</h1>
			<h2>Index</h2>
			<p><br /></p>
			<p><br /></p>
			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default IndexPage
