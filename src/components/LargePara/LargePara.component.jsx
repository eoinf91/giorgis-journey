import React from 'react';

// Styles
import './LargePara.styles.scss';

const LargePara = ({ content }) => (
    <div className='large-para' dangerouslySetInnerHTML={{ __html: content }} />
)

export default LargePara;