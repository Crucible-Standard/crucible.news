import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ViewPortWrapper = styled.div`
  height: 77vh;
  margin: 0;
  overflow-y: hidden;

  @media only screen and (min-width: 768px) {
    height: 97vh;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title=""
      description=""
    />
    <ViewPortWrapper>

    </ViewPortWrapper>
  </Layout>
)

export default IndexPage
