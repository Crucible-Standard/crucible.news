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
  max-witdh: 36rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 36rem;
  }
`;

const FinancePage = () => (
  <Layout>
		<SEO
			title="The Crucible Standard - Finance - Markets"
			description="The Crucible Standard - Finance - Markets"
    />
    <PreStyle>
			<h2>The Crucible Standard</h2>
			<p><br /></p>
			<h1>Finance - Markets</h1>
			<p><br /></p>
			<p><br /></p>
	  </PreStyle>
  </Layout>
)

export default FinancePage
