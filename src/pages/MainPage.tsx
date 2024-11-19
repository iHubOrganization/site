import { useState, useEffect } from 'react'
import ProductList from '../components/common/ProductList'
import WhatInTheBox from '../components/common/WhatInTheBox'
import Order from '../components/common/Order'
import Footer from '../components/common/Footer'
import CartIcon from '../components/common/CartIcon'
import Modal from '../components/common/Modal'
import { productList } from '../data/productList'
import CartPage from './CartPage'
import { ProductType } from '../components/common/Product'

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

const toggleCartItem = (product: ProductType, quantity = 1) => {
	setCart((prevCart) => {
		const existingItem = prevCart.find((item) => item.title === product.title)
		if (existingItem) {
			return prevCart.map((item) =>
				item.title === product.title
					? { ...item, quantity: item.quantity + quantity }
					: item
			)
		}
		return [...prevCart, { ...product, quantity }]
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

return (
	<div className='w-full bg-white min-h-screen px-4 pt-6 md:px-6 lg:px-12'>
		{totalItems > 0 && (
			<div className='fixed top-4 right-4 z-50 transition-opacity duration-500 ease-in-out opacity-100'>
				<CartIcon cart={cart} onClick={() => setIsCartOpen(true)} />
			</div>
		)}

		<div className='p-4 md:p-6 lg:p-8'>
			<ProductList
				productList={productList}
				toggleCartItem={toggleCartItem}
				cart={cart}
			/>
			<WhatInTheBox />
			<div id='order-section'>
				<Order
					formData={formData}
					setFormData={setFormData}
					cartItems={cart}
					totalAmount={totalAmount}
					clearCart={clearCart}
				/>
			</div>
		</div>
		<Footer />

		{isCartOpen && (
			<Modal open={isCartOpen} onClose={() => setIsCartOpen(false)}>
				<CartPage
					cart={cart}
					clearCart={clearCart}
					onOrderClick={scrollToOrder}
					totalAmount={totalAmount}
				/>
			</Modal>
		)}
	</div>
)
}

export default MainPage
