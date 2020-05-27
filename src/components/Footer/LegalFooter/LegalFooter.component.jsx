import React from 'react';

// Styles
import './LegalFooter.styles.scss';

const LegalFooter = () => (
    <div className='legal-footer'>
        <p>&copy; Giorgi's Journey {new Date().getFullYear()}</p>
        <p>All rights reserved - Photos cannot be used without my permission.</p>
    </div>
)

export default LegalFooter;