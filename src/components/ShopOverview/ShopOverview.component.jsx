import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Components
import ShopOverviewItem from './ShopOverviewItem/ShopOverviewItem.component';

// Styles
import './ShopOverview.styles.scss';

const ShopOverview = () => {
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              description
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  return (
    <div className='shop-overview'>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, description, title, images: [firstImage], variants: [firstVariant] } }) => (
          <ShopOverviewItem
            key={id}
            title={title}
            url={`/shop/product/${handle}`}
            excerpt={description}
            image={firstImage.localFile.childImageSharp.fluid}
          />
        ))
        : <p>No Products found!</p>}
    </div>
  )
}

export default ShopOverview;