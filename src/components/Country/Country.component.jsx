import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

// Styles
import './Country.styles.scss';

// Components
import SideText from '../SideText/SideText.component';
import PostPreview from '../PostPreview/PostPreview.component';
import Arrow from '../../Assets/arrows.svg';

class Country extends React.Component {

    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 400, itemsToShow: 2 },
            { width: 1000, itemsToShow: 4 }
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
            <div className='country'>
                <SideText content={this.props.country} />
                <div className='country-carousel'>
                    <Carousel
                        breakPoints={this.breakPoints}
                        pagination={false}
                        renderArrow={this.myArrow}
                    >
                        {
                            this.props.edges.map(({ node }) => (
                                <PostPreview
                                    title={node.frontmatter.title}
                                    slug={node.frontmatter.slug}
                                    excerpt={node.excerpt}
                                    image={node.frontmatter.featuredImage.childImageSharp.fluid}
                                />
                            ))
                        }
                    </Carousel>
                    {/* {posts.map(({ id, ...otherSectionProps }) => (
                <PostPreview key={id} {...otherSectionProps} />
            ))} */}
                </div>

            </div>
        )
    }
}

export default Country;