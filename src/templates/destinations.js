import React from 'react';
import { graphql } from 'gatsby';

// Components
import FancyTitle from '../components/FancyTitle/FancyTitle.component';
import Country from '../components/Country/Country.component';
import SEO from '../components/seo';

// Styles
import './destinations.styles.scss';

export default ({ data }) => {

  return (
    <>
      <SEO title={`Destination: ${data.markdownRemark.frontmatter.title}`} />
      <FancyTitle content={data.markdownRemark.frontmatter.title} />
      <div>
        {
          data.allMarkdownRemark.group.map(({ tag, edges }) => (
            <Country country={tag} edges={edges} />

          ))
        }
        {/* */}
        {/* {
                    data.allMarkdownRemark.edges.map(({node}) => (
                        <Country continent={node.frontmatter.country} />
                    ))
                } */}
        {/* <Country continent={post.frontmatter.continentId} /> */}
      </div>
    </>
  )
}

export const query = graphql`
    query DestinationsQuery($slug: String!) {
        allMarkdownRemark(filter: {frontmatter: {slug: {regex: $slug}}}, sort: {order: ASC, fields: id}) {
            group(field: frontmatter___tags) {
              tag: fieldValue
              totalCount
              edges {
                node {
                  excerpt
                  frontmatter {
                    title
                    slug
                    featuredImage {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
              title
            }
          }
    }
`