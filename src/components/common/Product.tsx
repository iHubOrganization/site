import React from 'react'
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Badge,
	Box
} from '@mui/material'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

export interface PropOption {
	name: string
	color: string
}

export interface ProductType {
	title: string
	grade: string
	img: string
	price: string
	colorOptions?: PropOption[]
	caseOptions?: PropOption[]
	backgroundColor: string
	additionalImages?: string[]
}

interface ProductProps {
	product: ProductType
	toggleCartItem: (
		product: ProductType,
		quantity: number,
		color: string,
		caseType: string | null
	) => void
	isInCart: boolean
	quantityInCart: number
	onClick: () => void
}

const Product: React.FC<ProductProps> = ({
	product,
	toggleCartItem,
	isInCart,
	quantityInCart,
	onClick
}) => {
	const handleCartIconClick = (event: React.MouseEvent) => {
		event.stopPropagation()
		toggleCartItem(
			product,
			1,
			product.colorOptions?.[0]?.name || '', // Проверяем наличие colorOptions
			product.caseOptions?.[0]?.name || '' // Проверяем наличие caseOptions
		)
	}

	return (
		<Card
			sx={{
				backgroundColor: 'white',
				cursor: 'pointer',
				transition: 'transform 0.3s',
				'&:hover': { transform: 'scale(1.05)' },
				margin: 'auto'
			}}
			onClick={onClick}
		>
			<Box
				sx={{
					position: 'relative',
					width: '350px', // Фиксированная ширина до 1300px
					height: '350px',
					transition: 'width 0.3s, height 0.3s' // Плавный переход при изменении размеров
				}}
			>
				<CardMedia
					component='img'
					image={product.img}
					alt={product.title}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
						background: product.backgroundColor
					}}
				/>
				<IconButton
					aria-label='add to cart'
					onClick={handleCartIconClick}
					sx={{
						position: 'absolute',
						top: 8,
						right: 8,
						backgroundColor: 'white',
						'&:hover': { backgroundColor: '#f0f0f0' }
					}}
				>
					<Badge
						badgeContent={quantityInCart}
						color='secondary'
						sx={{
							'& .MuiBadge-badge': {
								top: '-5px',
								right: '-5px',
								fontSize: '0.75rem',
								minWidth: '20px',
								height: '20px',
								color: 'white',
								backgroundColor: '#F54F29'
							}
						}}
					>
						<FaShoppingCart color={isInCart ? '#F54F29' : 'gray'} />
					</Badge>
				</IconButton>
			</Box>
			<CardContent
				sx={{
					padding: {
						xs: '12px',
						sm: '16px',
						'@media (min-width:1300px)': '20px'
					},
					transition: 'padding 0.3s'
				}}
			>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'
					sx={{ mb: { xs: 1, sm: 2, '@media (min-width:1300px)': 3 } }}
				>
					<Box display='flex' alignItems='center'>
						{[...Array(5)].map((_, index) => (
							<FaStar key={index} color='#FFD700' size={18} />
						))}
						<Typography
							variant='body2'
							color='textSecondary'
							ml={1}
							sx={{
								fontSize: {
									xs: '0.875rem',
									sm: '1rem'
								},
								transition: 'font-size 0.3s'
							}}
						>
							{product.grade}
						</Typography>
					</Box>
					<Typography
						variant='body2'
						color='textSecondary'
						sx={{
							fontSize: {
								xs: '0.875rem',
								sm: '1rem'
							},
							transition: 'font-size 0.3s'
						}}
					>
						{product.price} руб.
					</Typography>
				</Box>
				<Typography
					variant='h6'
					component='div'
					sx={{
						fontSize: {
							xs: '1rem',
							sm: '1.125rem',
							'@media (min-width:1300px)': '1.5rem'
						}, // Увеличение шрифта при больших экранах
						fontWeight: 'bold',
						lineHeight: {
							xs: '1.4',
							sm: '1.5',
							'@media (min-width:1300px)': '1.75'
						},
						transition: 'font-size 0.3s, line-height 0.3s'
					}}
				>
					{product.title}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Product
