import React from "react"
import { graphql } from 'gatsby';

// Components
import SEO from "../components/seo"
import ImageHeader from '../components/Header/ImageHeader/ImageHeader.component';
import Quote from '../components/Quote/Quote.component';
import LargePara from '../components/LargePara/LargePara.component';
import Contact from '../components/Contact/Contact.component';

const AboutPage = ({ data }) => (
    <>
        <SEO title="About" />
        <ImageHeader
            sideTextContent={'About me'}
            title={data.markdownRemark.frontmatter.title}
            copy={data.markdownRemark.html}
            image={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <Quote
            quote={'I am not an adventurer by choice but by fate, and feeling nowhere so much myself a stranger as in my own country.'}
            author={'Van Gogh'}
        />
        <LargePara
            content={data.quote.html}
        />
        <Contact />
    </>
)

export default AboutPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "About"}}) {
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
    quote:markdownRemark(frontmatter: {title: {eq: "About LQ"}}) {
      html
    }
  }
`