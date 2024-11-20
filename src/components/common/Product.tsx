// src/components/common/Product.tsx
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

export interface ProductType {
	title: string
	grade: string
	img: string
	price: string
	colorOptions: string[] // Доступные цвета модели
	caseOptions: string[] // Доступные чехлы
	backgroundColor: string // Цвет фона карточки товара
	additionalImages?: string[] // Дополнительные изображения (опционально)
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
			product.colorOptions[0],
			product.caseOptions[0]
		)
	}

	return (
		<Card
			sx={{
				maxWidth: 350,
				backgroundColor: 'white',
				cursor: 'pointer',
				transition: 'transform 0.3s',
				'&:hover': { transform: 'scale(1.05)' },
				margin: 'auto'
			}}
			onClick={onClick}
		>
			<Box sx={{ position: 'relative', height: 350, width: 350 }}>
				<CardMedia
					component='img'
					image={product.img}
					alt={product.title}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
						background: `radial-gradient(circle, ${product.backgroundColor}20 0%, ${product.backgroundColor}80 45%, ${product.backgroundColor} 100%)`
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
					<Badge badgeContent={quantityInCart} color='secondary'>
						<FaShoppingCart color={isInCart ? '#F54F29' : 'gray'} />
					</Badge>
				</IconButton>
			</Box>
			<CardContent>
				<Box
					display='flex'
					alignItems='center'
					justifyContent='space-between'
				>
					<Box display='flex' alignItems='center'>
						{[...Array(5)].map((_, index) => (
							<FaStar key={index} color='#FFD700' size={16} />
						))}
						<Typography variant='body2' color='textSecondary' ml={1}>
							{product.grade}
						</Typography>
					</Box>
					<Typography variant='body2' color='textSecondary'>
						{product.price} руб.
					</Typography>
				</Box>
				<Typography variant='h6' component='div'>
					{product.title}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Product
