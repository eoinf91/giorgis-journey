import React from 'react';
import { graphql } from 'gatsby';

// Components
import ImageHeader from '../components/Header/ImageHeader/ImageHeader.component';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts.component';
import Destinations from '../components/Destinations/Destinations.component';
import SEO from '../components/seo';

// Styles
import './blog-post.styles.scss';

export default ({ data }) => {
    const post = data.markdownRemark;

    return (
        <>
            <SEO title={`${post.frontmatter.title} | ${post.frontmatter.country} | Destinations`} />
            <div className='posts'>
                <ImageHeader
                    sideTextContent={'posts'}
                    postTitle={post.frontmatter.title}
                    image={post.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <div className='post-content' dangerouslySetInnerHTML={{ __html: post.html }}>

                </div>
                <FeaturedPosts background={'hidden'} />
                <Destinations />
            </div>
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                country
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
`