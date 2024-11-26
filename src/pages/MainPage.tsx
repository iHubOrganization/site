import { useState, useEffect } from 'react'
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
import WelcomeScreen from './WelcomeScreen'
import { styled } from '@mui/system'

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
	caseType?: string | null
}

const ScrollContainer = styled(Box)({
	'&::-webkit-scrollbar': {
		width: '8px'
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: '#888',
		borderRadius: '4px'
	},
	'&::-webkit-scrollbar-thumb:hover': {
		backgroundColor: '#555'
	},
	margin: '0 auto',
	position: 'relative',
	backgroundColor: 'white',
	minHeight: '100vh',
	overflowX: 'hidden'
})

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
		setCart([])
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

	const scrollToMain = () => {
		document
			.getElementById('main-content')
			?.scrollIntoView({ behavior: 'smooth' })
	}

	// Disable scrolling when a modal is open
	useEffect(() => {
		if (isCartOpen || selectedProduct) {
			// Disable scroll on both body and html
			document.body.style.overflow = 'hidden'
			document.documentElement.style.overflow = 'hidden'
		} else {
			// Restore scroll
			document.body.style.overflow = 'auto'
			document.documentElement.style.overflow = 'auto'
		}

		// Clean up on component unmount or state change
		return () => {
			document.body.style.overflow = 'auto'
			document.documentElement.style.overflow = 'auto'
		}
	}, [isCartOpen, selectedProduct])

	return (
		<ScrollContainer>
			<Box
				id='welcome-screen'
				sx={{
					width: '100%',
					height: '100vh',
					backgroundColor: 'white',
					zIndex: 1400
				}}
			>
				<WelcomeScreen onEnter={scrollToMain} />
			</Box>

			<Box id='main-content'>
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
				<Box
					sx={{
						pt: { xs: 5, md: 8 }
					}}
				>
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
		</ScrollContainer>
	)
}

export default MainPage
