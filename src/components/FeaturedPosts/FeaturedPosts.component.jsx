import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

// Styles
import './FeaturedPosts.styles.scss';

// Components
import PostPreview from '../PostPreview/PostPreview.component';
import SideText from '../SideText/SideText.component';

const FeaturedPosts = () => {

    return (
        <StaticQuery
            query={graphql`
                query featuredPosts {
                    allMarkdownRemark(filter: {frontmatter: {isFeature: {eq: "Yes"}}}) {
                        edges {
                          node {
                              excerpt
                            frontmatter {
                              title
                              country
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

                <div className='featured-posts'>
                    <div className='featured-posts-bg'></div>
                    <h2>Featured Posts</h2>
                    <div className='overflow-container'>
                        <div className='flex-container'>
                            {
                                data.allMarkdownRemark.edges.map(({ node }) => (
                                    <PostPreview
                                        title={node.frontmatter.title}
                                        slug={node.frontmatter.slug}
                                        excerpt={node.excerpt}
                                        image={node.frontmatter.featuredImage.childImageSharp.fluid}
                                    />
                                ))
                            }

                            <SideText content={'blog'} />
                        </div>
                    </div>

                </div>

            )}
        />
    )
}

export default FeaturedPosts;