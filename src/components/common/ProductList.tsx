import React from 'react'
import Product, { ProductType } from './Product'
import { Box } from '@mui/material'
import { CartItem } from '../../pages/MainPage'

interface ProductListProps {
	productList: ProductType[]
	toggleCartItem: (
		product: ProductType,
		quantity: number,
		color: string,
		caseType: string | null
	) => void
	cart: CartItem[]
	onProductClick: (product: ProductType) => void
}

const ProductList: React.FC<ProductListProps> = ({
	productList,
	toggleCartItem,
	cart,
	onProductClick
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				gap: { xs: 2, sm: 3, md: 4 }, // Адаптивный промежуток между продуктами
				px: { xs: 2, sm: 4 } // Адаптивные отступы по бокам
			}}
		>
			{productList.map((product) => {
				const cartItem = cart.find((item) => item.title === product.title)
				const isInCart = Boolean(cartItem)
				const quantityInCart = cartItem ? cartItem.quantity : 0

				return (
					<Box
						key={product.title}
						sx={{
							width: {
								xl: '30%' // Три продукта на экранах xl
							},
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Product
							product={product}
							toggleCartItem={toggleCartItem}
							isInCart={isInCart}
							quantityInCart={quantityInCart}
							onClick={() => onProductClick(product)}
						/>
					</Box>
				)
			})}
		</Box>
	)
}

export default ProductList
