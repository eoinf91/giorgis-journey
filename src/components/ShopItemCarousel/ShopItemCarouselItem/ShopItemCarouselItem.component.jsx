import React from 'react';

// Styles
import './ShopItemCarouselItem.styles.scss';
import SideText from '../../SideText/SideText.component';

const ShopItemCarouselItem = () => (
    <div className='shop-item-carousel-comp'>
        <div className='shop-item-carousel-item'></div>
        <SideText content={'patagonia'} />
    </div>
)

export default ShopItemCarouselItem;