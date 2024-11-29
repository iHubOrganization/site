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
import { FaStar } from 'react-icons/fa'

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
		product.colorOptions?.[0] || { name: '', color: '' }
	)
	const [selectedCase, setSelectedCase] = useState<PropOption>(
		product.caseOptions?.[0] || { name: '', color: '' }
	)
	const [mainImage, setMainImage] = useState<string>(
		product.additionalImages[0]
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
								borderRadius: '8px',
								marginBottom: 2,
								backgroundColor: 'white',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '414px'
							}}
						>
							<Box
								sx={{
									maxWidth: '414px',
									maxHeight: '414px',
									borderRadius: '8px',
									backgroundColor: 'white',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src={mainImage}
									alt={product.title}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '8px'
									}}
								/>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								gap: 1,
								justifyContent: 'space-around'
							}}
						>
							{product.additionalImages?.map((image, index) => (
								<Box
									key={index}
									sx={{
										border:
											mainImage === image
												? '2px solid #F54F29'
												: '1px solid #ccc',
										borderRadius: '4px',
										cursor: 'pointer',
										width: 60,
										height: 60,
										display: 'flex',
										alignItems: 'center',
										backgroundColor: '#f9f9f9'
									}}
									onClick={() => setMainImage(image)}
								>
									<img
										src={image}
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
											borderRadius: '4px'
										}}
										title='Нажмите, чтобы увеличить'
										role='button'
									/>
								</Box>
							))}
							{/* Добавляем основное изображение в конец списка */}
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
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
											) || { name: '', color: '' }
										)
									}
									label='Чехол'
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
						<Box
							display={{ xs: 'block', md: 'flex' }}
							sx={{
								gap: 1,
								justifyContent: 'space-around',
								alignItems: 'center',
								marginBottom: 1,
								mt: 2
							}}
						>
							<Box>
								<Typography variant='h6' color='primary'>
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
							</Box>
							<Box
								sx={{
									display: { xs: 'none', md: 'flex' },
									flexDirection: 'column'
								}}
							>
								<Typography
									variant='body1'
									sx={{ mb: 1, fontWeight: 'bold' }}
								>
									Рейтинг товара:
								</Typography>
								<Box
									display='flex'
									alignItems='center'
									sx={{
										gap: 0.5,
										justifyContent: 'flex-start',
										marginBottom: 1
									}}
								>
									{[...Array(5)].map((_, index) => (
										<FaStar
											key={index}
											color='#FFD700'
											size={20}
											style={{
												marginRight: '4px',
												transition: 'all 0.3s'
											}}
										/>
									))}
								</Box>
								{/* Добавим возможность видеть среднюю оценку */}
								<Typography variant='body2' sx={{ color: '#1976d2' }}>
									Средняя оценка: {product.grade}
								</Typography>
							</Box>
						</Box>

						{/* Отзывы */}
						<Box
							sx={{
								mt: 3,
								p: 2,
								borderRadius: 2,
								borderColor: 'grey.300',
								borderStyle: 'solid',
								borderWidth: '1px'
							}}
						>
							<Typography variant='h6'>Отзывы о товаре</Typography>

							<Typography variant='body2' mt={1}>
								Если у вас есть отзыв о данном товаре, вы можете
								оставить его по следующей ссылке:
							</Typography>

							<Button
								variant='outlined'
								color='secondary'
								onClick={() =>
									window.open('https://t.me/i_iiHub', '_blank')
								}
								sx={{ mt: 1 }}
							>
								Написать отзыв в Telegram
							</Button>
						</Box>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default ProductPopup
