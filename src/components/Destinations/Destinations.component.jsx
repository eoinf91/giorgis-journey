import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

// Styles
import './Destinations.styles.scss';

// Components
import DestinationItem from './DestinationItem/DestinationItem.component';

const Destinations = () => {
    return (

        <StaticQuery
            query={graphql`
                query destinations {
                    allMarkdownRemark(filter: {fields: {collection: {eq: "destinations"}}}) {
                        edges {
                          node {
                            fields {
                              collection
                            }
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
            `}

            render={data => (
                <div className='destinations'>
                    <h2>Destinations</h2>
                    <div className='destination-list'>
                        {
                            data.allMarkdownRemark.edges.map(({ node }) => (
                                <DestinationItem
                                    title={node.frontmatter.title}
                                    description={node.frontmatter.title}
                                    slug={node.frontmatter.slug}
                                    image={node.frontmatter.featuredImage.childImageSharp.fluid}
                                />
                            ))
                        }
                    </div>
                </div>
            )}
        />


    )
};

export default Destinations;