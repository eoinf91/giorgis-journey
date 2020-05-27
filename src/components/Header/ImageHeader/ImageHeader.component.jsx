import React from 'react';
import Img from 'gatsby-image';

// Components
import SideText from '../../SideText/SideText.component';

// Assets
import Map from '../../../Assets/map.svg';

// Styles
import './ImageHeader.styles.scss';

const ImageHeader = ({ sideTextContent, postTitle, copy, image }) => (
    <div className='image-header'>
        <div className='image-container'>
            <SideText content={sideTextContent} />
            {image
                ? <Img className='header-image' fluid={image} />
                : <div className='header-image'></div>
            }
        </div>
        <div className='image-header-content' >
            {postTitle
                ? <h1>{postTitle}</h1>
                : null

            }
            <div dangerouslySetInnerHTML={{ __html: copy }} />
            {/* <h1>{title}</h1>
            <p>{copy}</p>
            {buttonCopy
                ? <Link to={urlPath} className='cta cta-blue'>{buttonCopy}</Link>
                : null
            } */}
        </div>
        <img src={Map} alt='' className='map' />
    </div>
)

export default ImageHeader;