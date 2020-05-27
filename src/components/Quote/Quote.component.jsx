import React from 'react';

// Styles
import './Quote.styles.scss';

// Assets
import FlowerCurve from '../../Assets/flower_curve.svg';

const Quote = ({ quote, author }) => (
    <div className='quote'>
        <img src={FlowerCurve} alt='' />
        <p>{quote}<span className='author'>{author}</span></p>
        <img src={FlowerCurve} alt='' />
    </div>
)

export default Quote;