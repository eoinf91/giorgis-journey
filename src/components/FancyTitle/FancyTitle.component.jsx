import React from 'react';

// Styles
import './FancyTitle.styles.scss';

// Assets
import Toucan from '../../Assets/toucan.svg';
import Sloth from '../../Assets/sloth.svg';
import Elephant from '../../Assets/elephant.svg';
import Mask from '../../Assets/mask.svg';
import Colloseum from '../../Assets/colloseum.svg'
import Windmill from '../../Assets/windmill.svg';

const FancyTitle = ({ content }) => (
    <div className='fancy-title'>
        {content === 'Africa'
            ? <img src={Elephant} alt='' />
            : content === 'South America'
                ? <img src={Toucan} alt='' />
                : <img src={Colloseum} alt='' />
        }

        <h1>{content}</h1>
        {content === 'Africa'
            ? <img src={Mask} alt='' />
            : content === 'South America'
                ? <img src={Sloth} alt='' />
                : <img src={Windmill} alt='' />
        }
    </div>
)

export default FancyTitle;