import React, { useState, useEffect } from 'react'
import ProductList from '../components/common/ProductList'
import WhatInTheBox from '../components/common/WhatInTheBox'
import Order from '../components/common/Order'
import Footer from '../components/common/Footer'
import CartIcon from '../components/common/CartIcon'
import ProductPopup from '../components/common/ProductPopup'
import CartPage from './CartPage'
import { productList } from '../data/productList'
import { ProductType } from '../components/common/Product'
import { Box, Typography, Modal } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

export interface FormData {
	name: string
	phone: string
	telegram: string
	promoCode: string
	comment: string
}

export interface CartItem {
	title: string
	quantity: number
	price: string
	color?: string
	caseType?: string | null // Добавляем поддержку null
}

function MainPage() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		telegram: '',
		promoCode: '',
		comment: ''
	})

	const [cart, setCart] = useState<CartItem[]>([])
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
		null
	)

	useEffect(() => {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) setCart(JSON.parse(savedCart))
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const totalAmount = cart
		.reduce(
			(acc, item) =>
				acc + item.quantity * parseFloat(item.price.replace(/\s+/g, '')),
			0
		)
		.toFixed(2)

	const toggleCartItem = (
		product: ProductType,
		quantity: number,
		color: string,
		caseType: string | null
	) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(item) =>
					item.title === product.title &&
					item.color === color &&
					item.caseType === caseType
			)
			if (existingItem) {
				return prevCart.map((item) =>
					item.title === product.title &&
					item.color === color &&
					item.caseType === caseType
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			}
			return [
				...prevCart,
				{
					title: product.title,
					quantity,
					price: product.price,
					color,
					caseType
				}
			]
		})
	}

	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	const scrollToOrder = () => {
		setIsCartOpen(false)
		setTimeout(() => {
			document
				.getElementById('order-section')
				?.scrollIntoView({ behavior: 'smooth' })
		}, 300)
	}

	const clearCart = () => setCart([])

	const handleProductClick = (product: ProductType) => {
		setSelectedProduct(product)
	}

	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: 'white',
				minHeight: '100vh',
				px: { xs: 2, md: 3, lg: 6 },
				pt: 3,
				overflowY: 'auto',
				overflowX: 'hidden',
				'&::-webkit-scrollbar': {
					width: '8px'
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#888',
					borderRadius: '4px'
				}
			}}
		>
			{totalItems > 0 && (
				<Box
					sx={{
						position: 'fixed',
						top: 16,
						right: 16,
						zIndex: 1300,
						transition: 'opacity 0.5s',
						opacity: 1
					}}
				>
					<CartIcon cart={cart} onClick={() => setIsCartOpen(true)} />
				</Box>
			)}

			<Box sx={{ p: { xs: 2, md: 3, lg: 4 } }}>
				<Typography
					variant='h4'
					color='primary'
					align='center'
					gutterBottom
					sx={{ marginBottom: 4 }}
				>
					Наши продукты
				</Typography>
				<ProductList
					productList={productList}
					toggleCartItem={toggleCartItem}
					cart={cart}
					onProductClick={handleProductClick}
				/>
				<WhatInTheBox />
				<Box id='order-section'>
					<Order
						formData={formData}
						setFormData={setFormData}
						cartItems={cart}
						totalAmount={totalAmount}
						clearCart={clearCart}
					/>
				</Box>
			</Box>
			<Footer />

			<Modal open={isCartOpen} onClose={() => setIsCartOpen(false)}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '90%',
						maxWidth: 500
					}}
				>
					<CartPage
						cart={cart}
						clearCart={clearCart}
						onOrderClick={scrollToOrder}
						totalAmount={totalAmount}
					/>
				</Box>
			</Modal>

			{selectedProduct && (
				<ProductPopup
					open={Boolean(selectedProduct)}
					onClose={() => setSelectedProduct(null)}
					product={selectedProduct}
					toggleCartItem={toggleCartItem}
				/>
			)}
		</Box>
	)
}

export default MainPage
