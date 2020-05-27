import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'

// Styles
import './lineItems.styles.scss';

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <div className='line-items'>
      {console.log(item)}
      <Link to={`/product/${item.variant.product.handle}/`}>
        <img
          src={item.variant.image.src}
          alt={`${item.title} product shot`}
        />
      </Link>
      <h2>
        {item.title}
        {`  `}
        {item.variant.title === !'Default Title' ? item.variant.title : ''}
      </h2>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemove} className='cta cta-beige'>Remove</button>
    </div>
  )
}

export default LineItem
