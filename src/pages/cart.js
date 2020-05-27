import React from 'react'

import Cart from '~/components/Cart'
import SideText from '../components/SideText/SideText.component';

// Styles
import './cart.styles.scss';

const CartPage = () => (
  <div className='cart-page'>
    <SideText content={'Cart'} />
    <Cart />
  </div>
)

export default CartPage
