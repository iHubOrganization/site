// src/components/common/ProductPopup.tsx
import React, { useState } from 'react'
import {
	Dialog,
	DialogContent,
	DialogTitle,
	Button,
	Grid,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	IconButton,
	Box
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
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
	const [selectedColor, setSelectedColor] = useState(product.colorOptions[0])
	const [selectedCase, setSelectedCase] = useState(product.caseOptions[0])

	const handleAddToCart = () => {
		toggleCartItem(product, 1, selectedColor, selectedCase)
	}

	return (
		<Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
			<DialogTitle
				sx={{
					m: 0,
					p: 2,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Typography variant='h6'>{product.title}</Typography>
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						color: (theme) => theme.palette.grey[500]
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								width: '100%',
								borderRadius: '8px',
								overflow: 'hidden',
								backgroundColor: product.backgroundColor
							}}
						>
							<img
								src={product.img}
								alt={product.title}
								style={{
									width: '100%',
									height: 'auto',
									objectFit: 'cover'
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography variant='body1' gutterBottom>
							{`Описание товара: ${product.title} - это высококачественное устройство с рейтингом ${product.grade}.`}
						</Typography>
						<FormControl fullWidth margin='normal'>
							<InputLabel>Цвет</InputLabel>
							<Select
								value={selectedColor}
								onChange={(e) => setSelectedColor(e.target.value)}
								label='Цвет'
							>
								{product.colorOptions.map((color, index) => (
									<MenuItem key={index} value={color}>
										<Box
											sx={{
												display: 'inline-block',
												width: '16px',
												height: '16px',
												backgroundColor: color,
												marginRight: '8px',
												borderRadius: '50%'
											}}
										/>
										{color}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl fullWidth margin='normal'>
							<InputLabel>Чехол</InputLabel>
							<Select
								value={selectedCase}
								onChange={(e) => setSelectedCase(e.target.value)}
								label='Чехол'
							>
								{product.caseOptions.map((caseType, index) => (
									<MenuItem key={index} value={caseType}>
										{caseType}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<Typography variant='h6' color='primary' mt={2}>
							Цена: {product.price} ₽
						</Typography>
						<Button
							variant='contained'
							color='primary'
							onClick={handleAddToCart}
							fullWidth
							sx={{ mt: 2 }}
						>
							Добавить в корзину
						</Button>
					</Grid>
					{product.additionalImages && (
						<Grid item xs={12}>
							<Typography variant='subtitle1' gutterBottom>
								Дополнительные изображения:
							</Typography>
							<Grid container spacing={2}>
								{product.additionalImages.map((img, index) => (
									<Grid item xs={4} key={index}>
										<Box
											sx={{
												width: '100%',
												borderRadius: '8px',
												overflow: 'hidden',
												boxShadow: 1
											}}
										>
											<img
												src={img}
												alt={`Доп. изображение ${index + 1}`}
												style={{
													width: '100%',
													height: 'auto',
													objectFit: 'cover'
												}}
											/>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>
					)}
				</Grid>
			</DialogContent>
			{/* Удаляем DialogActions, так как кнопка "Закрыть" уже в заголовке */}
		</Dialog>
	)
}

export default ProductPopup
