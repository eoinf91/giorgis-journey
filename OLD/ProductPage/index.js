import React from 'react'
import { graphql } from 'gatsby'

import ShopItemHeader from '../../components/ShopItemHeader/ShopItemHeader.component';
import ShopItemCarousel from '../../components/ShopItemCarousel/ShopItemCarousel.component';
import SEO from '~/components/seo'

// Styles
import './shop-item.styles.scss';

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  console.log(product.images)
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <div className='shop-item-template'>
        <ShopItemHeader
          product={product}
          name={product.title}
          price={product.priceRange.maxVariantPrice.amount}
          content={product.description}
          productHandle={product.handle}
          featuredImage={product.images[1].localFile.childImageSharp.fluid}
        />
        {product.images.length > 3
          ? <ShopItemCarousel
            carImageOne={product.images[2].localFile.childImageSharp.fluid}
            carImageTwo={product.images[3].localFile.childImageSharp.fluid}
            carImageThree={product.images[4].localFile.childImageSharp.fluid}
            carImageFour={product.images[5].localFile.childImageSharp.fluid}
            carImageFive={product.images[6].localFile.childImageSharp.fluid}
          />
          : null
        }
      </div>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
