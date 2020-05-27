import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// Styles
import './DestinationItem.styles.scss';

// Components
import SideText from '../../SideText/SideText.component';

// Assets
import Stamp from '../../../Assets/stamp.svg';

const DestinationItem = ({ title, slug, description, image }) => (
    <div className='destination-item'>
        <img src={Stamp} alt='' />
        <SideText content={title} />
        <Img className='destination-image' fluid={image} />
        <div className='content'>
            {/* <p>{description}</p> */}
            <Link to={slug} className='cta cta-beige'>View Posts</Link>
        </div>
    </div>
)

export default DestinationItem;