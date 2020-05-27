import React from "react"
import Img from 'gatsby-image';

// Components
import ProductForm from '../ProductForm/index';

// Styles
import './ShopItemHeader.styles.scss';


function ShopItemHeader({ product, name, price, content, featuredImage, productHandle }) {

    return (
        <div className='shop-item-header'>
            {featuredImage
                ? <Img className='shop-item-header-image' fluid={featuredImage} />
                : <div className='shop-item-header-image'></div>
            }
            <div className='shop-item-content'>
                <h2>{name}</h2>
                <h4>€{price}</h4>
                <p>{content}</p>
                <ProductForm product={product} />
            </div>
        </div>
    );
}

export default ShopItemHeader