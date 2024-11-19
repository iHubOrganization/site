import React from 'react'
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Button,
	Grid,
	Typography,
	IconButton
} from '@mui/material'
import { FaShoppingCart } from 'react-icons/fa'
import { ProductType } from './Product'

interface ProductPopupProps {
	open: boolean
	onClose: () => void
	product: ProductType
	toggleCartItem: (
		product: ProductType,
		quantity: number,
		color: string,
		caseType: string | null
	) => void
}

const ProductPopup: React.FC<ProductPopupProps> = ({
	open,
	onClose,
	product,
	toggleCartItem
}) => {
	const additionalImages = [product.img, product.img, product.img, product.img]

	const handleAddToCart = () => {
		toggleCartItem(product, 1, product.color, null)
	}

	return (
		<Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
			<DialogTitle>
				<div className='flex justify-between items-center'>
					<Typography variant='h6' color='primary'>
						{product.title}
					</Typography>
					<IconButton onClick={onClose}>
						<span className='text-gray-500 hover:text-red-500'>
							&times;
						</span>
					</IconButton>
				</div>
			</DialogTitle>
			<DialogContent>
				<Grid container spacing={3}>
					{/* Основное изображение */}
					<Grid item xs={12} md={6}>
						<img
							src={product.img}
							alt={product.title}
							style={{ width: '100%', borderRadius: 8 }}
						/>
					</Grid>
					{/* Описание товара */}
					<Grid item xs={12} md={6}>
						<Typography variant='body1' gutterBottom>
							{`Описание товара: ${product.title} - это высококачественное устройство с рейтингом ${product.grade}.`}
						</Typography>
						<Typography variant='body2' gutterBottom>
							Цвет: {product.color}
						</Typography>
						<Typography variant='h6' color='primary'>
							Цена: {product.price} ₽
						</Typography>
						<Button
							variant='contained'
							color='primary'
							startIcon={<FaShoppingCart />}
							onClick={handleAddToCart}
							fullWidth
							sx={{ mt: 2 }}
						>
							Добавить в корзину
						</Button>
					</Grid>
					{/* Галерея изображений */}
					<Grid item xs={12}>
						<Typography variant='subtitle1'>
							Дополнительные изображения:
						</Typography>
						<Grid container spacing={2}>
							{additionalImages.map((img, index) => (
								<Grid item xs={4} key={index}>
									<img
										src={img}
										alt={`Доп. изображение ${index + 1}`}
										style={{
											width: '100%',
											borderRadius: 8,
											boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
										}}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color='secondary' variant='outlined'>
					Закрыть
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ProductPopup
