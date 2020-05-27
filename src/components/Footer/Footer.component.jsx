import React from 'react';

// Styles
import './Footer.styles.scss';

// Components
import Instagram from './Instagram/Instagram.component';
import LegalFooter from './LegalFooter/LegalFooter.component';

const Footer = () => (
    <footer>
        <Instagram />
        <LegalFooter />
    </footer>
)

export default Footer;