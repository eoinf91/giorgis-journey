import React from 'react';

// Styles
import './SocialLinks.styles.scss';

// Assets
import Facebook from '../../../Assets/fb_logo.svg';
import Insta from '../../../Assets/insta_logo.svg';

const SocialLinks = () => (
    <div className='social-links'>
        <a href='https://facebook.com' target='_blank' rel='noreferrer noopener'>
            <img src={Facebook} alt="Facebook" />
        </a>
        <a href='https://instagrm.com/giorgis.journey' target='_blank' rel='noreferrer noopener'>
            <img src={Insta} alt="Instagram" />
        </a>
    </div>
)

export default SocialLinks;