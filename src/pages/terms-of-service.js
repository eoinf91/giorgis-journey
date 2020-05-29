import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';

// Styles
import './terms.styles.scss';

const termsOfService = ({ data }) => (
    <>
        <SEO title={data.markdownRemark.frontmatter.title} />
        <div className='terms' dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </>
)

export default termsOfService;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Terms of Service"}}) {
      frontmatter {
        slug
        title
        heading
      }
      html
      excerpt
      id
    }
  }
`