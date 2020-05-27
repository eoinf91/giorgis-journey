import React from 'react';
import { graphql } from 'gatsby';

// Components
import SEO from '../components/seo';
import ImageHeader from '../components/Header/ImageHeader/ImageHeader.component';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts.component';
import Quote from '../components/Quote/Quote.component';
import Destinations from '../components/Destinations/Destinations.component';
import LargePara from '../components/LargePara/LargePara.component';

// Styles
import './blog.styles.scss';

const BlogOverview = ({ data }) => (
    <>
        <SEO title="Blog" />
        <div className='blog'>
            <ImageHeader
                sideTextContent={'blog'}
                title={data.markdownRemark.frontmatter.title}
                copy={data.markdownRemark.html}
                image={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}
            />
            <FeaturedPosts />
            <Quote
                quote={'They say home is where the heart is, but my heart is wild and free. So am I homeless or just heartless?'}
                author={'Passenger'}
            />
            <Destinations />
            <LargePara
                content={data.quote.html}
            />
        </div>
    </>
)

export default BlogOverview;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Blog"}}) {
      frontmatter {
        slug
        title
        heading
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      excerpt
      id
    }
    quote: markdownRemark(frontmatter: {title: {eq: "Blog LQ"}}) {
      html
    }
  }
`