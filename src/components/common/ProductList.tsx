import React from 'react'
import Product, { ProductType } from './Product'
import { CartItem } from '../../pages/MainPage'

interface ProductListProps {
	productList: ProductType[]
	addToCart: (product: ProductType) => void
	cart: CartItem[]
}

const ProductList: React.FC<ProductListProps> = ({
	productList,
	addToCart,
	cart
}) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{productList.map((product) => {
				// Определяем, находится ли товар в корзине, и количество, если он есть
				const cartItem = cart.find((item) => item.title === product.title)
				const isInCart = Boolean(cartItem)
				const quantityInCart = cartItem ? cartItem.quantity : 0

				return (
					<Product
						key={product.title}
						product={product}
						addToCart={addToCart}
						isInCart={isInCart}
						quantityInCart={quantityInCart}
					/>
				)
			})}
		</div>
	)
}

export default ProductList
