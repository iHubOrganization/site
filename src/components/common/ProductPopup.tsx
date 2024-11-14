import React, { useState } from 'react'
import {
	Modal,
	Backdrop,
	Fade,
	Button,
	MenuItem,
	Select,
	TextField,
	Typography,
	IconButton
} from '@mui/material'
import { FaTimes } from 'react-icons/fa'
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
	const [quantity, setQuantity] = useState(1)
	const [selectedColor, setSelectedColor] = useState(product.color)
	const [selectedCase, setSelectedCase] = useState<string | null>(null)

	const handleAddToCart = () => {
		toggleCartItem(product, quantity, selectedColor, selectedCase)
		onClose()
	}

	return (
		<Modal
			open={open}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
		>
			<Fade in={open}>
				<div
					style={{
						backgroundColor: '#ffffff',
						padding: '24px',
						borderRadius: '10px',
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
						maxWidth: '500px',
						margin: 'auto',
						outline: 'none',
						maxHeight: '90vh',
						overflowY: 'auto',
						position: 'relative'
					}}
					onClick={(e) => e.stopPropagation()}
				>
					<IconButton
						onClick={onClose}
						style={{
							position: 'absolute',
							top: '8px',
							right: '8px',
							color: '#555'
						}}
						aria-label='Close'
					>
						<FaTimes size={20} />
					</IconButton>

					<Typography variant='h6' component='h2' gutterBottom>
						{product.title}
					</Typography>
					<div
						style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}
					>
						<img
							src={product.img}
							alt={product.title}
							style={{
								width: '100px',
								height: '100px',
								objectFit: 'cover'
							}}
						/>
					</div>
					<Typography variant='body1' style={{ marginBottom: '16px' }}>
						Цена: {product.price} руб.
					</Typography>

					<div style={{ marginBottom: '16px' }}>
						<Typography variant='subtitle1'>Выберите цвет:</Typography>
						<Select
							value={selectedColor}
							onChange={(e) =>
								setSelectedColor(e.target.value as string)
							}
							fullWidth
						>
							<MenuItem value='#FF6F61'>Красный</MenuItem>
							<MenuItem value='#6A5ACD'>Синий</MenuItem>
						</Select>
					</div>

					<div style={{ marginBottom: '16px' }}>
						<Typography variant='subtitle1'>Добавить чехол:</Typography>
						<Select
							value={selectedCase || ''}
							onChange={(e) => setSelectedCase(e.target.value as string)}
							fullWidth
						>
							<MenuItem value=''>Без чехла</MenuItem>
							<MenuItem value='simple'>Простой чехол</MenuItem>
							<MenuItem value='premium'>Премиум чехол</MenuItem>
						</Select>
					</div>

					<div style={{ marginBottom: '16px' }}>
						<Typography variant='subtitle1'>Количество:</Typography>
						<TextField
							type='number'
							value={quantity}
							onChange={(e) =>
								setQuantity(Math.max(1, Number(e.target.value)))
							}
							fullWidth
							inputProps={{ min: 1 }}
						/>
					</div>

					<Button
						onClick={handleAddToCart}
						variant='contained'
						color='primary'
						style={{ width: '100%', padding: '12px 0', fontSize: '16px' }}
					>
						Добавить в корзину
					</Button>
				</div>
			</Fade>
		</Modal>
	)
}

export default ProductPopup
