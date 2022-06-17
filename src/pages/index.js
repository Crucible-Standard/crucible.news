import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PreStyle = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  max-witdh: 75vh;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    min-height: 700px;
    max-witdh: 100vh;
  }
`;

const IndexPage = () => (
  <Layout>
		<SEO
			title="The Crucible Standard"
			description="The Crucible Standard"
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
