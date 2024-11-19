import React from 'react'
import Product, { ProductType } from './Product'
import { Grid, Box, Typography } from '@mui/material'
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
				gap: 3
			}}
		>
			<Typography variant='h4' color='primary' align='center' gutterBottom>
				Наши продукты
			</Typography>
			{productList.map((product) => {
				const cartItem = cart.find((item) => item.title === product.title)
				const isInCart = Boolean(cartItem)
				const quantityInCart = cartItem ? cartItem.quantity : 0

				return (
					<Box
						key={product.title}
						sx={{
							width: 'auto',
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Product
							product={product}
							toggleCartItem={toggleCartItem}
							isInCart={isInCart}
							quantityInCart={quantityInCart}
							onClick={() => onProductClick(product)} // Передаем обработчик клика
						/>
					</Box>
				)
			})}
		</Box>
	)
}

export default ProductList
