import React from 'react'
import SideText from '../components/SideText/SideText.component';
import ShopOverview from '../components/ShopOverview/ShopOverview.component';

import SEO from '~/components/seo'

// Styles
import './shop.styles.scss';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='shop'>
      <SideText content="Shop" />
      <ShopOverview />
    </div>
  </>
)

export default IndexPage
