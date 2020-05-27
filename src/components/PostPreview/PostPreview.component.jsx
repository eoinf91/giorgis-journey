import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// Styles
import './PostPreview.styles.scss';

const PostPreview = ({ title, excerpt, slug, image }) => (
    <div className='post-preview'>
        {image
            ? <Img className='post-preview-image' fluid={image} />
            : <div className='post-preview-image'></div>
        }
        <div className='post-preview-content'>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <Link to={slug} className='cta'>Read More</Link>
        </div>
    </div>
)

export default PostPreview;