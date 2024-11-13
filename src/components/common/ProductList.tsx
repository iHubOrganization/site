import React from 'react'
import Product, { ProductType } from './Product'
import { CartItem } from '../../pages/MainPage'

interface ProductListProps {
	productList: ProductType[]
	toggleCartItem: (product: ProductType) => void
	cart: CartItem[]
}

const ProductList: React.FC<ProductListProps> = ({
	productList,
	toggleCartItem,
	cart
}) => {
	return (
		<div>
			<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#F54F29] text-center mb-4 md:mb-6 lg:mb-8'>
				Наши последние продукты
			</h2>
			<p className='text-center text-gray-700 mb-8 md:mb-10 lg:mb-12'>
				Ознакомьтесь с нашей коллекцией качественных и новейших товаров,
				доступных по отличным ценам.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{productList.map((product) => {
					const cartItem = cart.find(
						(item) => item.title === product.title
					)
					const isInCart = Boolean(cartItem)
					const quantityInCart = cartItem ? cartItem.quantity : 0

					return (
						<Product
							key={product.title}
							product={product}
							toggleCartItem={toggleCartItem}
							isInCart={isInCart}
							quantityInCart={quantityInCart}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ProductList
