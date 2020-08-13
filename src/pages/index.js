import React from "react";
import { graphql } from "gatsby";

// Components
import SEO from "../components/seo";
import ImageHeader from "../components/Header/ImageHeader/ImageHeader.component";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts.component";
import Subscription from "../components/Subscription/Subscription.component";
import Quote from "../components/Quote/Quote.component";
// import LightroomFeature from "../components/LightroomFeature/LightroomFeature.component";

const IndexPage = ({ data }) => {
  console.log(data);
  let featuredImgFluid =
    data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <>
      <SEO title="Home" />
      <ImageHeader
        sideTextContent={"Hey!"}
        title={data.markdownRemark.frontmatter.title}
        copy={data.markdownRemark.html}
        buttonCopy={"Learn More"}
        urlPath={"/about"}
        image={featuredImgFluid}
      />
      <FeaturedPosts />
      <Subscription />
      <Quote
        quote={"Be brave. Take risks. Nothing can substitute experience."}
        author={"Paulo Coelho"}
      />
      {/* <LightroomFeature /> */}
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Home"}}) {
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
  }
`;
