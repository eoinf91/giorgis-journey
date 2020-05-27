import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

// Styles
import './CartComp.styles.scss';

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div className='cart-items-container'>
      <h2>Your Items</h2>
      {lineItems}
      <div className='totals'>
        <h2>Total</h2>
        <p>€ {checkout.totalPrice}</p>
        <br />
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
          className='cta'
        >
          Check out
      </button>
      </div>
    </div>
  )
}

export default Cart
