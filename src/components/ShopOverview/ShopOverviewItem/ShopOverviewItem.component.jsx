import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// Styles
import './ShopOverviewItem.styles.scss';

const ShopOverviewItem = ({ title, url, excerpt, image }) => (
    <div className='shop-overview-item'>
        {image
            ? <Img className='preset-image' fluid={image} />
            : <div className='preset-image'></div>
        }
        <div className='preset-content'>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <Link to={url} className='cta'>Find out more</Link>
        </div>
    </div>
)

export default ShopOverviewItem;