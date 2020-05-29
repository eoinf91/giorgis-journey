import React from 'react';
import { Link } from 'gatsby';

// Styles
import './LegalFooter.styles.scss';

const LegalFooter = () => (
    <div className='legal-footer'>
        <p>&copy; Giorgi's Journey {new Date().getFullYear()} | <Link to='/terms-of-service'>Privacy</Link></p>
        <p>All rights reserved - Photos cannot be used without my permission.</p>
    </div>
)

export default LegalFooter;