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
import { ProductType, PropOption } from './Product'

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
	const [selectedColor, setSelectedColor] = useState<PropOption>(
		product.colorOptions?.[0] || { name: '', color: '' } // Используем пустой объект по умолчанию
	)
	const [selectedCase, setSelectedCase] = useState<PropOption>(
		product.caseOptions?.[0] || { name: '', color: '' } // Используем пустую строку по умолчанию
	)

	const handleAddToCart = () => {
		toggleCartItem(product, 1, selectedColor.name, selectedCase.name)
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
						{product.colorOptions && (
							<FormControl fullWidth margin='normal'>
								<InputLabel>Цвет</InputLabel>
								<Select
									value={selectedColor.name}
									onChange={(e) =>
										setSelectedColor(
											product.colorOptions?.find(
												(option) => option.name === e.target.value
											) || { name: '', color: '' }
										)
									}
									label='Цвет'
									renderValue={(selected) => (
										<Box
											sx={{ display: 'flex', alignItems: 'center' }}
										>
											<Box
												sx={{
													width: 16,
													height: 16,
													backgroundColor:
														product.colorOptions?.find(
															(option) =>
																option.name === selected
														)?.color,
													borderRadius: '50%',
													marginRight: 1
												}}
											/>
											{selected}
										</Box>
									)}
								>
									{product.colorOptions.map((colorOption, index) => (
										<MenuItem key={index} value={colorOption.name}>
											<Box
												sx={{
													display: 'inline-block',
													width: '16px',
													height: '16px',
													backgroundColor: colorOption.color,
													marginRight: '8px',
													borderRadius: '50%'
												}}
											/>
											{colorOption.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						)}
						{product.caseOptions && (
							<FormControl fullWidth margin='normal'>
								<InputLabel>Чехол</InputLabel>
								<Select
									value={selectedCase.name}
									onChange={(e) =>
										setSelectedCase(
											product.caseOptions?.find(
												(option) => option.name === e.target.value
											) || { name: '', color: '' } // Значение по умолчанию
										)
									}
									label='Чехол'
									renderValue={(selected) => {
										const selectedOption = product.caseOptions?.find(
											(option) => option.name === selected
										)
										return (
											<Box
												sx={{
													display: 'flex',
													alignItems: 'center'
												}}
											>
												<Box
													sx={{
														width: 16,
														height: 16,
														backgroundColor:
															selectedOption?.color,
														borderRadius: '50%',
														marginRight: 1
													}}
												/>
												{selected}
											</Box>
										)
									}}
								>
									{product.caseOptions.map((caseOption, index) => (
										<MenuItem key={index} value={caseOption.name}>
											<Box
												sx={{
													display: 'inline-block',
													width: '16px',
													height: '16px',
													backgroundColor: caseOption.color,
													marginRight: '8px',
													borderRadius: '50%'
												}}
											/>
											{caseOption.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						)}

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
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default ProductPopup
