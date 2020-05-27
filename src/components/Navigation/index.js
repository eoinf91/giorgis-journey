import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';

import StoreContext from '~/context/StoreContext'
import Bag from '../../Assets/shopping.svg';

import './cart.styles.scss';

const useQuantity = () => {
	const { store: { checkout } } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Cart = ({ siteTitle }) => {
	const [hasItems, quantity] = useQuantity()

	return (
		<div className='cart-icon'>
			<Link to='/cart'>
				{hasItems &&
					<span className='cart-quantity'>
						{quantity}
					</span>
				}
				<img src={Bag} alt='' className='cart' />
			</Link>
		</div>
	)
}

Cart.propTypes = {
	siteTitle: PropTypes.string,
}

Cart.defaultProps = {
	siteTitle: ``,
}

export default Cart
