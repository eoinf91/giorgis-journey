import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

// Styles
import './LightroomFeature.styles.scss';

const LightroomFeature = () => {
    return (
        <StaticQuery
            query={graphql`
                query presetFeature {
                    imageSharp(fluid: {originalName: {eq: "preset_feature.jpg"}}) {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            `}

            render={data => (
                <div className='lightroom-feature'>
                    <div className='comparer'>
                        <Img className='post-preview-image' fluid={data.imageSharp.fluid} />
                    </div>
                    <div className='content'>
                        <h3>lightroom presets</h3>
                        <Link to='/shop' className='cta cta-beige'>Shop Now</Link>
                    </div>
                </div>
            )}
        />
    )
}

export default LightroomFeature;