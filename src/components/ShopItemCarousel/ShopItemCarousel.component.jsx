import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import Img from 'gatsby-image';

// Styles
import './ShopItemCarousel.styles.scss';

// Components
import ShopItemCarouselItem from './ShopItemCarouselItem/ShopItemCarouselItem.component';

// Assets
import Arrow from '../../Assets/arrows.svg';

class ShopItemCarousel extends React.Component {

    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 400, itemsToShow: 1 },
            { width: 1000, itemsToShow: 1 }
        ]
    }

    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <img src={Arrow} alt='back' /> : <img src={Arrow} alt='next' className='flipped' />
        return (
            <button onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    render() {
        return (
            <div className='shop-item-carousel'>
                <h2>This Pack's Presets</h2>
                <div className='shop-item-carousel-carousel'>
                    <Carousel
                        breakPoints={this.breakPoints}
                        pagination={false}
                        renderArrow={this.myArrow}
                    >
                        <div className='carousel-item'>
                            <Img className='post-preview-image' fluid={this.props.carImageOne} />
                            <p className="preset-name">light sky</p>
                        </div>
                        <div className='carousel-item'>
                            <Img className='post-preview-image' fluid={this.props.carImageTwo} />
                            <p className="preset-name">underwater</p>
                        </div>
                        <div className='carousel-item'>
                            <Img className='post-preview-image' fluid={this.props.carImageThree} />
                            <p className="preset-name">soft touch</p>
                        </div>
                        <div className='carousel-item'>
                            <Img className='post-preview-image' fluid={this.props.carImageFour} />
                            <p className="preset-name">safari</p>
                        </div>
                        <div className='carousel-item'>
                            <Img className='post-preview-image' fluid={this.props.carImageFive} />
                            <p className="preset-name">patagonia</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default ShopItemCarousel;